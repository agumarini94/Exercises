# ------------------------- EXERCISE 1 -----------------------------
#You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dictionary = dict(zip(keys , values)) 
print (my_dictionary) 

dicc = {}
for i in range(len(keys)):
    dicc[keys[i]] = values[i] 

print (dicc)

# ------------------------- EXERCISE 2 --------------------------------
#Write a program that calculates the total cost of movie tickets for a family based on their ages.
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0
for name in family: 
    if family[name] >12: 
        price += 15
        print(f'the price for {name} is $15')
    elif price[name] >= 3 and family[name] <= 3:  
        price += 10 
        print(f'the price for {name} is $10')
    else: 
        price +=0
        print(f'the price for {name} is $0') #si pongo famuly[index] me va a traer un numero, pero eso es en listas no en diccionario, no va a funcionar .
        #INDEX EN ESTE CASO {INDEX} ES LA CLAVE, EN ESTE CASO EL NOMBRE. 

print( ' pagan en total $' , price)

# ***------------------------------------ EXERCISE 3 --------------------------------------***
brand = { 'name': 'Zara' ,
        'creation_date': 1975 ,
        'creator_name': 'Amancio Ortega Gaona',
        'type_of_clothes': ['men', 'women', 'children', 'home'], #ACA TENGO UNA LISTA 
        'international_competitors': ['Gap', 'H&M', 'Benetton'], #ACA TENGO UNA LISTA 
        'number_stores': 7000 ,
        'major_color': {
            'rance': 'blue', 
            'Spain': 'red', 
            'US': ['pink', 'green'] #aca tengo una lista 
              }
        }
# =========== POINT 1 =============

# brand['number_stores'] = 2

# =========== POINT 2 =============
# clothes_type = ' , '.join(brand['type_of_clothes']) #USO JOIN PARA UNIR TODOS LOS ELEMENTOS DE UNA LISTA EN UN SOLO TEXTO, Y AGREGO SEPARADOS POR COMAS. UNO TODOS LOS TYPOS DE CLOTHES EN UNA VARIABLE CLOTHES_TYPE. 
# print('zara clients using ' , clothes_type)

# # =========== POINT 3 =============Add a new key country_creation with the value Spain.
# brand['country_creation'] = 'Spain' #Para agregar un elemento nuevo al diccionario .
# print (brand)

# =========== POINT 3 =============Check if international_competitors exists and, if so, add “Desigual” to the list.

# for recorro_dicc in brand: #aca recorro todas las claves del diccionario 
#     if 'international_competitors' == 'international_competitors': #verifico si esta la clave esa (si es verdadero...)
#         brand['international_competitors'] = 'Desigual'
#         break
# print (brand)

# # =========== POINT 4 ============= Delete the creation_date key.
# del brand['creation_date']
# print(brand)


# # =========== POINT 5 ============= Print the last item in international_competitors.
# competitos = brand['international_competitors'] #es simple, en una lista nueva, vacia, guardo la lista que esta dentro del dicc, en la clave que quiero. Luego imprimo el ultimo indice , -1. 
# print(competitos[-1])

# # =========== POINT 6 ============= Print the major colors in the US.
# colours = brand['major_color'] #guarde en un nuevo diccionario, el diccionario major color, que esta dentro de brand. 
# us_colors = (' , ').join(colours['US']) #aca cree una variable, y use join para obtener en un texto los valores de la llave US . 
# print('The major color in US are ' , us_colors)

# =========== POINT 7 ============= Print the number of keys in the dictionary.
# total_keys = 0 
# total_llaves = 0
# for my_keys in brand.values(): #Aca hago un loop para recorrer los valores del diccionario , por ejemplo en keys va ir name, creation... y en values directamente el valor de cada keys.
#     if isinstance(my_keys,dict): #aca veo si el valor es de tipo diccionario. ISINSTANCE verifica un valor dentro del dicc BRAND es DICT.  <<<<<_--------------
#         total_keys += len(my_keys.keys()) #La funcion keys() devuelve todas las llaves de un diccionario.  < < <<------------ IMPORTANTE
#     else:
#         llaves = len(brand.keys()) #USO LEN PARA VER CUANTOS ELEMENTOS TENGO DENTRO DEL DICCIONARIO. Y CON KEYS VEO CUANTAS LLAVES TENGO. 
# total_llaves = total_keys + llaves 
# print(total_llaves)

# =========== POINT 8 ===================Print all keys of the dictionary.
valores = []
mas_valores = []
for my_keys in brand:
    if isinstance(my_keys,dict): #si dentro de mys llaves hay valor dict..
        valores = my_keys.keys() #guarda en valores, las llaves en una lista
    else: #osea si no es diccionario 
        mas_valores = brand.keys()

lista_valores = (' , ').join(valores)
second_lista = (' , ').join(mas_valores)
print(lista_valores , second_lista)
#THIS EXERCISE WORKS BUT NOT 100%. NEED TO BRING ME THE VALORES OF THE DICCIONARY THAT IS INSIDE OF THE DICTIONARY. 

#BONUS I DONT HAVE IDEA HOW TO DO IT.. 


# ***------------------------------------ EXERCISE 4 --------------------------------------***
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
#tengo que hacer que los keys, sean los nombres que tengo en la lista
#y tengo que hacer que vayan del 0, hasta la cantidad de elementos que tiene la lista .
index = 0 
# for values in users: #guardo la lista en values . 
#     index +=1
#     my_dicc = {values:index}
#     print(my_dicc)

# ============= point 2 =========

# for values in users: #guardo la lista en values . 
#     my_dicc = {index:values}
#     index +=1
#     print(my_dicc)

# ============= point 3 =========
    

for values in sorted(users): #guardo la lista en values . 
    my_dicc = {values:index}
    index +=1
    print(my_dicc)