import json 

def filter_posion (type):
    if (type == "posion"):
        return type

with open("pokemons.json", mode="r") as file:
    content = json.load(file)["results"]
    posion_pokemons = [
        pokemon["name"] for pokemon in content if "Poison" in pokemon["type"]
    ]
    print(posion_pokemons)


with open("pokemons_poison", "w") as poison_file:
    poison_converted = json.dump(posion_pokemons, poison_file)
