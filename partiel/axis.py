x = int(input("Enter number a which is x axis = "))
y = int(input("Enter number b which is y axis = "))

if x == 0 and y == 0:
    print("origin")
elif x == 0:
    print("point on y axis")
elif y == 0:
    print("point on x axis")

if x > 0 and y > 0:
    print("point in first quadrant")
elif x < 0 and y > 0:
    print("point in second quadrant")
elif x < 0 and y < 0:
    print("point in third quadrant")
elif x < 0 and y > 0:
    print("point in fourth quadrant")
