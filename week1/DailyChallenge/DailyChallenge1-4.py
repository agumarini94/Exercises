number_user = input('Write a string of 10 caracters max')
numbers = number_user
if len(numbers) == 10: 
    print('Perfect string')
    print(numbers[0],numbers[-1])
    cadena = ''
    for index in range(0, len(numbers)): # for character in numbers:
        cadena = cadena + numbers[index] #      cadena = cadena + character
        print(cadena)
        


elif len(numbers) > 10:
    print('too long string')
elif(len(numbers) < 10):
    print('too short string')

