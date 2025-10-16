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
        
from sample_data import sample_data as data

def classify_data(data):
    """データを10刻みの範囲に分類して個数を集計"""
    bins = [0] * 26  # 0–255 を 10刻みで分ける → 26個
    for value in data:
        index = value // 10
        bins[index] += 1
    return bins

def print_histogram(bins):
    """分類結果を表示"""
    total = sum(bins)
    print(f"データ数={total}")
    for i, count in enumerate(bins):
        print(f"{i} {i*10}–{i*10+9} {count}")

def main():
    bins = classify_data(data)
    print_histogram(bins)

main()
# class Data:
#     def __init__(self,bin):
#         self.bin = bin
    
#     def data_classify(self):
#         for i in range(0,255,10):


# data_handling()

# 三角形の面積
def calc_area_triangle(length_a,length_b,length_c):
    try:
        if length_a <= 0 or length_b <= 0 or length_c <= 0:
            print("All sides must be positive numbers.")
            return False
        if length_a + length_b <= length_c:
            raise ValueError(f"最長辺の長さ{length_c} >= 他の2辺の和{length_a+length_b}")
        if length_b + length_c <= length_a:
            raise ValueError(f"最長辺の長さ{length_a} >= 他の2辺の和{length_b+length_c}")
        if length_c + length_a <= length_b:
            raise ValueError(f"最長辺の長さ{length_b} >= 他の2辺の和{length_a+length_c}")
        s = (length_a + length_b + length_c) / 2
        S = math.sqrt(s*(s - length_a)*(s - length_b)*(s - length_c))
        return S
    except ValueError as e:
        return e

def calc_area_iterable():
    while True:
        try:
            len_a = float(input("辺Aの長さ > "))
            len_b = float(input("辺Bの長さ > "))
            len_c = float(input("辺Cの長さ > "))
        except ValueError:
            print("You can only put numbers")
            continue
        
        area = calc_area_triangle(len_a,len_b,len_c)
        if type(area) == ValueError:
            print(f'error occured : {area}')
            continue
        print(f"Area : {area:.4f}")
        if area == 0:
            print("お疲れさまでした")
            return True
#calc_area_iterable()

"""
モンテカルロ法による円周率の推定
"""
import random

print("前半まとめ課題7-3")
print("モンテカルロ法による円周率の推定")

import random

def montecarlo_pi(n):
    """
    モンテカルロ法により円周率を得る関数
    引数:n=試行回数
    戻り値:推定された円周率
    """
    count = 0
    for i in range(n):
        show_progress(i, n)
        x = random.uniform(0, 1)
        y = random.uniform(0, 1)
        if x**2 + y**2 <= 1:
            count += 1
    estimation = 4 * (count / n)
    return estimation

def show_progress(value, full, size=10):
    """
    処理進捗の表示（簡易版）
    引数:value=進捗値、full=完了値,size=表示桁数（省略可）
    """
    if value % (full // size) == 0:
        print(">", end='')

# メイン処理
trials = 1000000
repeats = 10
total = 0

# print("円周率の推定を開始します。")
# for i in range(repeats):
#     print(f"\n{i+1}回目の試行:")
#     pi = montecarlo_pi(trials)
#     print(f"\n推定値: {pi}")
#     total += pi

# average = total / repeats
# print(f"\n円周率の平均推定値: {average}")

# arm_length = (3.0,4.0,5.0)
# def calc_position(degree_a,degree_b,degree_c):
    

# print(calc_position(30,45,60))
# print(calc_position(-150,150,45))
# print(calc_position(0,0,90))

# import random

# def estimate_pi_monte_carlo(num_points):
#     """
#     Estimates the value of Pi using the Monte Carlo method.

#     Args:
#         num_points (int): The total number of random points to generate.

#     Returns:
#         float: An approximation of Pi.
#     """
#     points_in_circle = 0
#     for _ in range(num_points):
#         # Generate random x and y coordinates between 0 and 1
#         x = random.uniform(0, 1)
#         y = random.uniform(0, 1)

#         # Check if the point falls within the unit circle (radius 1)
#         # The equation of a circle centered at (0,0) is x^2 + y^2 = r^2
#         if x**2 + y**2 <= 1:
#             points_in_circle += 1

#     # The ratio of points in the circle to total points approximates
#     # the ratio of the area of the circle to the area of the square (pi/4)
#     pi_estimate = 4 * (points_in_circle / num_points)
#     return pi_estimate

# # Example usage:
# num_simulations = 1000000
# pi_approx = estimate_pi_monte_carlo(num_simulations)
# print(f"Approximation of Pi with {num_simulations} points: {pi_approx}")

import math

ARM_LENGTHS = (3.0, 4.0, 5.0)

def calc_position(degreeA, degreeB, degreeC):
    
    radA = math.radians(degreeA)
    radB = math.radians(degreeA + degreeB)
    radC = math.radians(degreeA + degreeB + degreeC)
    
    L1, L2, L3 = ARM_LENGTHS

    x = L1 * math.cos(radA) + L2 * math.cos(radB) + L3 * math.cos(radC)
    y = L1 * math.sin(radA) + L2 * math.sin(radB) + L3 * math.sin(radC)

    return (round(x, 3), round(y, 3))

print('calc_position(30,45,60)=',calc_position(60,45,30)) 
print('calc_position(-150,150,45)=',calc_position(45,150,-150)) #Somehow, if I put opposite degrees this does work
print('calc_position(0,0,90)=',calc_position(90,0,0))