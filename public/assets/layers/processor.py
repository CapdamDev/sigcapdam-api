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

# Function to format the geometry into the correct format for MySQL
def format_geometry(geometry):
    geom_type = geometry['type']
    coords = geometry['coordinates']
    
    if geom_type == 'Point':
        return "POINT(" + " ".join(map(str, coords)) + ")"
    elif geom_type == 'LineString':
        return "LINESTRING(" + ", ".join(" ".join(map(str, coord)) for coord in coords) + ")"
    elif geom_type == 'Polygon':
        return "POLYGON(" + ", ".join("(" + ", ".join(" ".join(map(str, coord)) for coord in ring) + ")" for ring in coords) + ")"
    elif geom_type == 'MultiPoint':
        return "MULTIPOINT(" + ", ".join(" ".join(map(str, coord)) for coord in coords) + ")"
    elif geom_type == 'MultiLineString':
        return "MULTILINESTRING(" + ", ".join("(" + ", ".join(" ".join(map(str, coord)) for coord in line) + ")" for line in coords) + ")"
    elif geom_type == 'MultiPolygon':
        return "MULTIPOLYGON(" + ", ".join("(" + ", ".join("(" + ", ".join(" ".join(map(str, coord)) for coord in ring) + ")" for ring in poly) + ")" for poly in coords) + ")"
    else:
        raise ValueError("Unsupported geometry type: " + geom_type)

# Function to generate the SQL query for inserting data into the database
def insert_data(layer):
    properties = json.dumps(layer[0])  # Convert properties to JSON string
    geometry = format_geometry(layer[1])  # Format geometry
    
    query = "INSERT INTO Layers (id, category, properties, geometry) VALUES (NULL, '1', '" + properties + "', ST_GeomFromText('" + geometry + "'));"
    return query

# Function to insert the data into the database
def insert_layers(layers):
    for layer in layers:
        print(insert_data(layer))

# Main function
def main():
    layers = parse_json('1001.json')  # Parse the JSON file
    insert_layers(layers)  # Insert the data into the database

main()
