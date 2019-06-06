def comparison(A, B):
    list1 = A.split(" ")
    list2 = B.split(" ")
    for x in list1:
        x = "".join(sorted(x))
        list3.append(x)
    for x in list2:
        x = "".join(sorted(x))
        list4.append(x)
                