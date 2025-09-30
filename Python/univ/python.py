import time

txt = 'Hello, World!'
print(txt)

def caluculator(x):
    return x * 2

print(caluculator(3))

my_list = [1,2,3,4,5,]
print(my_list,range(len(my_list)))
my_list.append(7)
my_list.remove(2)
print(my_list)

# p1. Write a function that takes an integer and returns even if it is even, otherwise odd
def evenOrOdd(x):
    if(x % 2 == 0):
        return "even"
    else:
        return "odd"

print(evenOrOdd(3))
print(evenOrOdd(4))

# p2. Write a function that takes a string and retruns it reversed
def reverse_string(s):
    chars = list(s)
    start = 0
    end = len(chars) - 1
    for i in range(len(chars) // 2):
        chars[start], chars[end] = chars[end], chars[start]
        start += 1
        end -= 1
    return ''.join(chars)

print(reverse_string("Hello, World!"))

# p3. Write a function that takes a list of numbers and returns the sum without using sum()
def sum_list(nums):
    sum = 0
    for num in nums:
        sum += num
    return sum
print(sum_list([1,2,3,4,5]))

# p4.for numbers 1 - 20. ptint fizz if devisible by 3, buzz if divisible by 5, fizzbuzz if divisible by both, otherwise print the number
def fizz_buzz():
    list = []
    for i in range(1,21):
        if i % 3 ==0 and i % 5 ==0:
            list.append("fizzbuzz")
        elif i % 3 ==0:
            list.append("fizz")
        elif i % 5 ==0:
            list.append("buzz")
        else:
            list.append(i)
    return list
print(fizz_buzz())

# p5. Write a function that counts how many vowels appeared in a given string
def count_vowels(str):
    vowels = ['a', 'e', 'i', 'o', 'u']
    count = 0
    for char in str:
        if char in vowels:
            count += 1
    return count
print(count_vowels("Hello, World!"))
print(count_vowels("I am Masa, what's up mate?"))

# p6. Write a functio that takes sentence and returns a dictionary with each word as the ley and its frequency as the value
def word_frequency_counter(sentence):
    words = sentence.lower().replace("?","").split()
    frequency = {}
    for word in words:
        if word in frequency:
            frequency[word] +=1
        else:
            frequency[word] = 1 
    return frequency
print(word_frequency_counter('I love Python and I love coding'))

def timeCounter():
    for i in range(15):
        print(time.asctime())
        time.sleep(1)

timeCounter()