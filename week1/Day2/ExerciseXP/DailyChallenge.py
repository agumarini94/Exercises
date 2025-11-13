# number_user = input('write a number')
# multiplicator = input('how many generate')
# number = int(number_user)
# multi = int(multiplicator)
# suma = []
# repeticiones = 0
# total = 0
# #print('numero ' , number , ' * ' , multi)
# #AHORA HAGO UN LOOP PARA QUE ITINERE MIENTRAS EL NUMERO SEA MENOR QUE EL MULTIPLICADOR 
# while repeticiones != multi: 
#     total += number
#     suma.append(total)
#     repeticiones +=1
# print(suma)

#--------- ESTO FUNCIONA SOLO HAY QUE SACAR EL COMENTARIO --------------

## --------- DAILY CHALLENGE 2 ---------

user_string = input('Write a string') # aca guardo el string, y lo paso a todo minuscula 
my_string = user_string[0] 
# my_set.add(user_string)
total_letters = len(user_string) 
for letter in user_string: 
    if letter == my_string[-1]: 
        continue
    else:
        my_string = my_string + letter
print(my_string)
    #hola 
    #mystinrg = ho 
    # index = l 

#     if variable[posicion0] in variable[position1]: entonces descartarla 

# elif variable[position0] != de variable[position1]
# guardar en una lista 