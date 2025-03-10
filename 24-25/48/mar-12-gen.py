# Let's generate "valid sentences" so when people see the test cases that they failed they'll laugh :)

verbs_go = ["runs", "goes", "walks", "bikes", "waddles", "rolls", "sashays"]
verbs_act_on_object = ["gets", "hits", "eats", "smashes", "breaks", "buys", "grabs", "throws", "catches", "finds",
                       "kicks", "lifts", "pushes", "pulls", "drags", "drops",
                       "picks", "shakes", "twists", "turns", "opens", "closes", "locks", "unlocks", "shuts", "slams",
                       "scratches", "pokes", "stabs", "slices", "steals"]
nouns_people = ["George", "Ms. E Smith", "Mr. Johnson", "Sally", "Bob", "Alice", "Charlie", "David", "Eve", "Frank Sinatra", "Patrick Mahomes", "Katy Perry"]
nouns_places = ["the park", "the store", "the beach", "the library", "the zoo", "the museum", "the school", "the gym",
                "School", "the casino", "Mars", "the hotel", "New Mexico", "Tijuana", "Boston", "Harvard"]
nouns_things = ["canoe", "candy", "computer", "book", "window", "door", "secret lever", "axe", "treasure", "lion",
                "air", "fire", "bottle", "ceiling", "wall", "computer", "shoe", "hat", "demon", "ghost", "alien"]
transition_words = ["then", "next", "after", "afterwards", "finally", "suddenly"]
articles = ["the", "a"]
single_exclamations = ["wow", "yikes", "whoops", "awesome",
                       "cool"]  # Mostly just to test if they can do single-word sentences

# i'm doin too much ik

# We'll generate 1-20 phrases with the structures "person verb_go to article place. person verb_act_on_object thing. exclamation."

import random

def pig_latin(sentence: str):
    complete = ""
    for word in sentence.split(" "):
        end_of_sentence = word[-1] == "."
        if end_of_sentence:
            word = word[0:len(word)-1]
        capitalize = word[0].isupper()
        word = word.lower()
        first_letter = word[0]
        word = word[1:] + first_letter
        word += "ay"
        if end_of_sentence:
            word += "."
        if capitalize:
            word = word[0].upper() + word[1:]
        complete += word + " "
    complete = complete.strip()
    return complete



def generate():
    num_sentences = random.randint(1, 20)
    sentences = []
    for i in range(num_sentences):
        person = random.choice(nouns_people)
        verb_go = random.choice(verbs_go)
        article = random.choice(articles)
        place = random.choice(nouns_places)
        verb_act_on_object = random.choice(verbs_act_on_object)
        thing = random.choice(nouns_things)
        exclamation = random.choice(single_exclamations)
        sents_of_this_phrase = [pig_latin(f"{person} {verb_go} to {place}."), pig_latin(f"{person} {verb_act_on_object} {thing}."), pig_latin(f"{exclamation}.")]
        # Make sure they're all capitalized
        phrase = " ".join((sent[0].upper() + sent[1:] for sent in sents_of_this_phrase))
        sentences.append(phrase)
    return " ".join(sentences)

print(generate())
