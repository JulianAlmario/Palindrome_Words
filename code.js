function palindrome(word){
if(word===""){
  return "You do not enter a word";
}else{
  console.log(word);
  let wordmodify="";
  for(let i=word.length-1;i>=0;i--){
  wordmodify=wordmodify+word[i];
  }
  if(wordmodify===word){
   return "This word is palindrome";
  }else{
    return "This word is not palindrome";
  }
}
}

document.addEventListener("DOMContentLoaded", () => {
  
  const btn = document.querySelector("button");
  const inp = document.getElementById("input");
  let text;

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    text = inp.value;
    document.getElementById("message").innerText = palindrome(text);
  });

});