#CREO UNA FUNCION QUE ME DEVUELVE EL TABLERO VACIO 
def create_board():  
    board = [[' - ', ' - ' , ' - '],
            [' - ', ' - ' , ' - '],
            [' - ', ' - ' , ' - '] ]
    return board 
#ACTUALIZA LA POSICION, RECIBE EL TABLERO, LA FILA Y COLUMNA, Y EL PLAYER. 
def update_position(board,row, column, player):
    board[row][column] = player 
    # print(board)
#PREGUNTO QUE FILA Y QUE COLUMNA 
def ask_position():
    #aca debo chequear si lo que escribio el usuario es un numero valido, o no es una letra.  
    while True:
        player_row = input(' Write a row, can be 0 , 1 or 2')
        if player_row.isdigit() and 0 <= int(player_row) <=2:
            player_row =int(player_row)
            break
        else:
            print('Invalid number, try again.')
    while True:
        player_column = input(' Write a column, can be 0 , 1 or 2')
        if player_column.isdigit() and 0 <= int(player_column) <=2:
            player_column =int(player_column)
            break
        else:
            print('Invalid number, try again.')
    player_row = int(input('Write a row between'))
    player_column = int(input('Write a column between'))
    return player_row, player_column

def check_row(player,board):
    for index in range(0,3):
        if player == board[index][0] == board[index][1] == board[index][2]:
            return 'True'
        #    print('player' , player , 'wins')
        #ACA AGREGO , SI NO GANO, DEBERIA VOLVER A PEDIR LA POSICION
        # else: 
        #     ask_position()

def check_column(player,board):
    for index in range(0,3):
        if player == board[0][index] == board[1][index] == board[2][index]:
           return True
        #    print('player' , player , 'wins')
        #    break
        # else: 
        #     ask_position()
        
def check_horizontal(player, board):
    if player == board[0][0] == board[1][1] == board[2][2]:
        return True
        # print('player' , player , 'wins')
    if player == board[0][2] == board[1][1] == board[2][0]:
        return True
        # print('player' , player , 'wins')
    # else: 
    #         ask_position()
            
def check_winner(player, board):
    check_row(player, board)
    check_column(player, board)
    check_horizontal(player, board)
    if True:
        return True
# check_winner('x' , my_board)
# check_winner('0' , my_board)
    
current_player = 'x' 
def playing(player):
    my_board = create_board()
    player1row,player1column = ask_position()
    player2row,player2column= ask_position()
    #ESTO PIDE LA POSICIONES DE PLAYER1 
    update_position(my_board,player1row,player1column,'x')
    #ESTO PIDE LA POSICION DE PLAYER2 
    update_position(my_board,player2row,player2column,'o')
    print(my_board)
    check_winner('x' , my_board)
    check_winner('0' , my_board)
    row,column = ask_position()
    while check_winner('x',my_board) != True or check_winner('o',my_board) != True:
        print(my_board)
        update_position(my_board,row ,column, player)
        ask_position() 
    if current_player == 'x': 
        current_player = 'o'
  
playing(current_player)

# #OBTENGO EL BOARD 
# my_board = create_board()
# player1row,player1column = ask_position()
# player2row,player2column= ask_position()
# #ESTO PIDE LA POSICIONES DE PLAYER1 
# update_position(my_board,player1row,player1column,'x')
# #ESTO PIDE LA POSICION DE PLAYER2 
# update_position(my_board,player2row,player2column,'o')