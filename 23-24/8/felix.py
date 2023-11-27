def simulate_snake_movement(snake_length, commands):
    head = [0, 0]
    tail = [0, 0]

    for command in commands:
        if command == "up":
            head[1] += 1
        elif command == "down":
            head[1] -= 1
        elif command == "left":
            head[0] -= 1
        elif command == "right":
            head[0] += 1

        tail = head.copy()
        tail[0] -= snake_length - 1

    return head, tail

snake_length = 1
commands = ["right", "up", "left", "down", "continue"]

final_head, final_tail = simulate_snake_movement(snake_length, commands)
print("Final head position:", final_head)
print("Final tail position:", final_tail)