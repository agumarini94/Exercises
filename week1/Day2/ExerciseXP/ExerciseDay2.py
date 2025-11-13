#-------------- EXERCISE 1 -------------------
#Exercise 1 
my_set = set()
my_set.add(31)
my_set.add(43)
#print(my_set)
my_set.add(98)
my_set.add(3254)
#print(my_set)
#my_set.remove(3254)
#print(my_set)
friend_fav_numbers = set() 
friend_fav_numbers.add(34)
friend_fav_numbers.add(53)
friend_fav_numbers.add(310)
friend_fav_numbers.add(54)
#print(my_set, friend_fav_numbers)
our_fav_numbers = my_set.union(friend_fav_numbers)
print(our_fav_numbers)

#-------------------- Exercise 2 ------------------------
my_touple = (5 , 6 , 9 ,29)
 #los tuples se crean entre parentesis. y las listas entre [ ]
#my_touple.append(54, 62, 18)
print(my_touple)

#cant added more numbers, because the touple is not allowed. 

#------------------- Exercise 3 -----------------------------
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove('Banana')
basket.remove('Blueberries')
basket.append('Kiwi')
basket.insert(0,'Apples')
#print(basket)
#otal_apple =0 
total_apple = basket.count('Apples')
#print(total_apple)

#basket.clear()
#print(basket)

#-------------------- EXERCISE 4 --------------------------
#numbers = (1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.)
numbers = 1.5
while numbers < 5.5:
    if numbers.is_integer():
        print(int(numbers))
    else:
        print(numbers)
    numbers +=0.5

#-------------------- EXERCISE 5 --------------------------
numbers = range(1,21)
pares = []
impares = []
for num in numbers: 
    if num % 2 == 0: 
        pares.append(num)
    else:
        impares.append(num)
    
print(' pares' , pares ,  ' impares' , impares )
 

 #-------------------- EXERCISE 6 --------------------------

name_user = input('name please')
print(len(name_user) , 'letters')
index = 0

while True:
    if len(name_user) >= 3 and name_user.isalpha(): 
        print('good name')
        break
    else: 
        print('not good name')
        name_user = input('name_user')
        
 #-------------------- EXERCISE 7 --------------------------

user_fruit = input('Put your favorite fruits')
fruits = user_fruit.split()
any_fruit = input('Write any fruit')
#tengo que hacer un for para recorrer la lista y ver si any_fruit esta en user fruit 
# found = False
# for fruit in fruits:
#     if fruit == any_fruit:
#         found = True
#     else:
#         continue

# if found:
#     print('you choose your favorite fruit')
# else:
#             print('is not your favorite fruit')

if any_fruit in fruits:
      print ('your choose your favourite fruit')
else:
      print('no esta en la lista')

 #------------------------------- EXERCISE 8 -----------------------------------

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


#------------------------------ EXERCISE 9 ------------------------------------

total_family = int(input('how many members are'))
ages = [] #hago una lista vacia para guardar las edades de cada familiar
askings = 0 #para preguntar la edad de cada uno, 
price = 0 #aca hago una variable para calcular el precio de la entrada 
while askings <= total_family - 1:
    age_family = int(input('age of each person')) #esto es para pedir la edad de cada familiar y lo convierto a int
    ages.append(age_family)  #Agrego la edad a la lista ages 
    askings += 1 #incremento en uno las veces preguntadas para que siga hasta que se cumple el while...

print(ages)   

for age in ages: #aca recorro las edades que tiene cada miembro 
        #edades = int(edades)
    if age <= 3: 
        price += 0
    elif age <= 12: 
            price += 10
    else:
        price += 15
    


print('are ' , total_family , 'people and the cost is ' , price)
