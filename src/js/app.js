// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

import { Team } from '../class/Team';
import { Magician } from '../class/Magician';

const team = new Team();
team.addCharacter(new Magician('Archer', 'Magician'));
team.addCharacter(new Magician('Gandalf', 'Magician'));

for (let item of team) {
  console.log(item);
}