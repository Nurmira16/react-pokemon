export const sortPokemons = (list, type) => {
  const sortedList = [...list];
  switch (type) {
    case "weight": {
      return sortedList.sort((a, b) => a.weight - b.weight);
    }
  }
  console.log(sortedList);
  return sortedList;
};
