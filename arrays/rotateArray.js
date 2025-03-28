randomArray = [7,1,5,3,6,4]

function rotateArray(arr){
    let tmp= arr[0];
   
    for(let i=1; i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=tmp; // Place the first element at the last position
    return arr;
}

//console.log(rotateArray(randomArray));




function roatateArrayByPlaces(arr, d) {
    let n = arr.length;

    // Handle the case where d > size of array
    d %= n;

    // Reverse the first d elements
    reverse(arr, 0, d - 1);

    // Reverse the remaining n-d elements
    reverse(arr, d, n - 1);

    // Reverse the entire array
    reverse(arr, 0, n - 1);
}

// Function to reverse a portion of the array
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(roatateArrayByPlaces(randomArray,3));