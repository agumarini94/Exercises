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



#if len(name_user) >= 2: #if the chain has more of 3 letters... so do 
#    while index < len(name_user): #while index is lower than '7 letters...' 
#    #for index in range(0 , len(name_user)): # index empieza en 0 y aumenta hasta el final de la cadena, de 0 a tantas letras tenga 
#        if name_user[index] != 1 and name_user[index] != 2 and name_user[index] != 3 and name_user[index] != 4 and name_user[index] != 5 and name_user[index] != 6 and name_user[index] != 7 and name_user[index] != 8 and name_user[index] != 9 :
#
#                print ('Thank you')
#        else:   #if there's some number should show this 
#            print('your name cant be number')
#else: #this should do if the user write less or 3 letters 
#    print('name not right')





#while name_user != 1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9 and len(name_user>=3): 
    #print ('hola ' , name_user)
    #while a characters been diferenets of number or more of 3 digits, 

    #or this option i dont know..   
    #if(name_user[] == 1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9 or len(name_user>=3): 
       #continue: 
   #this is not good 
   
    #else 
    #print ('thank you')
    #this should do if everything is ok 
