import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  if (aliveNeighbors(neighbors) < 2) {
    return false;
  }
  if (aliveNeighbors(neighbors) > 3) {
    return false;
  }
  else {
    return true;
  }
}
