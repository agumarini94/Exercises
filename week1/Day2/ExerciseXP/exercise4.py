#numbers = (1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.)
numbers = 1.5
while numbers < 5.5:
    if numbers.is_integer():
        print(int(numbers))
    else:
        print(numbers)
    numbers +=0.5

