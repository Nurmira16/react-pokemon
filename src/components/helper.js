const sortAttack = (a, b) => {
  return b.stats[0].base_stat - a.stats[0].base_stat;
};

export const sortPokemons = (list, type) => {
  const sortedList = [...list];
  switch (type) {
    case "weight": {
      return sortedList.sort((a, b) => b.weight - a.weight);
    }
    case "attack": {
      return sortedList.sort(sortAttack);
    }
  }
  // console.log(sortedList);
  return sortedList;
};
export const sortClass = (boolean, cls) => {
  return boolean ? cls : "";
};
