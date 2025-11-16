class Song : #ACA CREO LA CLASE 
    def __init__(self,lyrics):
          self.lyrics = lyrics
    
    def sing_me_a_song(self): #ACA DEFINO EL METODO , LA ACCION QUE REALIZA LA FUNCION.
        new_song = self.lyrics #GUARDO EN NEW SONG, LA LISTA QUE RECIBI COMO PARAMETRO
        # print(new_song)
        the_song = ' '.join(new_song) #JUNTO LA LISTA EN UNA SOLA LISTA SEPARADA POR ESPACIOS. 
        print (the_song)

#aca cree el objeto, y le pase una lista 
stairway = Song(['There’s a lady whos sure', "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()