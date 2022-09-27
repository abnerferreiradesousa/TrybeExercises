file = open("my_superheroes", mode="w")

file.write("Deus\n")
file.write("Superman\n")
file.write("Saitama\n")

print("Anpanman", file=file)

heroes = ["Batmam\n", "Homem-Aranha\n"]

file.writelines(heroes)

file.close()

file_read = open("my_superheroes", mode="r")

content = file_read.read()

print(content)

file_read.close()