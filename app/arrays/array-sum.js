export default function arraySum(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    count = count + arr[i];
  }

  return count;
}
