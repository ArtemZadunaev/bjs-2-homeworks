function getArrayParams(...arr) {
  if (arr.length === 0) { return 0; }
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) { min = arr[i] };
    if (max < arr[i]) { max = arr[i] };
    sum += arr[i];

  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) { return 0; }
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) { return 0; }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) { return 0; }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let element of arr) {
    element % 2 === 0 ? sumEvenElement += element : sumOddElement += element;
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) { return 0; }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let element of arr){
    if(element%2===0){
      sumEvenElement+=element;
      countEvenElement++;
    }
  }
  return sumEvenElement/countEvenElement;
}

function makeWork(arrOfArr, func) {
let maxWorkerResult = Number.MIN_VALUE;
for (let i = 0; i < arrOfArr.length; i++) {
    const currentResult = func(...arrOfArr[i]);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }
  return maxWorkerResult;
}
