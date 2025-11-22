menu = {'espresso' : 7.0 ,
        'latte' : 12.0 ,
        'capucchino' : 10.0
        }
#step 2 A 
def show_menu(menu):
    current_menu = []
    for drink,price in menu.items():
        current_menu.append(f'{drink} - {price}$')
    print('Current menu:')
    for item in current_menu:
        print(item)
    return current_menu
        
def add_item(menu):
    user_drink = input('Enter a new drink')
    user_drink_price = float(input('Enter price'))
    menu[user_drink] = user_drink_price
    print(f'{user_drink} price {user_drink_price} added')
    current_menu = show_menu(menu)
    return menu , current_menu

def update_price(menu):
    print(menu)
    user_update_drink = float(input('Which drink u want to change'))
    if user_update_drink in menu:
        user_update_price = input('New price')
        menu[user_update_drink] = user_update_price
        current_menu = update_price(menu)
        print('The menu was update')
        print(menu)
        return menu , current_menu
    else:
        print('Item not found')

def delete_item(menu):
    print(menu)
    user_delete_item = input('Which drink u want to delete?')
    if user_delete_item in menu:
        del menu[user_delete_item]
        print('The menu was update')
        current_menu = delete_item(menu)
        return menu , current_menu
    else:
        print('Item not found')
def show_options():
    print('What would you like to do?\n1. Show menu\n2. Add item\n3. Update price\n4. Delete item\n5. Exit')

def run_coffee_shop():
    print(show_options())
    user_option = int(input('Select number option'))
    if user_option.is_integer and 0 < user_option < 5:
        if user_option == 1:
            print(show_menu(menu))
        elif user_option == 2:
            current_menu = menu
            add_item(current_menu)
        elif user_option == 3:
            update_price(menu)
        elif user_option == 4:
            delete_item(menu)
        elif user_option == 5:
            print('exit, going back to the menu')
            show_options()
    else: 
        print('Option no valide')
        run_coffee_shop()

# show_menu(menu)
# add_item(menu)
# update_price(menu)
# show_options()
run_coffee_shop()