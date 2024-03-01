import json

# Function to parse the JSON file and obtain the data we need
def parse_json(file):
    with open(file, encoding='utf-8') as f:
        data = json.load(f)
        layers = []
        for feature in data['features']:
            properties = feature['properties']
            geometry = feature['geometry']
            layers.append((properties, geometry))
        return layers


# This function formats the geometry into the correct format for MySQL, talking about the different types of geometries used in the GeoJSON format
def format_geometry(geometry):
    geom_type = geometry['type']
    coords = geometry['coordinates']
    
    # Use a case statement to handle different geometry types
    case = {
        # 'Point': "POINT(" + " ".join(map(str, coords)) + ")",
        # 'Point': "POINT(" + " ".join(map(str, coords[:2])) + ")",
        'LineString': "LINESTRING(" + ", ".join(" ".join(map(str, coord)) for coord in coords) + ")",
        'Polygon': "POLYGON(" + ", ".join("(" + ", ".join(" ".join(map(str, coord)) for coord in ring) + ")" for ring in coords) + ")",
        'MultiPoint': "MULTIPOINT(" + ", ".join(" ".join(map(str, coord)) for coord in coords) + ")",
        'MultiLineString': "MULTILINESTRING(" + ", ".join("(" + ", ".join(" ".join(map(str, coord)) for coord in line) + ")" for line in coords) + ")",
        'MultiPolygon': "MULTIPOLYGON(" + ", ".join("(" + ", ".join("(" + ", ".join(" ".join(map(str, coord)) for coord in ring) + ")" for ring in poly) + ")" for poly in coords) + ")"
    }
    
    return case.get(geom_type, ValueError("Unsupported geometry type: " + geom_type))

# Function to generate the SQL query for inserting data into the database
def insert_data(layer):
    properties = json.dumps(layer[0])  # Convert properties to JSON string
    geometry = format_geometry(layer[1])  # Format geometry
    
    # Only works for Polygons and MultiPolygons
    query = "(NULL, '11', '" + properties + "', ST_GeomFromText('" + geometry + "'), NOW(), NOW())," 
    
    # Only works for Points and MultiPoints, this is the example of the first element in the JSON file
    # INSERT INTO `Polygons` (`id`, `layerId`, `properties`, `geometry`, `createdAt`, `updatedAt`) VALUES (NULL, '1', '{\"LATITUD\": 19.1175, \"LONGITUD\": -104.3241667, \"TITULAR\": \"ABEL SALAZAR VILLASE\\u00d1OR\", \"USUARIO\": \"PRIVADO\", \"T\\u00cdTULO\": \"08COL100450/15AMGE06\", \"USO\": \"AGRICOLA\", \"FECHA_REGI\": \"38824\", \"APROVECHAM\": \"SUBTERR\\u00c1NEOS\", \"ANEXOS\": \"1\", \"VOLUMEN__m\": \"62500\", \"USO_QUE_AM\": \"AGRICOLA\", \"ESTADO\": \"6 - COLIMA\", \"MUNICIPIO\": \"7 - MANZANILLO\", \"REGI\\u00d3N_HI\": \"15 - COSTA DE JALISCO\", \"CUENCA\": \"3\", \"FUENTE\": \"609 - SANTIAGO-SALAGUA\", \"AFLUENTE\": \"0609 - SANTIAGO-SALAGUA\", \"X\": 571082.609088, \"Y\": 2113965.95455, \"MONITOREO\": \"0\", \"ICONO\": \"pozo_d_agua.png\", \"_NAME\": \"08COL100450/15AMGE06\", \"LAYER\": \"POZOS DE CONAGUA\", \"PLANTILLA\": \"2\", \"FID_\": \"50000\"}', ST_GeomFromText('POINT(-104.32416669999998 19.1175)'), '2024-03-01 18:00:55.000000', '2024-03-01 18:00:55.000000')

    #query = "(NULL, '10', '" + properties + "', ST_GeomFromText('" + geometry + "'), NOW(), NOW()),"
    return query

# Function to insert the data into the database
def insert_layers(layers):
    for layer in layers:
        print(insert_data(layer))

# Main function
def main():
    layers = parse_json('RIOS.json')  # Parse the JSON file
    with open('output.sql', 'w') as f:
        f.write("INSERT INTO Polygons (id, layerId, properties, geometry, createdAt, updatedAt) VALUES\n")
        for layer in layers:
            f.write(insert_data(layer) + "\n")
    insert_layers(layers)  # Insert the data into the database


main()
