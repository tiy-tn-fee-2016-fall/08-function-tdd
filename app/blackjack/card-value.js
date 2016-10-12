export default function (cardName) {
  if (cardName === 'jack') {
    return 10;
  }

  if (cardName === 'queen') {
    return 10;
  }

  if (cardName === 'king') {
    return 10;
  }

  if (cardName === 'ace') {
    return 11;
  }
  return parseInt(cardName);
}
