toppings = input('Write your toppings, and when dont want more write Quit')
my_toppings =[] #Creo una lista vacia para guardar los nuevos toppings 
while toppings.lower() != 'quit': #mientras que lo que ingresa el usuario es diferente de Quit..
        print('Adding ' , toppings , ' to your pizza')
        my_toppings.append(toppings) #here should add the new topping 
        toppings = input(toppings)  #Aca vuelvo a pedir al usuario que ingrese otro topping 

total_toppings = int(len(my_toppings))
if total_toppings == 0: #Si no eligio ningun topping, entonces mostra q no eligio toppings. 
        print ('Your didnt choose topping, the price is $10')
else:
    price_pizza = 10 + total_toppings * 2.5
    print ('total price with ' ,  total_toppings , ' toppings + $10 pizza base = $' , price_pizza)

    
