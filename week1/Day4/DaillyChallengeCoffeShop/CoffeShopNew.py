menu = {
    'espresso': 7.0,
    'latte': 12.0,
    'capucchino': 10.0
}

# STEP 2A
def show_menu(menu):
    current_menu = []
    for drink, price in menu.items():
        current_menu.append(f'{drink} - {price}$')
    print('Current menu:')
    for item in current_menu:
        print(item)
    print(current_menu)


def add_item(menu):
    user_drink = input('Enter a new drink: ')
    user_drink_price = float(input('Enter price: '))
    menu[user_drink] = user_drink_price
    print(f'{user_drink} price {user_drink_price} added')


def update_price(menu):
    print(menu)
    user_update_drink = input('Which drink you want to change?: ')
    if user_update_drink in menu:
        user_update_price = float(input('New price: '))
        menu[user_update_drink] = user_update_price
        print('The menu was updated')
        print(menu)
    else:
        print('Item not found')


def delete_item(menu):
    print(menu)
    user_delete_item = input('Which drink you want to delete?: ')
    if user_delete_item in menu:
        del menu[user_delete_item]
        print('The item was deleted')
        print(menu)
    else:
        print('Item not found')


def show_options():
    print('What would you like to do?\n'
          '1. Show menu\n'
          '2. Add item\n'
          '3. Update price\n'
          '4. Delete item\n'
          '5. Exit')


def run_coffee_shop():
    while True:
        show_options()
        user_option = input('Select number option: ')

        if not user_option.isdigit():
            print("Invalid option, please enter a number.")
            continue

        user_option = int(user_option)

        if user_option == 1:
            show_menu(menu)

        elif user_option == 2:
            add_item(menu)

        elif user_option == 3:
            update_price(menu)

        elif user_option == 4:
            delete_item(menu)

        elif user_option == 5:
            print("Exiting...")
            break

        else:
            print("Option not valid")

run_coffee_shop()
