total_family = input('how many members are')
age_family = input('age of each person') #esto es para pedir la edad de cada familiar
ages = [] #hago una lista vacia para guardar las edades de cada familiar
askings = 0 #para preguntar la edad de cada uno, 
price = 0 #aca hago una variable para calcular el precio de la entrada 

#index = 0 THIS I DONT KNOW WHY I DID IT 
while askings < int(total_family): #si la cantidad de familiares es 5, debo preguntar 5 edades. 
    ages.append(age_family) #aca guardo en ages, las edades. 
    age_family = input(age_family) #aca vuelvo a pedir la edad 

    #here i make a loop to recorrer the ages
    for edades in ages: #aca recorro las edades que tiene cada miembro 
        #edades = int(edades)
        if int(edades) <= 3: 
            price += 0
        elif int(edades) <= 12: 
            price += 10
        else:
            price += 15
print('are ' , total_family , 'people and the cost is ' , price)
