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
