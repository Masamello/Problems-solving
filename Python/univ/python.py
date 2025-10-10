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

# p7. Write a funtion that takes a list and returns a new list with only the unique elements
def unique_elmnt(li):
    new_list = []
    for i in range(len(li)):
        if i not in new_list:
            new_list.append(i)

    return new_list

print(unique_elmnt([1,2,3,4,5,5,6,7,7,8]))
# alternative way to solve this:
# def unique_elmnt(li):
#   return list(set(li))

def time_counter(start_value):
    print('Count down from 15s')
    for i in range(start_value,-1,-1):
        print(f'{i}',"/",time.asctime())
        time.sleep(1)
# time_counter(15)

# p8. Write a funtion that takes a list of numbers and returns the maximum number without using max()
def find_maximum_num(num):
    max_value = num[0]
    for i in num:
      if i > max_value:
          max_value = i
    return max_value
print('max_num:',find_maximum_num([1,2,4,6,3,4]))
print('max_num:',find_maximum_num([-3, -5, -2]))

# p9. Write a function that checks if string is a palindrome
def is_palindrome(str):
    left = 0
    right = len(str) - 1
    while left < right:
        if(str[left] != str[right]):
            return False
        left += 1
        right -= 1
    return True
print('isPalindrome:',is_palindrome('python'))
print('isPalindrome:',is_palindrome('racecar'))

# p.10 Write a recursive function that caluculates the factorial of number n
def recursive_factorial(n):
    result = 1
    if n == 0 or n == 1:
        return result
    else:
        return n * recursive_factorial(n - 1)
print('Factorial number:',recursive_factorial(5))

# p11. Write a program that:
# Creates a text file called data.txt.
# Writes a few lines of text (your choice).
# Reads the file content back and prints it line by line.
def file_handling():
    # Step 1: Write to the file
    with open('data.txt', 'w') as f:
        f.write("Hello, Python!\n")
        f.write("This is line 2.\n")
        f.write("And line 3!\n")

    # Step 2: Read from the file
    with open('data.txt', 'r') as f:
        for line in f:
            print(line.strip())  # strip() removes extra newline characters

file_handling()

# p12.Write a function that takes a list of numbers and returns a new list with each number squared
def square_every_number(listNum):
    new_list = []
    for x in listNum:
        new_list.append(x*x)
    return new_list
print(square_every_number([1,2,3,4]))

# p13.Write a one-kiner that uses filter() and a lambda function to extract only even numbers from a list
def filter_even_nums(listNum):
    x = lambda a : a % 2 == 0
    return list(filter(x,listNum))
        
print(filter_even_nums([1,2,3,4,5,6]))

# p14.Write a function that takes given list of words and returns a dictionary where each word is a key and its length is the value
def word_length_dictionary(myList):
    myDict = {}
    for word in myList:
        myDict[word] = len(word)
    return myDict
print(word_length_dictionary(["apple", "banana", "cherry"]))

# p15. Write a function that reads a text file and counts how many line contain a specific word(like "python")
def count_lines_containing_a_word():
    with open('Data.txt',"w") as file:
        file.write("Hi, I'm using Python\n")
        file.write("Hi, I'm using javascript\n")
        file.write("Hi, I'm using Python\n")

    count = 0
    with open('Data.txt',"r") as read:
        for line in read:
            if 'python' in line.lower():
                count += 1
    return count
print(count_lines_containing_a_word())
