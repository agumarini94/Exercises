class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
#step1 
    def __str__(self):
        if self.amount == 1:
            return f'{self.amount} {self.currency}'
        else:
            return f'{self.amount} {self.currency}s'
#step2  
    def __init__(self):
        return int(self.amount)
 #step3
    def __add__(self , other):
        if type(other) != int:
            return self.amount + other.amount
        else:
            return self.amount + other   

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c3) #Esto anda pero ni idea porque 
# '5 dollars'

print(int(c1)) #anda pero no se xq
# 5

print(c1) #no se q hago pero anda 
# '5 dollars'

print(c1 + 5)
# 10

# print(c1 + c2)
# # 15

# print(c1) 
# # 5 dollars

# c1 += 5
# print(c1)
# # 10 dollars

# c1 += c2
# print(c1)
# # 20 dollars

# print(c1 + c3)
# # TypeError: Cannot add between Currency type <dollar> and <shekel>
