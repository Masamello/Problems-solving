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
# print('wait a sec')
# s(1)
# print("one sec spent")

import math
def rotation(px,py,theta):
    th = math.radians(theta)
    rx = px*math.cos(th)-py*math.sin(th)
    ry = px*math.sin(th)+py*math.cos(th)
    return(rx,ry)
(x,y) = (5,0)
print(f"{(x,y)=:}")
(x,y) = rotation(x,y,30)
print(f"{(x,y)=:}")
(x,y) = rotation(x,y,15)
print(f"{(x,y)=:}")


# def calc_distance():
#     x1 = float(input("点Pのx座標 > "))
#     y1 = float(input("点Pのy座標 > "))
#     x2 = float(input("点Qのx座標 > "))
#     y2 = float(input("点Qのy座標 > "))

#     dist = math.sqrt((x2-x1)**2+(y2-y1)**2)

#     print(f"P{(x1,y1)} Q{(x2,y2)}", end = " ")
#     print("Distance : ",dist)

import math
def calc_distance(x1,y1,x2,y2):
    dist = math.sqrt((x2-x1)**2+(y2-y1)**2)
    return dist

def calc_distance_iterable():
    while True:
        try:
            x1 = float(input("点Pのx座標 > "))
            y1 = float(input("点Pのy座標 > "))
            x2 = float(input("点Qのx座標 > "))
            y2 = float(input("点Qのy座標 > "))
        except ValueError:
            print("You can only put numbers")
            continue

        dist = calc_distance(x1,y1,x2,y2)
        print(f"P{(x1, y1)} Q{(x2, y2)}  Distance : {dist:.4f}")

        if dist ==0:
            print("お疲れ様でした。")
            return True

# calc_distance_iterable()
        

# calc_distance_iterable()

def file_handling():
    with open("./sample_data.py","r") as file:
        for i in file:
            return i 
    
def data_handling():
    print('前半まとめ課題7 - 1')
    print("データの集計")
    print(f"データ総数{len(file_handling())}個")
    print("データ範囲 個数 割合")

    # data = file_handling()
    # for i in data:
        

# data_handling()

# 三角形の面積
def calc_area_triangle(length_a,length_b,length_c):
    if length_a <= 0 or length_b <= 0 or length_c <= 0:
        raise ValueError("All sides must be positive numbers.")
    if length_a + length_b <= length_c:
        raise ValueError(f"最長辺の長さ{length_c} >= 他の2辺の和{length_a+length_b}")
    if length_b + length_c <= length_a:
        raise ValueError(f"最長辺の長さ{length_a} >= 他の2辺の和{length_b+length_c}")
    if length_c + length_a <= length_b:
        raise ValueError(f"最長辺の長さ{length_b} >= 他の2辺の和{length_a+length_c}")
    s = (length_a + length_b + length_c) / 2
    S = math.sqrt(s*(s - length_a)*(s - length_b)*(s - length_c))
    return S

def calc_area_iterable():
    while True:
        try:
            len_a = float(input("辺Aの長さ > "))
            len_b = float(input("辺Bの長さ > "))
            len_c = float(input("辺Cの長さ > "))
        except ValueError:
            print("You can only put numbers")
            continue
        
        try:
            area = calc_area_triangle(len_a,len_b,len_c)
            print(f"Area : {area:.5f}")
        except UnboundLocalError or ValueError as e:
            print(f'Provided length is not acceptable : {e}')
            continue

        if area == 0:
            print("お疲れさまでした")
            return True
calc_area_iterable()