function triangle(r, c){
  if (r == 0) {
            return;
        }
        if (c < r) {
            process.stdout.write("*");
            triangle(r, c+1);
        } else {
            console.log()
            triangle(r-1, 0);
        }
}

triangle(4,0)

function triangle2(r,c){
  if (r == 0) {
            return;
        }
        if (c < r) {
            triangle2(r, c+1);
            process.stdout.write("* ");
        } else {
            triangle2(r-1, 0);
            console.log()
        }
}
 triangle2(4, 0)
