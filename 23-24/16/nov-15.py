def permute(str, left, right, arr):
    if left == right:
        arr.append(str)
    else:
        for i in range(left, right):
            str[i] = str[right]
            permute(str, left, right, arr)
            str[right] = str[i]
        

str = "ABC"
results = []
permute(str, 0, len(str)-1, results)
print(results)