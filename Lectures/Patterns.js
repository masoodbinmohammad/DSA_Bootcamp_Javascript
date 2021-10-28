function pattern31(n) {
        let originalN = n;
        n = 2 * n;
        for (let row = 0; row <= n; row++) {
            for (let col = 0; col <= n; col++) {
                let atEveryIndex = originalN - Math.min(Math.min(row, col), Math.min(n - row, n - col));
                process.stdout.write(atEveryIndex + " ");
            }
            console.log('\n');
        }
    }
pattern31(4);
