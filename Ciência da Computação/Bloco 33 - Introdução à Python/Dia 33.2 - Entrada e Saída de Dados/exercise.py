file = open("grades.txt", mode="r")


content = file.read().split('\n')

convert = []

for a in content:
    convert.append(a.split(" "))

approved = open("approved.txt", mode="w")

for a in convert:
    if int(a[1]) >= 6:
        approved.write(f"{a[0]}\n")

print(convert)