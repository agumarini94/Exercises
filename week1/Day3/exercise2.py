family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0
for name in family: 
    if family[name] >12: 
        price += 15
        print(f'the price for {name} is $15')
    elif price > 3:
        price += 10 
        print(f'the price for {name} is $10')
    else: 
        price +=0
        print(f'the price for {name} is $0') #si pongo famuly[index] me va a traer un numero, pero eso es en listas no en diccionario, no va a funcionar .
        #INDEX EN ESTE CASO {INDEX} ES LA CLAVE, EN ESTE CASO EL NOMBRE. 

print( ' pagan en total $' , price)