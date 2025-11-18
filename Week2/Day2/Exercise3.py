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
