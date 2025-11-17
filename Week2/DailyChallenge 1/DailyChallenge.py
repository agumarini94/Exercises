class Farm: 
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {} #esto es un diccionario vacio 
    #Step 3
    def add_animal(self,animal_type , count = 1): #Here created a method, with 2 parameters, count por default suma 1
        #recibo atributo 1 --> cow, 5 . eso tengo q agregar al diccionario, si es que no esta 
        if animal_type in self.animals: #Animaltype es el animal que recibo. 
            self.animals[animal_type] += count #Si el animal esta en el diccionario, sumar en Count el contador. 
        else: #but if the animal is not 
            self.animals[animal_type] = count #agrego en la llave animal type, valor Count.. 
        # print(animal_type)

    #Step 4 
    def get_info(self):
        #devolver un string 
        string_animals = '' #first to a empty string 
        for the_animals , cantidad in self.animals.items(): #recorro el diccionario, las llaves son the_animals y cantidad
            string_animals += f'{the_animals} ,{cantidad}\n'  #\n salta de linea
        # print(string_animals) 
        string_animals += '\nE-I-E-I-0!' 
        return string_animals #aca deveria devolver todo lo del diccionario en un string

#STEP6
    def get_animals_type(self):
        result = []
        order_list = sorted(self.animals.items()) #ACA OBTENGO TOUPLES, NO UN STRING. 
        for animal,cantidad in order_list: 
            result.append(f'{animal}: {cantidad}')
        return(result)
    
#STEP 7
    def get_short_info(self):
        total_animales = 'Mcdonald farm has '
        for animal,cantidad in self.animals.items(): #recorro el diccionario, llave y valor 
            if(cantidad > 1):
                total_animales += f' {cantidad} {animal}s ' #si tiene mas de una vaca, devolveria tiene 3 vacas.
            elif cantidad == 1:
                total_animales += f'1 {animal}'
            else:
                total_animales += f' but no {animal}s'
        return total_animales


#Step 5
macdonald = Farm('MacDonald') #name of the farm 
#this steps add animals to the dictionary 
macdonald.add_animal('cow' , 5)
macdonald.add_animal('sheep') #si pones add animal = eso guarda un tuple, no agrega al diccionario ! 
macdonald.add_animal('sheep')
macdonald.add_animal('goat' , 12)
macdonald.add_animal('perro' , 8)
macdonald.add_animal('perro', 4)
macdonald.add_animal('cow' , 122)
macdonald.add_animal('dinosaurio' ,0) #bonus7
print(macdonald.get_info()) #--> Step4
#BONUS 6
print(macdonald.get_animals_type())
#BONUS 7 
print(macdonald.get_short_info())
