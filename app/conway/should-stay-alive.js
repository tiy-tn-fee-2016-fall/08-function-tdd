import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  let alive = 0;
  if (aliveNeighbors(neighbors) <= 3) {
    return false;
  }

  return alive;
}
