class Stack:
    def __init__(self):
        self.elements = []

    def push(self, data):
        self.elements.append(data)

    def pop(self):
            if self.elements:
                return self.elements.pop()
            else:
                return None

    def peek(self):
        return self.elements[-1]

stack = Stack()

# testing

stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push('string0')
stack.push('string1')
stack.push('string2')
stack.push('string3')

print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
