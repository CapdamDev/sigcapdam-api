import json

# Lee el archivo JSON
with open('POZOS_CONAGUA_9.json', 'r', encoding='utf-8') as archivo:
    datos = json.load(archivo)

# Lista para almacenar las features que cumplen con la condición
features_seleccionadas = []

# Itera sobre las features y selecciona las que cumplen con la condición
for feature in datos['features']:
    if 'FUENTE' in feature['properties'] and feature['properties']['AFLUENTE'] == '0607 - EL COLOMO':
        features_seleccionadas.append(feature)

# Guarda las features seleccionadas en un nuevo archivo GeoJSON con extensión .json
with open('0_POZOS.json', 'w', encoding='utf-8') as archivo_salida:
    json.dump({'type': 'FeatureCollection', 'features': features_seleccionadas}, archivo_salida, indent=2, ensure_ascii=False)

print("Archivo 0_POZOS.json creado exitosamente en formato GeoJSON.")
