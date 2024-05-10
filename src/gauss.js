function gaussSimple(A, b) {

    var n = b.length;

    // Eliminación hacia adelante
    for (var i = 0; i < n; i++) {
        // Hacer cero todos los elementos debajo de A[i][i]
        for (var j = i + 1; j < n; j++) {
            var factor = A[j][i] / A[i][i];  // Potential division by zero
            for (var k = i; k < n; k++) {
                A[j][k] -= factor * A[i][k];
            }
            b[j] -= factor * b[i];
        }
    }

    // Sustitución hacia atrás
    var x = new Array(n).fill(0);
    for (var i = n - 1; i >= 0; i--) {
        x[i] = b[i] / A[i][i];  // Potential division by zero
        for (var j = i + 1; j < n; j++) {
            x[i] -= (A[i][j] / A[i][i]) * x[j];
        }
    }

    return x;
}


// Ejemplo de uso
// var A = [[50, 20, 40],
//          [30, 50, 30],
//          [40, 50, 60]];
// var b = [4500, 4400, 5800];

// var solucion = gaussSimple(A, b);
// console.log("Solución:", solucion);
export default gaussSimple;