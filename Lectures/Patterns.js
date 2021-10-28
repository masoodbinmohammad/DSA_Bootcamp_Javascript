function pattern31(n) {
        const originalN = n;
        n = 2 * n;
        for (let row = 0; row <= n; row++) {
            for (let col = 0; col <= n; col++) {
                const atEveryIndex = originalN - Math.min(Math.min(row, col), Math.min(n - row, n - col));
                process.stdout.write(atEveryIndex + " ");
            }
            console.log('\n');
        }
    }

function pattern30(n){
   for (let row = 1; row <= n; row++) {
            for (let space = 0; space < n-row; space++) {
                process.stdout.write("  ");
            }
            for (let col = row; col >= 1; col--) {
                process.stdout.write(col + " ");
            }
            for (let col = 2; col <= row; col++) {
                process.stdout.write(col + " ");
            }
           console.log('\n');
        }
}

function pattern17(n){
   for (let row = 1; row <= 2 * n; row++) {
            let c = row > n ? 2 * n - row: row;

            for (let space = 0; space < n-c; space++) {
                process.stdout.write("  ");
            }

            for (let col = c; col >= 1; col--) {
                process.stdout.write(col + " ");
            }
            for (let col = 2; col <= c; col++) {
                process.stdout.write(col + " ");
            }
            console.log('\n');
        }
}

//pattern31(4);
//pattern30(10);
pattern17(3)
