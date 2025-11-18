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


# -------------------- EXERCISE 2 ------------------------------
class Dog(): 
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age 
        self.weight = weight 
    def bark (self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        dog_speed = self.weight / self.age * 10 
        return int(dog_speed)
    
    def fight(self, other_dog): #self vednria a se rel perro que yo paso, y otro dog seria el segundo perro 
        dog_self = self.run_speed() * self.weight #aca obtengo la velocidad de dog self, 
        versus_dog = other_dog.run_speed() * other_dog.weight #aca la de contra quien pelea, other_dog
        if dog_self < versus_dog: #osea other_dog wins ..
            return f'{other_dog.name}, {other_dog.weight}  wins over {self.name} , {self.weight}'
        elif versus_dog == dog_self:
            return f'are the same speed'
        else:
            return f' {self.name} , {self.weight} wins over {other_dog.name} , {other_dog.weight}'
        # return f'{fight_winner} is the winner'
    
#aca creo instancias/objetos de la clase Dog. 
perro1 = Dog('messi' ,5, 80)
perro2 = Dog('neymar',4, 76)
perro3 = Dog('chicharito', 10, 45)

#AHORA LLAMO AL METODO. OSEA A LA ACCION
print(perro1.bark())

print(perro3.run_speed())
# print(perro1.run_speed())

print(perro3.fight(perro2))

# -------------------- EXERCISE 3 ------------------------------
# import exercise2Dogs
import random
class Dog(): 
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age 
        self.weight = weight 
    def bark (self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        dog_speed = self.weight / self.age * 10 
        return int(dog_speed)

class PetDog(Dog): 
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight) #ESTO TRAE LA INFO DE DOG ARRIBA.
        self.trained = False #esto es un atributo que se empieza en falso cuando se crea el objeto 

    def train(self): 
        print(self.bark())
        self.trained = True #ESTO NO ENTIENDO PARA QUE ESTA 

#Implement a play(*args) method that prints “<dog_names> all play together”.
    def play(self, *dog_names): #CUANDO TRAIGO UN *ARGS, SIEMPRE RECIBO UN TUPL
            perritos = ' ' #guardo un string vacio para guardar el nombre de los perros.
            for items in dog_names: #ACA RECORRO EL TUPLE RECIBIDO. 
                perritos += str(items) + ' '  #aca guardo en perritos, los "nombres" de los items y lo convierto en string
            return f'{perritos}are played all togethers'

#Implement a do_a_trick() method that prints a random trick if trained is True.
    def do_a_trick(self):
        # truco = ' '
        tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        truco = random.choice(tricks)
        self.train() #PARA QUE EL TRAINED SEA VERDADERO, TENGO QUE LLAMAR A LA FUNCION TRAIN PARA QUE EL PERRO ENTRENE Y PASE A TRUE. 
        if self.trained: #esto verifica que trained = True
            print(f"{self.name} {truco}")

perro1 = PetDog('messi' ,5, 80)
perro2 = PetDog('neymar',4, 76)
perro3 = PetDog('suarez', 10, 45)

#AHORA LLAMO AL METODO. OSEA A LA ACCION
print(perro1.bark())
print(perro3.run_speed())
print(perro2.play('Juanito', 'Jose','Luis')) #ACA ESTOY MANDANDO VARIOS NOMBRES PARA VARIOS PERROS, Y LO GUARDA EN SELF.NAME.
perro2.train()
perro3.do_a_trick
