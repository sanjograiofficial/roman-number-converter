// creating variables

const int = document.getElementById('number');
const btn = document.getElementById('convert-btn')

const result = document.getElementById('output');

// creating objects inside an array
const romNum = [
 {num: 1000, roman: "M"}, 
 {num: 900, roman: "CM"}, 
 {num: 500, roman: "D"}, 
 {num: 400, roman: "CD"}, 
 {num: 100, roman: "C"}, 
 {num: 90, roman: "XC"}, 
 {num: 50, roman: "L"}, 
 {num: 40, roman: "XL"}, 
 {num: 10, roman: "X"}, 
 {num: 9, roman: "IX"}, 
 {num: 5, roman: "V"}, 
 {num: 4, roman: "IV"}, 
 {num: 1, roman: "I"}, 
]
//convert function
const romCon = (input)=>{
  let letter = '';
  for(let i = 0; i < romNum.length; i++){
    if(romNum[i].num <= input){
      input = input - romNum[i].num;
      letter = letter + romNum[i].roman;
      i--;
    }   
  }
  return result.innerText = letter;
}


//event listener
btn.addEventListener('click', ()=>{
  result.style.display = 'block'
  if(int.value == ''){
    result.innerText = "Please enter a valid number"
  }
  else if(int.value <= -1){
    result.innerText = "Please enter a number greater than or equal to 1"
  }
  else if(int.value >= 4000){
    result.innerText = "Please enter a number less than or equal to 3999"
  }
  else{
    const out = romCon(int.value);
    result.innerText = "Roman Number: " + out;
  }
}
)
