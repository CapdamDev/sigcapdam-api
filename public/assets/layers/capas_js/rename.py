import os

# Directorio donde se encuentran los archivos .js
directory = './'

# Codificación del archivo JavaScript
file_encoding = 'latin-1'  # o la codificación adecuada para tus archivos

# Loop a través de los archivos en el directorio
for filename in os.listdir(directory):
    if filename.endswith(".json"):
        file_path = os.path.join(directory, filename)

        # Leer el contenido del archivo JavaScript en modo binario
        with open(file_path, 'rb') as file:
            lines = file.read().decode(file_encoding).splitlines()

        # Eliminar la línea que contiene la variable 'json_nombre_del_archivo'
        lines = [line for line in lines if not line.strip().startswith('var json_' + filename[:-3])]

        # Agregar una llave de inicio '{' en la primera línea
        lines.insert(0, '{')

        # Escribir el contenido modificado de nuevo al archivo JavaScript
        with open(file_path, 'w', encoding=file_encoding) as file:
            file.write('\n'.join(lines))

print("Variable removal and addition of '{' complete.")
