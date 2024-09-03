def compress(s):
    final_str = ""
    cur_char = None
    count = 1
    for i in range(0,len(s)):
        if cur_char == None:
            cur_char = s[i]
            continue
        elif cur_char == s[i]:
            count += 1
        else:
            if count > 1:
                final_str += "(" + cur_char + ")" + str(count)
            else:
                final_str += cur_char
            cur_char = s[i]
            count = 1

    if count > 1:
        final_str += "(" + cur_char + ")" + str(count)
    else:
        final_str += cur_char

    return final_str

print(compress("aaabbbcccd"))
print("(a)3(b)3(c)3d")

