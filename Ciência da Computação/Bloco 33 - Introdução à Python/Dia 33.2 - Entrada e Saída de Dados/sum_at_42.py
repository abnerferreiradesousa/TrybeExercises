import random

meu_numero = 0

while meu_numero < 42:
    meu_numero += int(input("Digite seu número: "))
    
print(meu_numero)

random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
guess = ""

while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

print("O número sorteado era: ", guess)

from curses.ascii import isdigit
import sys

numbers_str = input("Digite uma sequência de números separados por espaços: ")
number_int = numbers_str.split(" ")
print(number_int)
arr = 0

for valor in number_int:
    if valor.isdigit():
        arr += int(valor)
    else:
        err = f"Erro ao somar valores, \"{valor}\" é um valor inválido"
        print(err, file=sys.stderr)

print(arr)

x = "FULANO"

for a in x:
    print(a, end=" ")

a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3) # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]