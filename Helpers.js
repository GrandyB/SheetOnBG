class Helpers {
    /**
     * @param cellReference {string} a Google Sheet cell reference, e.g. "G4"
     * @param offset {number} the number of columns to shift e.g. 2
     * @return {string} a new cell reference, e.g. "I4" (using example parameters above)
     */
    static relativeColumn(cellReference, offset) {
        const column = cellReference.replace(/\d+/g, '');
        const columnIndex = this.columnToIndex(column);
        const newIndex = columnIndex + offset;
        const newColumn = this.indexToColumn(newIndex);
        const row = cellReference.replace(/[A-Z]+/g, '');

        return newColumn + row;
    }

    /**
     * @param cellReference {string} a Google Sheet cell reference, e.g. "G4"
     * @param offset {number} the number of rows to shift e.g. 2
     * @return {string} a new cell reference, e.g. "G6" (using example parameters above)
     */
    static relativeRow(cellReference, offset) {
        const row = parseInt(cellReference.replace(/\D+/g, ''));
        const newRow = row + offset;
        const column = cellReference.replace(/\d+/g, '');

        return column + newRow;
    }

    // Helper function to convert column letters to indices
    static columnToIndex(column) {
        let index = 0;
        const length = column.length;

        for (let i = 0; i < length; i++) {
            index = index * 26 + (column.charCodeAt(i) - 64); // Subtract 64 to get the value (A has ASCII value 65)
        }

        return index - 1;
    }

    // Helper function to convert column indices to letters
    static indexToColumn(index) {
        let column = '';
        let remainder;

        while (index >= 0) {
            remainder = index % 26;
            column = String.fromCharCode(65 + remainder) + column; // Add 65 to get the ASCII value of the corresponding letter (A)
            index = Math.floor(index / 26) - 1;
        }

        return column;
    }
}