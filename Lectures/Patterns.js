
function pattern1(n){
   for (let row = 1; row <= n; row++) {
            // for every row, run the col
            for (let col = 1; col <= n; col++) {
                process.stdout.write("* ");
            }
            // when one row is prleted, we need to add a newline
            console.log();
        }
}

function pattern2(n){
  for (let row = 1; row <= n; row++) {
            // for every row, run the col
            for (let col = 1; col <= row; col++) {
                process.stdout.write("* ");
            }
            // when one row is prleted, we need to add a newline
            console.log();
        }
}

function pattern3(n){
  for (let row = 1; row <= n; row++) {
            // for every row, run the col
            //for (let col = 1; col <= n-row+1; col++) {
              //  process.stdout.write("* ");
            //}
            for (let col = n-row+1; col >=1 ; col--) {
                process.stdout.write("* ");
            }
            // when one row is prleted, we need to add a newline
            console.log();
        }
}

function pattern4(n){
  for (let row = 1; row <= n; row++) {
            // for every row, run the col
            for (let col = 1; col <= row; col++) {
                process.stdout.write(col + " ");
            }
            // when one row is prleted, we need to add a newline
            console.log();
        }
}

function pattern5(n){
  for (let row = 1; row < 2 * n; row++) {
            let totalColsInRow = row > n ? 2 * n - row: row;
            for (let col = 0; col < totalColsInRow; col++) {
               process.stdout.write("* ");
            }
            console.log();
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
            console.log();
        }
}


function pattern28(n){
  for (let row = 1; row < 2 * n; row++) {
            const totalColsInRow = row > n ? 2 * n - row: row;

            const noOfSpaces = n - totalColsInRow;
            for (let s = 0; s < noOfSpaces; s++) {
                process.stdout.write(" ");
            }

            for (let col = 0; col < totalColsInRow; col++) {
                process.stdout.write("* ");
            }
            console.log();
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
           console.log();
        }
}

function pattern31(n) {
        const originalN = n;
        n = 2 * n;
        for (let row = 0; row <= n; row++) {
            for (let col = 0; col <= n; col++) {
                const atEveryIndex = originalN - Math.min(Math.min(row, col), Math.min(n - row, n - col));
                process.stdout.write(atEveryIndex + " ");
            }
            console.log();
        }
    }


//pattern31(4);
//pattern30(10);
//pattern17(3)
//pattern28(4)
//pattern5(4)
//pattern4(4)
//pattern3(4)
//pattern1(4)
//pattern2(4)
