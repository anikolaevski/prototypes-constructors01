/* eslint-disable no-console */
// TODO: write code here
import {
  Character,
} from './Character';

console.log('app.js bundled');

const obj = new Character(
  'Лучник',
  'Bowman',
);
console.log('Объект 1:');
console.table(obj);

console.log('Объект 2:');
const obj1 = new Character(
  'Какой-то шушпанцер',
  'Swordsman',
);
console.log(obj1);

console.log('Объект 3:');
const obj2 = new Character(
  'Bowman',
  'Непонятно что',
);
console.log(obj2);
