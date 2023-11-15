import os

def renombrar_archivos(ruta_directorio):
    for nombre_archivo in os.listdir(ruta_directorio):
        if nombre_archivo.endswith('.json') and '_' in nombre_archivo:
            partes = nombre_archivo.split('_')
            nuevo_nombre = f"{partes[0]}.json"
            vieja_ruta = os.path.join(ruta_directorio, nombre_archivo)
            nueva_ruta = os.path.join(ruta_directorio, nuevo_nombre)
            os.rename(vieja_ruta, nueva_ruta)
            print(f"Renombrado: {nombre_archivo} a {nuevo_nombre}")

ruta_de_tu_directorio = './public/assets/layers/capas_js/rutas/'
renombrar_archivos(ruta_de_tu_directorio)
