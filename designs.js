// Select color input
let colorPicker=document.querySelector("#colorPicker");
// Select size input
let inputHeight=document.querySelector("#inputHeight");
let inputWidth=document.querySelector("#inputWidth");
// When size is submitted by the user, call makeGrid()
// attach event listeners
let sizeSubmit=document.querySelector("#sizePicker").querySelector("input[type='submit']");
sizeSubmit.addEventListener("click",makeGrid);
let table=document.querySelector("#pixelCanvas");
table.addEventListener("click",colorCell);

function makeGrid(e) {
  // Your code goes here!
  e.preventDefault();
  let gridHeight=inputHeight.value ;
  let gridWidth=inputWidth.value ;
  table.innerHTML="";
  let newGrid="";
  for(let row =0;row<gridHeight;row++){
    let newRow="<tr>"
    for (let col=0;col<gridWidth;col++ ){
        newRow+="<td></td>";
    }
    newRow+="</tr>";
    newGrid+=newRow;
  }
  colorPicker.style.left="25%";
  
  
 table.innerHTML=newGrid;
}
function colorCell(e){
  // use event bubbling 
  let cell=e.target;
  let color=colorPicker.value;
  cell.style.backgroundColor=color;
}


