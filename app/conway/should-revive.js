import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  if (neighbors === 3) {
    return true;
  }
  else {
    return false;
  }
}
