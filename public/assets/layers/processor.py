import json

# Function to parse the JSON file and obtain the data we need
def parse_json(file):
    with open(file) as f:
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
        'Point': "POINT(" + " ".join(map(str, coords)) + ")",
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
    
    query = "(NULL, '1', '" + properties + "', ST_GeomFromText('" + geometry + "'), NOW(), NOW());"
    return query

# Function to insert the data into the database
def insert_layers(layers):
    for layer in layers:
        print(insert_data(layer))

# Main function
def main():
    layers = parse_json('1003.json')  # Parse the JSON file
    print("INSERT INTO Polygons (id, layerId, properties, geometry, createdAt, updatedAt) VALUES")
    insert_layers(layers)  # Insert the data into the database


main()
