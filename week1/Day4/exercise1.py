# def display_message():

#     print('im learning about functions python')

# print (display_message()) 

# ---------------- EXERCISE 2 ----------------------
# title = 'Titanic'

# def favorite_book(title):
#     print(f'one of my favorite books is {title} ')
# print(favorite_book('alice in wonderworld'))

# # ---------------- EXERCISE 3 ----------------------
# def describe_city(city, country='unknown' ): 
#     print(city , ' is in ' , country)
# describe_city(city='Rosario' , country='Argentina ') 
# describe_city(city='Paris')

# ---------------- EXERCISE 4 ----------------------
# import random 
# random_number = random.randint(0,100)
# def get_random(number=random.randint(0,100)):
#     numero = random.randint(1,100)
#     if random_number == numero: 
#         print('FELICITACIONES' , random_number , 'tu numero y ' , numero , 'random numero son iguales')
#     else: 
#         print(random_number , ' tu numero y ' , numero , 'random no son iguales.')

# get_random()

# ---------------- EXERCISE 5 ----------------------
# def make_a_shirt(size='large' , text='i love python'): 
#         print('tshirt size' , size , 'and the text is ' , text)
# import random
# random_size = random.choice(['s','m','l','xl','xxl']) 
# # make_a_shirt()
# # make_a_shirt(size='medium')
# make_a_shirt(random_size, 'diferent message')

# ---------------- EXERCISE 6 ----------------------
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# def show_magicians(parameters = magician_names):
#         for nombres in magician_names:
#             print(nombres)

# def make_greats(parameteros = magician_names):
#     for index in range(len(magician_names)):
#         magician_names[index] = 'The great ' + magician_names[index]
#     print(magician_names).

# # show_magicians()
# make_greats()

# ---------------- EXERCISE 7 ----------------------
def get_random_temp():
     import random 
     valor_random = random.uniform(-10,40)
     valor_random = round(valor_random,2)
     return valor_random

def main():
     temperatura = get_random_temp()
     print(f'the temperature now is {temperatura} celsius')
     if temperatura > 0 and temperatura <=15:
        print('Brrr, thats freezing! Wear some extra layers today')
     elif temperatura < 16:
         print('Quite chilly! Don’t forget your coat.')
     elif temperatura < 23:
         print ('Nice weather')
     elif temperatura < 32:
         print('a bit warm, stay hydrated')
     elif temperatura < 40:
         print ('Its really hot, stay cool! ')
main() 
# get_random_temp()