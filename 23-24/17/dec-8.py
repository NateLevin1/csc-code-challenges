import sys
import re

num_list = []

for lineWithNl in sys.stdin:
    line = lineWithNl.rstrip()

    for ch in line:
        if re.search("\d", ch):
            num_list.append(ch)

num_list.sort()

for num in num_list:
    print(num, end="")
