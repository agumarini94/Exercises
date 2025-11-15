# user_string = input('write a string ')
# user_cadena = user_string.split()
# ordenada = sorted(user_cadena) #aca tengo una lista nueva 
# ordenada.sort() #SORT HAY QUE ESCRIBIRLO EN UN RENGLON APARTE POR QUE SI LO HAGO EN PRINT NO DE VUELVE NADA. 
# ordenada_lista = ordenada
# print(ordenada_lista)

#----------------------------- EXERCISE 2 -------------------
def take_string(sentence):
    the_sentence = sentence.split()
    print(the_sentence)
    max_word = '' #Hago un stirng vacio para guardar la palabra mas larga
    max_len = 0 # hago un 0 para comparar el maximo len con algo.
    for index in the_sentence: 
        if len(index) > max_len:
            max_len = len(index)
            max_word = index
    print('palabra mas larga = ' , max_word)
    print('Longitud = ' , max_len)

sentence = input('ingrese un string')
take_string(sentence)