const warrior = {
  name: 'Jujin Take',
  type: 'Ninja',
  weapon: 'Shuriken',
  agility: 79,
}; // this is globally scoped

const screamWarrior = () => {
  let warrior2 = 'Samurai';

  warrior3 = 'Viking'; // beware that this will be a global variable
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2);
    },
  };
};

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3);
