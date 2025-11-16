class Dog: #ACA CREE LA CLASE. 
    def __init__(self,dog_name,dog_height):
        self.name = dog_name
        self.height = dog_height

#ACA CREE EL METODO
    def bark(self): #SELF, PARA IDENTIFICAR QUE SE LLAMA AL MISMO OBJETO, EN ESTE CASO ES EL OBJETO QUE LE PASO EN LA FUNCION. 
        print(f'i {self.name} guau')

#ACA CREE EL METODO
    def jump(self):
        salto = self.height * 2
        print(f'i {self.name} salta {salto}cm de alto') #TENGO QUE TRAER EL NOMBRE DEL PERRO QUE SALTA. 

#ACA CREO LOS OBJETOS CON SUS ATRIBUTOS.
davids_dog = Dog('Peter',54)
sarahs_dog = Dog('Juana' , 21)
davids_dog.bark()
davids_dog.jump()