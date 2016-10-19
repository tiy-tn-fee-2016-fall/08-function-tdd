import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  return (aliveNeighbors(neighbors) === 3);
}
