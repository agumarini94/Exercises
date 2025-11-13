total_family = int(input('how many members are'))
ages = [] #hago una lista vacia para guardar las edades de cada familiar
askings = 0 #para preguntar la edad de cada uno, 
price = 0 #aca hago una variable para calcular el precio de la entrada 

#index = 0 THIS I DONT KNOW WHY I DID IT 
while askings <= total_family - 1:
    age_family = int(input('age of each person')) #esto es para pedir la edad de cada familiar #mientras que el total de veces preguntados sea distinto o igual que la cantidad de familiares.. hacer 
    ages.append(age_family)  #Agrego la edad a la lista ages 
    askings += 1 #incremento en uno las veces preguntadas para que siga hasta que se cumple el while...

print(ages)   

#ESTO NO SE PARA QUE LO HICE NI SE SI ESTA BIEN 
#while askings < int(total_family): #si la cantidad de familiares es 5, debo preguntar 5 edades. 
    #ages.append(age_family) #aca guardo en ages, las edades. 
    #here i make a loop to recorrer the ages


for age in ages: #aca recorro las edades que tiene cada miembro 
        #edades = int(edades)
    if age <= 3: 
        price += 0
    elif age <= 12: 
            price += 10
    else:
        price += 15
    


print('are ' , total_family , 'people and the cost is ' , price)
