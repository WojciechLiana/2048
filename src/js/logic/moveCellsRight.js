function moveCellsRight(table) {
    const newTable = JSON.parse(JSON.stringify(table));
    const sortedTable = [[], [], [], [], []];

    for (let row = 0; row < 5; row++) {
        newTable.sort((a, b) => ((a[row] < b[row]) && (a[row] === null)) ? -1 : 0);
        copySortedRowToNewTab(sortedTable, newTable, row);
    }
    return sortedTable;
}

const copySortedRowToNewTab = (sorted, newTab, row) => {
    for (let cell = 0; cell < 5; cell++) {
        sorted[cell].push(newTab[cell][row]);
    }
};

export default moveCellsRight;