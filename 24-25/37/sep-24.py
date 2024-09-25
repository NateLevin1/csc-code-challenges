lowercase = list("abcdefghijklmnopqrstuvwxyz")
alphabet = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

def count_words(str):
    word_count = 0
    currently_in_word = False
    for char in str:
        if currently_in_word and char == ' ':
            word_count += 1
            currently_in_word = False
        if char in lowercase and not currently_in_word:
            currently_in_word = True

    if currently_in_word:
        word_count += 1

    return word_count

print(count_words("NoSpacesHere"))
print(count_words("Hello, world!"))
print(count_words("This is a test"))
print(count_words("Ends with a space "))
print(count_words(" Leading space"))
print(count_words(" ! ")) # 0
print(count_words("apple  banana")) # 2