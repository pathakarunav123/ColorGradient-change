let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyTxt = document.querySelector(".copyCode");

let colorChange1 = "rgb(142,29,40)";
let colorChange2 = "rgb(86,99,146)";

const myHexCode = () => {
  let hexCode = "0123456789abcdef";
  let printHexCode = "#";
  for( i = 0; i<6; i++){
    let generateCode = hexCode[Math.floor(Math.random()*16)];
   // console.log(generateCode);
   printHexCode = `${printHexCode}${generateCode}`;
  }
  return printHexCode;
}

const handleCopy = ()=> {
  let gradientValue = document.body.style.backgroundImage;
  copyTxt.textContent = `background-image ${gradientValue}`;
}

const handleButton1 = () =>{
   colorChange1 = myHexCode();
  console.log(colorChange1);
  btn1.textContent = colorChange1;
  document.body.style.backgroundImage = ` linear-gradient(to right top, ${colorChange1},${colorChange2})`;
  handleCopy();
}

const handleButton2 = () =>{
   colorChange2 = myHexCode();
  console.log(colorChange2);
  btn2.textContent = colorChange2;
  document.body.style.backgroundImage = `  linear-gradient(to right top, ${colorChange2},${colorChange1})`;
  handleCopy();
}

btn1.addEventListener('click',handleButton1);
btn2.addEventListener('click',handleButton2);

copyTxt.addEventListener('click' , ()=>{
  navigator.clipboard.writeText(copyTxt.textContent);
})