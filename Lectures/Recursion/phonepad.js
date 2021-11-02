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
