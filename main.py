import random


queue = []

for i in range(0, 20):
    queue.append(random.randint(-50, 50))

print("Initial queue")
print(queue)


def delNegative(queue):
    for i in range(0, len(queue)):
        if queue[i] < 0:
            print(queue.pop(i))
            delNegative(queue)
            break


delNegative(queue)

print("Result:")
print(queue)
