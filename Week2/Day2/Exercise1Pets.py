class Pets(): #esta es la clase principal 
    def __init__(self, animals):
        self.animals = animals

    def walk(self): #METHOD WALK (FUNCION)
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):  #Bengal hera de Cat. 
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat): #Charteux hereda de Cat
    def sing(self, sounds):
        return f'{sounds}'
    
class Siameses(Cat): #Siameses herea de Cat
    pass 
#Paso 2: Crear una lista de instancias Cat
#Aca creo objetos de bengal, charteux y siameses, que son heredados de Cats.  
bengal_obj = Bengal('Tom' , 4)
charteux_obj = Chartreux('Jerry' , 2)
siameses_obj = Siameses('Homero', 12)
all_cats = [bengal_obj , charteux_obj, siameses_obj]

#Paso 3: Crear una instancia de Pets
#Crea una instancia de la Petsclase llamada sara_pets, pasando la all_catslista como argumento.
sara_pets = Pets(all_cats) #PETS ES EL FORMULARIO VACIO, Y ALL CATS, SON LOS OBJETOS CON SUS "VALORES"

sara_pets.walk() #ESTO LLAMA A LA FUNCION WALK, QUE ESTA EN LA CLASE PETS, Y LE ENVIO LOS "OBJETOS", QUE SON LOS QUE ESTAN EN LA LISTA. 
