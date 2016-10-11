export default function deepEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  for (let j = 0; j < b.lenth; j++) {
    if (a[j] !== b[j]) {
      return false;
    }
  }
  return true;
}
