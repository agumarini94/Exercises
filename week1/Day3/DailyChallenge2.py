items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"} #tengo un diccionario 
wallet = "$300"
my_valores = []
my_keys = []
my_carrito = []
for valores in items_purchase.values(): #ACA GUARDO LOS VALORES DE LAS KEYS DEL DICCIONARIO EN VALORES. 
    limpio = valores.replace('$','') #ACA REEMPLAZO LOS $, POR NADA .
    my_valores.append(limpio) #ACA GUARDO EN LA LISTA MY_VALORES, Y AGREGO LOS VALORES DE LAS LLAVES. 
for llaves in items_purchase.keys():
    relimpio = llaves.replace(',','')
    my_valores.append(llaves)

for producto,precio in items_purchase.items():
    if(precio < my_valores):
        my_carrito += items_purchase.keys
print(my_carrito)
# for products,precio in enumerate(items_purchase): 
    
#     print(products, precio)
# my_valores.append(my_keys)
# print(my_valores)

        
# for items in items_purchase: #recorro los items que hay 
#     items_list = ''.join(items)
# print(items_list)
    