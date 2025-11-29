#CREO UNA FUNCION QUE ME DEVUELVE EL TABLERO VACIO 
def create_board():  
    board = [[' - ', ' - ' , ' - '],
            [' - ', ' - ' , ' - '],
            [' - ', ' - ' , ' - '] ]
    return board 

#CREO UNA FUNCION QUE ACTUALIZA LA POSICION, RECIBE EL TABLERO, LA FILA Y COLUMNA, Y EL PLAYER. 
def update_position(board,row, column, player):
    board[row][column] = player 
    print(board)

#PREGUNTO QUE FILA Y QUE COLUMNA 
def ask_position():
    #aca debo chequear si lo que escribio el usuario es un numero valido, o no es una letra.  
    player_row = int(input('Write a row between'))
    player_column = int(input('Write a column between'))
    return player_row, player_column

#OBTENGO EL BOARD 
my_board = create_board()
player1row,player1column = ask_position()
player2row,player2column= ask_position()
# update_position(my_board,0,2,'x')
# update_position(my_board,1,1,'x')
# update_position(my_board,2,0,'x')
#ESTO PIDE LA POSICIONES DE PLAYER1 
update_position(my_board,player1row,player1column,'x')
update_position(my_board,player1row,player1column,'x')
update_position(my_board,player1row,player1column,'x')
#ESTO PIDE LA POSICION DE PLAYER2 
update_position(my_board,player2row,player2column,'o')
update_position(my_board,player2row,player2column,'o')
update_position(my_board,player2row,player2column,'o')

def check_row(player,board):
    for index in range(0,3):
        if player == board[index][0] == board[index][1] == board[index][2]:
           print('player' , player , 'wins')
        #ACA AGREGO , SI NO GANO, DEBERIA VOLVER A PEDIR LA POSICION
        else: 
            ask_position()
        

def check_column(player,board):
    for index in range(0,3):
        if player == board[0][index] == board[1][index] == board[2][index]:
           print('player' , player , 'wins')
        else: 
            ask_position()
        
def check_horizontal(player, board):
    if player == board[0][0] == board[1][1] == board[2][2]:
        print('player' , player , 'wins')
    if player == board[0][2] == board[1][1] == board[2][0]:
        print('player' , player , 'wins')
    else: 
            ask_position()
            
def check_winner(player, board):
    check_row(player, board)
    check_column(player, board)
    check_horizontal(player, board)

check_winner('x' , my_board)
check_winner('0' , my_board)