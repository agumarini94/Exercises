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
