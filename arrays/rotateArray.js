randomArray = [7,1,5,3,6,4]

function rotateArray(arr){
    let tmp= arr[0];
   
    for(let i=1; i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=tmp; // Place the first element at the last position
    return arr;
}

console.log(rotateArray(randomArray));




// function roatateArrayByPlaces(nums,d){
// temp= [1,2,3]



// }
// console.log(roatateArrayByPlaces(randomArray,3));