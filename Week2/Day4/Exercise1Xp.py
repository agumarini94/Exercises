import os 
dir_path = os.path.dirname(os.path.realpath(__file__))
# #Sirve para:
# Crear carpetas , Borrar archivos , Ver el contenido de un directorio , Saber en qué carpeta estás trabajando 
# Unir rutas de archivos ,Moverte entre carpetas

with open('words.zip' , 'r', encoding='UTF-8') as my_file: 
    contenido = my_file.read()

print (contenido)
def get_word_from_file():
    file_object = open('\words.zip' , 'r')
myfile = get_word_from_file() 
print(myfile(f))