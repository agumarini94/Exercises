#----------------------------- EXERCISE 1 ----------------------------
class Cat:  #ACA DEFINI LA CLASE 
    def __init__(self,cat_name , cat_age):
        self.cat_name = cat_name
        self.cat_age = cat_age

def cat_older(cat1,cat2,cat3): #ACA HAGO UN METHODO QUE COMPARE LOS 3 OBJETOS(LOS 3 GATOS)
    mayor = cat1  #asigno un gato como mayor, 
    if cat2.cat_age > mayor.cat_age: #si el gato 2 es mayor que el 1, lo guarda en el mayor y compara con el 3 
        mayor = cat2
    if cat3.cat_age > mayor.cat_age: # si es mas grande que el 2, que esta en mayor, lo actualiza y guarda en mayor gato3. 
        mayor = cat3
    return mayor

#ESTOS SON LOS OBJETOS. 
cat1 = Cat('Tom', 8)
cat2 = Cat('Jerry', 2)
cat3 = Cat('Mate' , 5)
resultado = cat_older(cat1,cat2,cat3)    
print(f'el gato mas viejo es {resultado.cat_name} con {resultado.cat_age} anos')
# my_cat1 = input('Name cat 1 ')
# my_cat2 = input('Name cat 2 ')
# my_cat3 = input('Name cat 3 ')


#----------------------------- EXERCISE 2 ----------------------------

# class Dog: #ACA CREE LA CLASE. 
#     def __init__(self,dog_name,dog_height):
#         self.name = dog_name
#         self.height = dog_height

# #ACA CREE EL METODO
#     def bark(self): #SELF, PARA IDENTIFICAR QUE SE LLAMA AL MISMO OBJETO, EN ESTE CASO ES EL OBJETO QUE LE PASO EN LA FUNCION. 
#         print(f'i {self.name} guau')

# #ACA CREE EL METODO
#     def jump(self):
#         salto = self.height * 2
#         print(f'i {self.name} salta {salto}cm de alto') #TENGO QUE TRAER EL NOMBRE DEL PERRO QUE SALTA. 

# #ACA CREO LOS OBJETOS CON SUS ATRIBUTOS.
# davids_dog = Dog('Peter',54)
# sarahs_dog = Dog('Juana' , 21)
# davids_dog.bark()
# davids_dog.jump()

#---------------------------------------EXERCISE 3 ------------------------------------------
# class Song : #ACA CREO LA CLASE 
#     def __init__(self,lyrics):
#           self.lyrics = lyrics
    
#     def sing_me_a_song(self): #ACA DEFINO EL METODO , LA ACCION QUE REALIZA LA FUNCION.
#         new_song = self.lyrics #GUARDO EN NEW SONG, LA LISTA QUE RECIBI COMO PARAMETRO
#         # print(new_song)
#         the_song = ' '.join(new_song) #JUNTO LA LISTA EN UNA SOLA LISTA SEPARADA POR ESPACIOS. 
#         print (the_song)

# #aca cree el objeto, y le pase una lista 
# stairway = Song(['There’s a lady whos sure', "all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()


#---------------------------------------EXERCISE 4 ------------------------------------------
class Zoe:
    def __init__(self,the_zoo):
        self.zoo_name = the_zoo
        list_animals = []

#PASO 3
    def add_animal(self, new_animal):
        if new_animal in list_animals:
            list_animals.append(new_animal)
        else:
            print('ya esta ese animal')
        # print(list_animals)

#PASO 4
    def get_animals(self): #PONGO SELF POR QUE EL OBJETO ES EL MISMO, OSEA ZOO 
        print(list_animals)

#PASO 5
    def sell_animal(self,animal_sold):
        if animal_sold in list_animals: #SI EL ANIMAL QUE RECIBI, ESTA EN LA LISTA DE ANIMALES,
            list_animals.remove(animal_sold) #SI APARECE, LO BORRO
        else:
            print('ese animal no esta en la lista' , animal_sold)
        print(f'new list --> {list_animals}')


#aca creo los objetos 
list_animals = [] #ESTA LISTA ES PARA GUARDAR LA LISTA DE LOS ANIMALES. 
# new_animal = ['vaca','gallina','gato','toro'] #ESTO SON LOS ANIMALES QUE VOY A INGRESAR EN LA LISTA
# animal_sold = 'vaca'
the_zoo = Zoe('ramatgan') 
# the_zoo.add_animal(new_animal) #ACA LLAMO AL METHODO ADD ANIMAL, Y LE PASO EL ATRIBUTO NEW ANIMAL, QUE ES UNA LISTA --> PASO 3
the_zoo.get_animals() # --> PASO 4 
the_zoo.sell_animal('vaca') # --> PASO 5 ESTO NO SE POR QUE NO ANDA ! 

#PASO 6 DESPUES NO ENTIENDO 