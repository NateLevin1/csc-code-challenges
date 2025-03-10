u_in = input()  # Get user input

def solve(u_in):
    u_out = ""
    # Process each word in the input
    for word in u_in.split(" "):
        endOfSentence = word[-1] == "."  # Check if the word ends with a period
        capitalize = word[0].isupper()  # Check if the word starts with an uppercase letter
        if endOfSentence:
            word = word[:-1]  # Remove the period from the end of the word
        word = word.lower()  # Convert the word to lowercase
        word = word[0:len(word) - 2]  # Remove the last two characters ("ay")
        initial_character = word[len(word) - 1]  # Get the last character of the word
        word = initial_character + word[0:len(word) - 1]  # Move the last character to the front
        if capitalize:
            # Capitalize the first character of the word
            word = word[0].upper() + word[1:]
        if endOfSentence:
            word += "."  # Add the period back to the end of the word
        u_out += word + " "  # Add the processed word to the output string
    # The grader will ignore spaces at the end of the output, but we'll ignore trailing spaces here anyway.
    return u_out.strip()

print(solve(u_in))