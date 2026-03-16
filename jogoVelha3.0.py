import os
def adicionarPontos():
    global vitoriasO, vitoriasX, empate
    if velha[linha][coluna] in 'X':
        vitoriasX+=1
    elif velha[linha][coluna] in 'O':
        vitoriasO+=1
    else:
        empate+=1
        
def limpaTela():
    comando = 'cls' if os.name=='nt' else 'clear'
    
    if os.system(comando)!=0:
        print('\n'*120)

def exibirTabuleiro():
    '''for l in range(0,3):
        for c in range(0,3):
            print(f'[{velha[l][c]:^3}]' , end='')
        print()'''
    print(f'''0 [ {velha[0][0]} ] [ {velha[0][1]} ] [ {velha[0][2]} ]
1 [ {velha[1][0]} ] [ {velha[1][1]} ] [ {velha[1][2]} ]
2 [ {velha[2][0]} ] [ {velha[2][1]} ] [ {velha[2][2]} ]
    0     1     2  ''')

def verificarJogada():
    if velha[linha][coluna]==' ':
        velha[linha][coluna] = input('Você quer o X ou O? ').upper().strip()
    else:
        print('='*60)
        print('Jogada inválida. Esta casa já foi usada.')
        print('='*60)
        
def limparVelha():
    for l in range(0,3):
        for c in range(0,3):
            velha[l][c]=' '
        
print('''   JOGO DA VELHA
 0  [ ] [ ] [ ]
 1  [ ] [ ] [ ]
 2  [ ] [ ] [ ]
     0   1   2''')
velha = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
vitoriasX = 0
vitoriasO = 0
empate = 0
while True:
    cont = 1
    while cont<=9:
        linha = int(input('Escolha a linha que vai jogar(número ao lado esquerdo): '))
        coluna = int(input('Escolha a coluna que vai jogar(número na parte debaixo): '))
        verificarJogada()
        exibirTabuleiro()
        input('Pressione qualquer tecla para continuar...')
        if cont>=3:
            if velha[0][0]=='X' and velha[1][1]=='X' and velha[2][2]=='X' or velha[2][0]=='X' and velha[1][1]=='X' and velha[0][2]=='X': #diagonais
                print(f'{velha[linha][coluna]} ganhou')
                adicionarPontos()
                break
            elif velha[0][0]=='X' and velha[1][0]=='X' and velha[2][0]=='X' or velha[0][1]=='X' and velha[1][1]=='X' and velha[2][1]=='X' or velha[0][2]=='X' and velha[1][2]=='X' and velha[2][2]=='X': #verticais
                print(f'{velha[linha][coluna]} ganhou')
                adicionarPontos()
                break
            elif velha[0][0]=='X' and velha[0][1]=='X' and velha[0][2]=='X' or velha[1][0]=='X' and velha[1][1]=='X' and velha[1][2]=='X' or velha[2][0]=='X' and velha[2][1]=='X' and velha[2][2]=='X': #horizontais
                print(f'{velha[linha][coluna]} ganhou')
                adicionarPontos()
                break
            elif velha[0][0]=='O' and velha[1][1]=='O' and velha[2][2]=='O' or velha[2][0]=='O' and velha[1][1]=='O' and velha[0][2]=='O': #diagonais
                print(f'{velha[linha][coluna]} ganhou')
                adicionarPontos()
                break
            elif velha[0][0]=='O' and velha[1][0]=='O' and velha[2][0]=='O' or velha[0][1]=='O' and velha[1][1]=='O' and velha[2][1]=='O' or velha[0][2]=='O' and velha[1][2]=='O' and velha[2][2]=='O': #verticais
                print(f'{velha[linha][coluna]} ganhou')
                adicionarPontos()
                break
            elif velha[0][0]=='O' and velha[0][1]=='O' and velha[0][2]=='O' or velha[1][0]=='O' and velha[1][1]=='O' and velha[1][2]=='O' or velha[2][0]=='O' and velha[2][1]=='O' and velha[2][2]=='O': #horizontais
                print(f'{velha[linha][coluna]} ganhou')
                adicionarPontos()
                break
            else:
                print('Deu empate')
        cont+=1
        limpaTela()
        exibirTabuleiro()
        
    resposta = input('Deseja jogar mais uma partida? [S/N]: ').upper().strip()
    if resposta in 'N':
        print('Encerrando...')
        break
    else:
        limparVelha()
        limpaTela()

print('='*60)
print(f'{' PLACAR DE VITÓRIAS ':^60}')
print('='*60)
print(f'Vitórias do X: {vitoriasX}')
print(f'Vitórias do O: {vitoriasO}')
print(f'Empate: {empate}')
