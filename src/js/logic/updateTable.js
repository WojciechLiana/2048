const updateTable = (table, coradinates) => {
    const newTable = JSON.parse(JSON.stringify(table));
    newTable[coradinates[0]][coradinates[1]] = 2;
    return newTable;
};

export default updateTable;