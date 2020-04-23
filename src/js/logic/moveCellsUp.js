function moveCellsUp(table) {
    const newTable = [];
    for (let row = 0; row < 5; row++) {
        newTable.push(
            JSON.parse(JSON.stringify(table))[row].filter(
                element => element !== null
            ));
    }

    for (let row = 0; row < 5; row++) {
        while (newTable[row].length !== 5) {
            newTable[row].push(null);
        }
    }

    return newTable;
}

export default moveCellsUp;