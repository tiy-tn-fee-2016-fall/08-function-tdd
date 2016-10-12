import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  let alive = 0;

  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i] === true) {
      alive++;
    }
  }

  return alive;
}
