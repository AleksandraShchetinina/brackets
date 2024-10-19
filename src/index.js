module.exports = function check(str, bracketsConfig) {
  let s = [...bracketsConfig];
  let stack = [];
  let brackets = {
  ")": "(",
  "}": "{",
  "]": "[",
  "|": "|"
  };

  for (let i = 0; i < s.length; i++){
    const cur = s[i];

    if(isClosedBracket(cur)){
      if (brackets[cur] !== stack.pop()) return false;

    }else {
      stack.push(cur);
    }
  }

  return stack.length === 0;

}

function isClosedBracket (item){
  return[')','}',']','|'].indexOf(item) > -1;
}
