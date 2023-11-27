str = "1 2 3 4 5"
numbers = [int(x) for x in str.split(" ")]
count = 0
total = 0
print(numbers)

def permutation(start, end):
    if start == end:
        return numbers[start]
    
    for i in range(end-start):
        index = start + i
        for j in range(end-index):
            endIndex = index + j
            total += permutation(i, endIndex)
            count += 1

    


permutation(0, len(numbers))

print(sum, count, sum / count)

# A B C
# A B
# A
#   B
#   B C
#   B
#     C
# A   C
# A
#     C
