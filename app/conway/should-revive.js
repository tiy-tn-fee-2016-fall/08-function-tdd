import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  if (aliveNeighbors(neighbors) < 3) {
    return false;
  }

  if (aliveNeighbors(neighbors) >= 4) {
    return false;
  }

  return true;
}
