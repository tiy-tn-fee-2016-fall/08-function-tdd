export default function (cardValue) {
  if (cardValue === 'jack') {
    return 10;
  }

  if (cardValue === 'queen') {
    return 10;
  }

  if (cardValue === 'king') {
    return 10;
  }

  if (cardValue === 'ace') {
    return 11;
  }
  else {
    parseInt(cardValue);
    return parseInt(cardValue);
  }
}
