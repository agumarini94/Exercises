import datetime 
date_today = datetime.date.today() 
january = datetime.date(2026,1,1)
cuenta_date = january - date_today
print(cuenta_date.days , ' days to ' , january)
print(date_today)
print(january)