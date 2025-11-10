#Exercise 1 XP Gold 
line1 = '\nHello world'
line2 = '\nI love python'
print(line1 * 4 , line2 * 4)

#Exercise 2 XP GOLD
numberUser = int(input('Put a number from 1 to 12'))
if(numberUser >=3 and numberUser <=5):
    print('Springs')
elif (numberUser >= 6 and numberUser <=8):
    print('Summer')
elif (numberUser >= 9 and numberUser<=11):
    print ('autumn')
elif (numberUser == 12 or numberUser == 1 or numberUser == 2):
    print ('Winter')
else :
    print('number incorrect')