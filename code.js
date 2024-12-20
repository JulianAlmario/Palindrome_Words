function checkword(word){
  let neword="";
 for(let i = 0; i < word.length; i++){
  if(/^[a-zA-Z0-9]+$/.test(word[i])){
    neword=neword+word[i];
  }
 }
 neword=neword.toLowerCase();
 return neword;
}

function palindrome(word){
  word=word.toLowerCase();
if(word==""){
  return "Please input a value";
}else{
  let wordmodify="";
  for(let i=word.length-1;i>=0;i--){
  if(/^[a-zA-Z0-9]+$/.test(word[i])){
    wordmodify=wordmodify+word[i];
  }
  }
  
  console.log(wordmodify);
  if(wordmodify===checkword(word) && !/^[0-9]+$/.test(word)){
   return `${word} is a palindrome`;
  }else{
    return ` ${word} is not a palindrome`;
  }
}
}

document.addEventListener("DOMContentLoaded", () => {
  
  const btn = document.getElementById("check-btn");
  const inp = document.getElementById("text-input");
  let text;

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    text = inp.value;
    document.getElementById("result").innerText = palindrome(text);
  });

});