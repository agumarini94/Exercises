class Zoe:
    def __init__(self,the_zoo):
        self.zoo_name = the_zoo
        self.list_animals = [] #empty list

    def add_animal(self, *new_animal): #si van a ser varios ingresos , necesito un for loop. * una estrella puede ser un elemento, o varios.  
        for each_animal in new_animal:
            if each_animal not in new_animal:
                each_animal.append.self.list_animals 
        if new_animal not in self.add_animal: 
            self.animals.append(new_animal)
        else:
            print('this animal is not in the zoo')

new_zoo = Zoe('New York Zoo')
Zoe.add_animal('elephant' , 'toro' , 'leon') #use args para agregar varios a la vez . *args **kargs. KWARGS IS ONLY FOR DICCIONARIES. 
