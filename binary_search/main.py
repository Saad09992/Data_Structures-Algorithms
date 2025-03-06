arr = [2,4,6,8,10,12,14,16,18,20]

    
def binary_search(arr,target):
    l=0
    h=len(arr)
    while l<=h:
        m=l+(h-1)//2
        v=arr[m]
        if v<target:
            l=m-1
        elif v>target:
            h=m+1
        else:
            return m
    return -1
            

res=binary_search(arr,6)
print("Index: ",res)
