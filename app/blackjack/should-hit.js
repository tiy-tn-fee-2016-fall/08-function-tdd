import shouldSplit from './should-split';
import cardSum from './card-sum';

export default function (card1, card2) {
  if (shouldSplit(card1, card2)) {
    return false;
  }

  if (cardSum(card1, card2) > 17) {
    return false;
  }

  return true;
}
