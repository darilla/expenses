export const getFilterDataStructure = array =>
  array.map(name => ({ text: name, value: name }));

export const getUniqueNames = records => {
  const uniqueNames = [];

  for (let i = 0; i < records.length; i += 1) {
    if (uniqueNames.indexOf(records[i].name) === -1) {
      uniqueNames.push(records[i].name);
    }
  }

  return getFilterDataStructure(uniqueNames);
};
