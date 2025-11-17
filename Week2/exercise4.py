class Zoe:
    def __init__(self,the_zoo):
        self.zoo_name = the_zoo
        # list_animals = []
#PASO 3
    def add_animal(self, new_animal):
        if new_animal in list_animals:
            list_animals.append(new_animal)
        else:
            print('ya esta ese animal' , list_animals)
        print(list_animals)
# PASO 4
    def get_animals(self): #PONGO SELF POR QUE EL OBJETO ES EL MISMO, OSEA ZOO 
        print(list_animals)
# #PASO 5
    def sell_animal(self,animal_sold):
        if animal_sold in list_animals: #SI EL ANIMAL QUE RECIBI, ESTA EN LA LISTA DE ANIMALES,
            list_animals.remove(animal_sold) #SI APARECE, LO BORRO
        else:
            print('ese animal no esta en la lista' , animal_sold)
        print(f'new list --> {list_animals}')
#aca creo los objetos 
list_animals = [] #ESTA LISTA ES PARA GUARDAR LA LISTA DE LOS ANIMALES. 
new_animal = ['vaca','gallina','gato','gallo','toro'] #ESTO SON LOS ANIMALES QUE VOY A INGRESAR EN LA LISTA
# animal_sold = ['vaca']
the_zoo = Zoe('ramatgan') 
the_zoo.add_animal(new_animal) #ACA LLAMO AL METHODO ADD ANIMAL, Y LE PASO EL ATRIBUTO NEW ANIMAL, QUE ES UNA LISTA --> PASO 3
the_zoo.get_animals() # --> PASO 4 
# the_zoo.sell_animal(animal_sold) # --> PASO 5 ESTO NO SE POR QUE NO ANDA ! 

#PASO 6 DESPUES NO ENTIENDO, ANTES ANDABA AHORA NO FUNCIONA NADA ! NO SE QUE PASA
