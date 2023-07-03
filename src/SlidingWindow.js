function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// function maxSubarraySumSolution(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;

//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum;
// }

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// console.log("here");

// function maxSubarraySum(arr, num) {
//   if (num > arr.length - 1) return null;
//   let maxSum = 0;
//   let temp = 0;

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//     temp += arr[i];
//   }

//   for (let j = 0; j < arr.length - num; j++) {
//     temp = temp - arr[j] + arr[j + num];
//     maxSum = Math.max(temp, maxSum);
//   }

//   return maxSum;
// }

// // console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([-1, -2, 1, 2, 4, 2, 10, 23, 3, 1, 0, 20, 800], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

// function minSubArrayLen(arr, num) {
//   let window = 0;
//   let left = 0;
//   let sum = 0;

//   while (sum < num) {
//     if (arr[window] >= num) return 1;
//     sum += arr[window];
//     window++;
//   }

//   console.log("initial window", window);
//   console.log("initial sum", sum);

//   while ((left < arr.length - window) | window[arr]) {
//     if (window === 1) {
//       console.log("window is 1 ", window);
//       return 1;
//     }
//     console.log("left ", left);
//     console.log("window", window);

//     console.log("sum", sum);

//     sum += arr[left + window - 1] - arr[left];

//     console.log("sum", sum);

//     if (sum >= num) {
//       if (sum - arr[left] >= num) {
//         console.log("plus left minus window");
//         sum -= arr[left];
//         left += 1;
//         window -= 1;
//       } else {
//         left += 1;
//       }
//     }
//     if (sum < num) {
//       left += 1;
//     }
//   }

//   return window;
// }

// // console.log(minSubArrayLen([2, 4, 2, 4, 3, 1, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 2, 4, 2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// console.log(Object.entries({}).length);

function minSubArrayLen(arr, num) {
  if (!arr.length) return 0;
  if (arr[0] >= num) return 1;
  let currentSum = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (currentSum >= num) {
      right = i;
      break;
    }
    currentSum += arr[i];
  }
  console.log(currentSum, right);
  while (right <= arr.length + 1) {
    console.log("currentSum:", currentSum);

    if (left === right && arr[right] >= num) {
      console.log("right equals left", left, right);
      return 1;
    }
    if (right === arr.length) {
      if (arr[right] >= num) {
        return 1;
      } else {
        right++;
      }
    }
    if (currentSum - arr[left] >= num) {
      currentSum = currentSum - arr[left];
      left++;
    } else {
      right++;
      left++;
      currentSum = currentSum - arr[left] + arr[right];
    }
  }
  console.log("made it");
  return right - left + 1;
}

console.log(minSubArrayLen([1, 1, 2, 9, 4, 1, 4, 3, 2, 1, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
