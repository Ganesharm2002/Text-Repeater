let inputBox = document.querySelector("#textInput");
let str1 = "";
let displayBox = document.querySelector("#repeatedText");
let inputAmount = document.querySelector("#amount");
let copyBtn=document.querySelector('#copyBtn');
let copiedText=document.querySelector('#copiedText');

let resetBtn = document.querySelector("#reset");
let resetBox = () => {
  displayBox.value = str1;
  inputBox.value = str1;
  displayBox.style.transform='scale(0)';
  copyBtn.style.transform='scale(0)';
  copyBtn.style.transition='0.9s';
  resetBtn.style.transform = "scale(0)";
  resetBtn.style.transition='0.7s';

  inputAmount.value = str1;
}
let copy=()=>{
    copiedText.style.transform='scale(1)';
    setTimeout(()=>{
        copiedText.style.transform='scale(0)';
    },1000);
    displayBox.select();
    displayBox.setSelectionRange(0,99999);
    document.execCommand('copy');
}


let clickBtn = document.querySelector("#click");

clickBtn.addEventListener("click", () => {
  let inputValue = inputBox.value;

  displayBox.style.transform = "scale(1)";
  displayBox.value = inputValue;
  copyBtn.style.transform='scale(1)';
  copyBtn.style.transition='0.9s';
  let str = inputValue;
  let countAmount = inputAmount.value;

  // Repeat the input string with spaces in between
  let repeater = (str + " ").repeat(countAmount).trim();

  displayBox.value = repeater;
  resetBtn.style.transform = "scale(1)";

  displayBox.style.transition = "0.7s";

});
copyBtn.addEventListener('click',copy);

resetBtn.addEventListener("click", resetBox);
