n = int(input())

def factorial(n):
    # base case
    if n == 1 or n == 0:
        return 1
        
    # recursion
    else:
        return n*factorial(n-1)

print(factorial(n))