import math
real = float(input("Enter real part of complex number : "))
imaginer = float(input("Enter imaginer part of complex number : "))

str = "|| {realP} + {imaginerP} i || = {resultP}"
result = math.sqrt(real**2+imaginer**2)
print(str.format(realP=real,imaginerP=imaginer,resultP=result))

