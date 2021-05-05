def findDigit(number):
    i = 0
    while number > 10**i:
        i+=1
    return i

print(findDigit(33333))
