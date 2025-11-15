keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dictionary = dict(zip(keys , values)) 
print (my_dictionary) 

dicc = {}
for i in range(len(keys)):
    dicc[keys[i]] = values[i] 

print (dicc)