import random 
import string #traigo el modulo stirng y random 
my_string = ''
abcedario = string.ascii_letters #aca guarde todas las letras de a - z. 
# print (abcedario)
while len(my_string) < 5: #mientras que my string tenga menos de 5 elementos..
    my_string += random.choice(abcedario) #saco una letra random del abc y lo sumo a my string 
print (my_string)
    