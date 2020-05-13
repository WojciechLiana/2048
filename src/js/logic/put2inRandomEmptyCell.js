const put2inRandomEmptyCell = (table, coradinatesTable) => {
    const newTable = JSON.parse(JSON.stringify(table));
    newTable[coradinatesTable[0]][coradinatesTable[1]] = 2;
    return newTable;
};

export default put2inRandomEmptyCell;