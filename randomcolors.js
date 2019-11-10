const hexvalues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let randomColor = () => {
  let hex = "#";
  for(let i = 0; i < 6; i++){
    let randomIndex = Math.floor(hexvalues.length * Math.random());
    let randomValue = hexvalues[randomIndex];
    hex = hex + randomValue;
  }
  return hex;
}
let randomColorButton = document.getElementById('generateColorButton');
randomColorButton.onclick = () => {
  document.body.style.backgroundColor = randomColor();
};
