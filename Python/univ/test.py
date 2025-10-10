def number_guessing_game():
    limit_min = 25
    limit_max = 65
    secret_num = 37

    while True:
        try:
            guess = int(input("当ててみて： "))

            if guess == secret_num:
                print("正解")
                return True
            elif guess < limit_min or guess > limit_max:
                print("範囲外の数値")
            elif guess < secret_num - 5:
                print('小さすぎる')
            elif guess > secret_num + 5:
                print('大きすぎる')
            elif secret_num - 5 <= guess < secret_num:
                print('ちょっと小さい')
            elif secret_num < guess <= secret_num + 5:
                print('ちょっと大きい')
        except ValueError:
            print("That's not acceptable — You can only put integers")
            
# number_guessing_game()

def x_times_y():
    print(" "*3, end = "|")
    for i in range(1, 9+1):
        print(f"{i:3d}",end="")
    print()
    print( "-"*3, end = "+")
    for i in range(1,9+1):
        print('---',end = "")
    print()
    for j in range(1, 9+1):
        print(f"{j:3d}", end = "|")
        for k in range(1, 9+1):
            print(f"{j*k:3d}",end = "")
        print()
# x_times_y()

def define():
    input_str = input('put any numbers')
    value = float(input_str)
    print(f"{type(input_str)=}")
    print(f"{type(value)}")
    print(f"{value=}")
    print(f"{input_str*2=}/{value*2=}")
# define()

def manupilate(a,b):
    total = 0
    for i in range(a,b + 1):
        total += i
    return total
# print(manupilate(2,4))

def translation(px,py,x,y):
    return (px+x, py+y)

(a,b) = (0,0) #原点
print(f"{(a,b)=:}")
(a,b) = translation(a,b,4,3)
print(f"{(a,b)=:}") #x,y方向に4,3移動
(a,b) = translation(a,b,-2,1)
print(f"{(a,b)=:}") #x,y方向に-2,1移動

from time import sleep as s
print('wait a sec')
s(1)
print("one sec spent")