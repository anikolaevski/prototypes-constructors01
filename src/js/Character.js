/* eslint-disable no-throw-literal */
// eslint-disable-next-line import/prefer-default-export
export function Character(name, type) {
  const allowedTypes = [
    { type: 'Bowman', attack: 25, defense: 25 },
    { type: 'Swordsman', attack: 40, defense: 10 },
    { type: 'Magician', attack: 10, defense: 40 },
    { type: 'Daemon', attack: 25, defense: 25 },
    { type: 'Undead', attack: 40, defense: 10 },
    { type: 'Zombie', attack: 10, defense: 40 },
  ];
  try {
    if (name.length < 2 || name.length > 10) {
      throw `Введено имя "${name}". Должно быть: строка, min 2 символа, max 10`;
    }
    const legalType = allowedTypes.find(element => element.type === type);
    if (!legalType) {
      let errorInfo = '';
      // eslint-disable-next-line no-return-assign
      allowedTypes.forEach(element => errorInfo = ` ${element.type}${errorInfo}`);
      throw `Введен тип: "${type}". type - один из типов: ${errorInfo}`;
    }
    this.name = name;
    this.type = type;
    this.attack = legalType.attack;
    this.defense = legalType.defense;
  } catch (err) {
    // eslint-disable-next-line no-console
    this.error = err;
    // console.log(err);
    // return err;
  }
}
