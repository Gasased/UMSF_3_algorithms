# python 3.10+
# Babenko Andrii 17.11.22

def binarySearch(arr, low, high, x):

    if high >= low:

        mid = (high + low) // 2

        if arr[mid] == x:
            return mid

        elif arr[mid] > x:
            return binarySearch(arr, low, mid - 1, x)

        else:
            return binarySearch(arr, mid + 1, high, x)

    else:
        return -1


def easyBinarySearch(arr, x):
    low = 0
    high = len(arr)-1

    result = binarySearch(arr, 0, len(arr)-1, x)

    if result != -1:
        print("Element is present at index", str(result))
    else:
        print("Element is not present in array")


def searchResult(result):
    if result != -1:
        print("Element is present at index", str(result))
    else:
        print("Element is not present in array")


def testRunTrue():
    arr = [1, 19, 20, 31, 32, 37, 41, 48, 50]
    x = 20

    easyBinarySearch(arr, x)


def testRunFalse():
    arr = [1, 19, 20, 31, 32, 37, 41, 48, 50]
    x = 21

    easyBinarySearch(arr, x)


def testRunEnter():
    arr = [1, 19, 20, 31, 32, 37, 41, 48, 50]
    x = int(input("Enter int to find in array:\n"))

    easyBinarySearch(arr, x)


def FullRun():
    arr = []
    n = int(input("Enter amount of elements: "))
    for i in range(0, n):
        e = int(input(f"Enter {i+1}/{n} element: "))
        arr.append(e)
    arr.sort

    x = int(input("Enter int to find in array:\n"))

    easyBinarySearch(arr, x)


c = int(input("Chose option:\n1. test run with tru output\n2. test run with false output\n3. test run with searching your element\n4. run with entering array and searching element\n"))

match c:
    case 1:
        testRunTrue()
    case 2:
        testRunFalse()
    case 3:
        testRunEnter()
    case 4:
        FullRun()
