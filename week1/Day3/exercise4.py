users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
#tengo que hacer que los keys, sean los nombres que tengo en la lista
#y tengo que hacer que vayan del 0, hasta la cantidad de elementos que tiene la lista .
index = 0 
# for values in users: #guardo la lista en values . 
#     index +=1
#     my_dicc = {values:index}
#     print(my_dicc)

# ============= point 2 =========

# for values in users: #guardo la lista en values . 
#     my_dicc = {index:values}
#     index +=1
#     print(my_dicc)

# ============= point 3 =========
    

for values in sorted(users): #guardo la lista en values . 
    my_dicc = {values:index}
    index +=1
    print(my_dicc)
