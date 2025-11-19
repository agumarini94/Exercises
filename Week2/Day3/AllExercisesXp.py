#--------------------- EXERCISE 1 ----------------------------------------------- #################### 
class Currency: #ESTO ES LA CLASE 
    def __init__(self, currency, amount):  
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount == 1:
            return f'{self.amount} {self.currency}'
        else:
            return f'{self.amount} {self.currency}s'
        
    def __int__(self):
        return int(self.amount)
    
    def __repr__(self):
        if self.amount == 1:
            return f'{self.amount} {self.currency}'
        else:
            return f'{self.amount} {self.currency}s'
        
    def __add__(self, other):
        if type(other) != int and self.currency == other.currency:
            return self.amount + other.amount
        elif type(other) == int:
            return self.amount + other
        else:
            raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
        
    def __iadd__(self, other):
        if type(other) != int:
            result = self.amount + int(other.amount)
            self.amount = result
            return self
        else:
            result = self.amount + int(other)
            self.amount = result
            return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

#the comment is the expected output
print(c1) 
# '5 dollars'

print(int(c1))
# # 5

print(repr(c1))
# # '5 dollars'

print(c1 + 5)
# # 10

print(c1 + c2)
# # 15

print(c1) 
# 5 dollars

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

# print(c1 + c3)
# # TypeError: Cannot add between Currency type <dollar> and <shekel>

#----------------------------------- EXERCISE 3 ------------------- ***********
import random 
import string #traigo el modulo stirng y random 
my_string = ''
abcedario = string.ascii_lowercase #aca guarde todas las letras de a - z. 
# print (abcedario)
while len(my_string) < 5: #mientras que my string tenga menos de 5 elementos..
    my_string += random.choice(abcedario) #saco una letra random del abc y lo sumo a my string 
print (my_string)
    

#----------------------------------- EXERCISE 4 ------------------- ***********
import datetime #traigo el metodo fecha 
fecha_de_hoy = datetime.date.today() #esto imprime la fecha de hoy
hora_de_ahora = datetime.datetime.now() #esto trae le hora de ahora
print(f"Today es {fecha_de_hoy} y es la hora {hora_de_ahora.strftime('%H,%M,%S')}") #%h , para poner hora, Minutos , Seconds. (y con strftime -> elijo el formato de como mostrar la hora.. )


#----------------------------------- EXERCISE 5 ------------------- ***********
import datetime

def calculate_age(fecha_valida):
    current_date = datetime.date.today()
    birth_date = fecha_valida.date() # esto transforma la fecha del usuario a un date. Fecha valida es un datatime, por eso lo transformo en date. 
    diferencia_age = current_date - birth_date
    return f'{diferencia_age.total_seconds()} segundos you are living'


user_age = input('User age (YYYY-MM-DD)')
fecha_valida = datetime.datetime.strptime(user_age,'%Y-%m-%d')
# current_date = datetime.date.today()
# diferencia_age = current_date - fecha_valida
print(calculate_age(fecha_valida))

#----------------------------------- EXERCISE 6 ------------------- ***********
import datetime

def calculate_age(fecha_valida):
    current_date = datetime.date.today()
    birth_date = fecha_valida.date() # esto transforma la fecha del usuario a un date. Fecha valida es un datatime, por eso lo transformo en date. 
    diferencia_age = current_date - birth_date
    return f'{diferencia_age.total_seconds()} segundos you are living'


user_age = input('User age (YYYY-MM-DD)')
fecha_valida = datetime.datetime.strptime(user_age,'%Y-%m-%d')
# current_date = datetime.date.today()
# diferencia_age = current_date - fecha_valida
print(calculate_age(fecha_valida))


#----------------------------------- EXERCISE 7 ------------------- ***********
from faker import Faker
fake = Faker()
# the_users = ' '
user_list = [] #lista vacia 
total_users = int(input('how many users ')) #pregunto cuantos users 

def add_users(): #funcion add_user
    # number_user = 0
    # while len(user_list) < total_users: 
    #     user_list.append(number_user)
    #     number_user +=1
    # return user_list # [0 , 1 ,2 ,3 ,4]
    for _ in range(total_users):
        users = {
                    'name': fake.name(),
                     'addres': fake.address(),
                     'language_code': fake.language_code()
                     }
        user_list.append(users)
        # the_users =' , '.join(user_list)
        # user_list = ' , '.join(user_list)
    return user_list
print(add_users())

