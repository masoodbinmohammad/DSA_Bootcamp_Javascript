// 1. Bubble sort using 

function bubbleSort(arr, r, c){
   if (r == 0) {
            return;
        }
        if (c < r) {

            if (arr[c] > arr[c+1]) {
                // swap
                let temp = arr[c];
                arr[c] = arr[c+1];
                arr[c+1] = temp;
            }

            bubbleSort(arr, r, c+1);
        } else {
            bubbleSort(arr, r-1, 0);
        }
 }

let arr = [1, 4, 3, 5]
bubbleSort(arr, arr.length, 0);
console.log(arr);


// 2. Selection Sort
function selectionSort(arr, r, c, max){
if (r == 0) {
            return;
        }
        if (c < r) {
            if (arr[c] > arr[max]) {
                selectionSort(arr, r, c+1, c);
            } else {
                selectionSort(arr, r, c+1, max);
            }
        } else {
            let temp = arr[max];
            arr[max] = arr[r-1];
            arr[r-1] = temp;
            selectionSort(arr, r-1, 0, 0);
        }
}

selectionSort(arr, arr.length, 0, 0)
console.log(arr)
