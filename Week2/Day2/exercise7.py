from faker import Faker
fake = Faker()
# the_users = ' '
user_list = [] #lista vacia 
total_users = int(input('how many users ')) #pregunto cuantos users 

def add_users(): #funcion add_user
    # number_user = 0
    # while len(user_list) < total_users: 
    #     user_list.append(number_user)
    #     number_user +=1
    # return user_list # [0 , 1 ,2 ,3 ,4]
    for _ in range(total_users):
        users = {
                    'name': fake.name(),
                     'addres': fake.address(),
                     'language_code': fake.language_code()
                     }
        user_list.append(users)
        # the_users =' , '.join(user_list)
        # user_list = ' , '.join(user_list)
    return user_list
print(add_users())