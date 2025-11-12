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