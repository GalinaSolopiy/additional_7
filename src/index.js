module.exports = function solveSudoku(matrix) {

    var matrixStack = [];
    for (var i = 0; i < matrix.length; i++){
        for (var k = 0; k < matrix[i].length; k++){
            matrixStack.push(matrix[i][k]);
        }
    }

    takePositionNumber(0);
    return groups(matrixStack);
    function takePositionNumber(index) {
        if (index >= matrixStack.length) {
            return true;
        } else if (matrixStack[index] != 0) {
            return takePositionNumber(index + 1);
        }

        for (var i = 1; i <= 9; i++) {
            if (checkOfNumber(i, Math.floor(index / 9), index % 9)) {
                matrixStack[index] = i;
                if (takePositionNumber(index + 1)) {
                    return true;
                }
            }
        }
        matrixStack[index] = 0;
        return false;
    }

    function checkOfNumber(num, row, col) {
        for (var i = 0; i < 9; i++) {
            var indexN = ((Math.floor(row / 3) * 3) + Math.floor(i / 3)) * 9 + (Math.floor(col / 3) * 3) + (i % 3);
            if (num == matrixStack[(row * 9) + i] || num == matrixStack[col + (i * 9)] || num == matrixStack[indexN]) {
                return false;
            }
        }
        return true;
    }

    function groups(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i += 9) {
            result.push(arr.slice(i, i + 9));
        }
        return result;
    }
}
