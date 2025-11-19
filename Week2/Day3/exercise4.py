import datetime #traigo el metodo fecha 
fecha_de_hoy = datetime.date.today() #esto imprime la fecha de hoy
hora_de_ahora = datetime.datetime.now() #esto trae le hora de ahora
print(f"Today es {fecha_de_hoy} y es la hora {hora_de_ahora.strftime('%H,%M,%S')}") #%h , para poner hora, Minutos , Seconds. (y con strftime -> elijo el formato de como mostrar la hora.. )
