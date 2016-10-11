
export default function deepEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== a[i]) {
      return false;
    }

    return true;
  }
}
