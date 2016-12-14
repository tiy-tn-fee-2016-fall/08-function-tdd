import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  aliveNeighbors(neighbors);
  if (aliveNeighbors(neighbors) >= 2 && aliveNeighbors(neighbors) < 4) {
    return true;
  }
  else { return false;
  }
}
