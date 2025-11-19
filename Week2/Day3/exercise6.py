import datetime

def calculate_age(fecha_valida):
    current_date = datetime.date.today()
    birth_date = fecha_valida.date() # esto transforma la fecha del usuario a un date. Fecha valida es un datatime, por eso lo transformo en date. 
    diferencia_age = current_date - birth_date
    return f'{diferencia_age.total_seconds() / 60} minutos you are living'


user_age = input('User age (YYYY-MM-DD)')
fecha_valida = datetime.datetime.strptime(user_age,'%Y-%m-%d')
# current_date = datetime.date.today()
# diferencia_age = current_date - fecha_valida
print(calculate_age(fecha_valida))
