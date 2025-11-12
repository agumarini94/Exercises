number_user = input('write a number')
multiplicator = input('how many generate')
number = int(number_user)
multi = int(multiplicator)
suma = []
repeticiones = 0
total = 0
#print('numero ' , number , ' * ' , multi)
#AHORA HAGO UN LOOP PARA QUE ITINERE MIENTRAS EL NUMERO SEA MENOR QUE EL MULTIPLICADOR 
while repeticiones != multi: 
    total += number
    suma.append(total)
    repeticiones +=1
print(suma)
