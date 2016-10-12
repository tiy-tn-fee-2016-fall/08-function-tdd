
export default function (arr) {
  let arraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraySum = arraySum + arr[i];
  }

  return arraySum;
}
