let arr = [1,2,3,4,5,6,7,8,9,20]

function binary_search(arr,target){
    low=0
    high=arr.length-1
    arr.sort()
    while(low<=high){
        mid=parseInt(low+(high-low)/2)
        val=arr[mid]
        if(val<target){
            low=mid-1
        }else if(val>target){
            high=mid+1 
        }else{
            return mid 
        }
    }
   return -1
}

let res = binary_search(arr,2)
console.log(res)
