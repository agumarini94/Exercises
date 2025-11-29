user_word = input('Insert a word') #Aca cree un STRING 
my_dictionary = { } #creo un diccionario vacio 
for (letters, position) in enumerate(user_word): #aca recorro letra por letra del string 
    if letters in my_dictionary: #si la letra aparece en el diccionario 
        my_dictionary[letters].append(position)
    else: 
        my_dictionary[letters] = [position]
print(my_dictionary)

#     if letters in user_word: #si una letra esta repetida, la guardo en el string repeated_letters 
#         repeated_letters += letters
#     else: #si no esta 
#         not_repeated_letters += letters

# print('repeat ' , repeated_letters , 'no repeat ' , not_repeated_letters)



