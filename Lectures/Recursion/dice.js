function dice(p, target){
   if (target == 0) {
            console.log(p);
            return;
        }

        for (let i = 1; i <= 6 && i <= target; i++) {
            dice(p + i, target - i);
        }
}

let arrAll = []
function diceReturn(p, target){
  if(target == 0){
    let arr = [];
    arr.push(p)
    return arr;
  }
  for(let i =1 ; i < 6 && i <= target; i++){
    const ans = diceReturn(p+i, target -1);
    arrAll.push(ans);
  }
  return arrAll
}

//dice('', 4);
diceReturn('', 4)
