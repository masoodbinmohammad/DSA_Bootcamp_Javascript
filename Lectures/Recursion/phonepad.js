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
//diceReturn('', 4)


function phonePad(p, up){
  if (up.length == 0) {
            console.log(p);
            return;
        }
        let digit = up.charAt(0) - '0'; // this will convert '2' into 2
        for (let i = (digit - 1) * 3; i < digit * 3; i++) {
            let ch = String.fromCharCode(('a'.charCodeAt(0) + i));
            phonePad(p + ch, up.substring(1));
        }
}

phonePad('', '12')
