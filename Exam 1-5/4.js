let sym = "[qwd]{";
if (checkSymbol(sym)) console.log("True ");
else console.log("False ");

function checkSymbol(sym) {
  let stack = [];

  for (let i = 0; i < sym.length; i++) {
    let x = sym[i];
    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) return false;
    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length == 0;
}
