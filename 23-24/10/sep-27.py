def show_result(votes):
    total = 0
    for voteNums in votes.values():
        total += voteNums
    max = 0
    winners = []
    for name, votes in votes.items():
        percent = votes / total
        if percent > 0.5:
            print(name)
            return
        if percent > max:
            max = percent
            winners = [name]
        elif percent == max:
            winners.append(name)

    if len(winners) == 1:
        print(winners[0])
    else:
        print("Runoff!")
        

with open("sep-27.txt", "r") as f:
    votes={}
    for line in f.readlines():
        line = line.strip()
        if line == "END":
            show_result(votes)
            break
        if votes.get(line) == None:
            votes[line] = 0
        votes[line] = votes[line] + 1
