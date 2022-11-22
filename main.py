import random


queue = []

for i in range(0, 20):
    queue.append(random.randint(-50, 50))

print("Initial queue")
print(queue)

for i in range(0, 20):
        if queue[i] < 0:
           print(queue.pop(i))
           if i > len(queue)-1:
            break


# print("\nElements dequeued from queue")
# print(queue.pop(0))
# print(queue.pop(0))
# print(queue.pop(0))

print("\nQueue after removing elements")
print(queue)
