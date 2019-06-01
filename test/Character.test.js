import {
  Character,
} from '../src/js/Character';

test('Test Bowman', () => {
  const result = new Character('Персонаж', 'Bowman');

  const expected = {
    name: 'Персонаж',
    type: 'Bowman',
    attack: 25,
    defense: 25,
  };
  expect(result).toEqual(expected);
});

test('Test long name', () => {
  const result = new Character('Какой-то шушпанцер', 'Bowman');
  const expected = {
    error: 'Введено имя "Какой-то шушпанцер". Должно быть: строка, min 2 символа, max 10',
  };
  expect(result).toEqual(expected);
});

test('Test short name', () => {
  const result = new Character('A', 'Bowman');
  const expected = {
    error: 'Введено имя "A". Должно быть: строка, min 2 символа, max 10',
  };
  expect(result).toEqual(expected);
});

test('Test wrong type', () => {
  const result = new Character('Персонаж', 'Непонятно что');
  const expected = {
    error: 'Введен тип: "Непонятно что". type - один из типов:  Zombie Undead Daemon Magician Swordsman Bowman',
  };
  expect(result).toEqual(expected);
});
