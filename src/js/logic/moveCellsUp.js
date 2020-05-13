function moveCellsUp(table) {
    const newTable = [];
    for (let row = 0; row < 4; row++) {
        newTable.push(
            JSON.parse(JSON.stringify(table))[row].filter(
                element => element !== null
            ));
        addMissingCell(newTable[row]);
    }

    return newTable;
}

const addMissingCell = (row) => {
    while (row.length !== 4) {
        row.push(null);
    }
};

export default moveCellsUp;