const screamWarrior = () => {
  var warrior1 = 'Ninja';
  let warrior2 = 'Samurai';

  return `Our warriors are ${warrior1} and ${warrior2}.`;
};

const screamWarrior2 = () => {
  var warrior1 = 'Viking';
  let warrior2 = 'Soldier';

  return `Our warriors are ${warrior1} and ${warrior2}.`;
};

console.log(screamWarrior(), screamWarrior2());

// warrior1 and warrior2 are not available globally
// console.log(warrior1, warrior2);
