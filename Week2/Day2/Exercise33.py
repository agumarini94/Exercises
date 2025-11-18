
class Parent: 
    def speak(self):
        print('Parent is speaking')

class Child(Parent):
    pass

class Grandchild(Child): #ESTO BUSCA EN GRAND CHILD EL OBJETO, SI NO LO ENCUNETRA, VA Y LO BUSCA EN CHILD.. ALGO ASI.

child1 = Child() #va a child, esta ahi el 
child1.speak()
grandchild = Grandchild()  
grandchild.speak()

#INHERITING ATTRIBUTES 
class Animal: 
    def __init__(self,name,family,legs):
        self.name = name 
        self.family = family
        self.legs = legs

    def sleep(self):
        return f'{self.name} is sleeping - ANIMAL'
    
class Dog(Animal):
    pass
    def __init__(self, name, family, legs, trained, age):
        super().__init__(name, family, legs)
        self.trained = trained
        self.age = age 

# dog1 = Dog() #esto no va a andar, xq python espera que pase 3 argumentos. name,family, legs.. 
dog1 = Dog('Peter' , 'canino' , 4)
print(dog1.sleep())