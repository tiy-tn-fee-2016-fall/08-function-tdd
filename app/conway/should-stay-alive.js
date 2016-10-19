import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  if (aliveNeighbors(neighbors) >= 2) {
    return true;
  }
}
