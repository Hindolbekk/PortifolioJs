let words=document.querySelectorAll(".word");
words.forEach((word)=>{
  let letters=word.textContent.split("");
  word.textContent="";
  letters.forEach((letter)=>{
  let span=document.createElement("span");
  span.textContent=letter;
  span.className="letter";
  word.append(span);
  });
});
let currentwordIndex = 0;
let maxwordIndex=words.length-1;
words[currentwordIndex].style.opacity="1";
let changeText = ()=>{
  let currentWord=words[currentwordIndex];
  let nextWord=currentwordIndex === maxwordIndex ? words[0]:words[currentwordIndex + 1];
  
  Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
      letter.className="letter out";
    },i * 80)
  });
  nextWord.style.opacity="1";
  Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className="letter behind";
    setTimeout(()=>{
      letter.className="letter in";
    },340 + i * 80);
  });
  currentwordIndex=currentwordIndex === maxwordIndex? 0:currentwordIndex + 1;
}
changeText();
setInterval(changeText,3000);