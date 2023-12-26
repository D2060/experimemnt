let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
const winningpaterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
function reset(){
  boxes.forEach((box) => {
    box.innerText = null;
    box.disabled = false;
  });
}
let turn = true;
let count=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  });
});
const checkWinner = () => {
  if (count==9){
    alert("Draw match");
    reset();
  }
  else{
  for (let pattern of winningpaterns) {
    let b1 = boxes[pattern[0]].innerText;
    let b2 = boxes[pattern[1]].innerText;
    let b3 = boxes[pattern[2]].innerText;

    if (b1 !== null && b2 != null && b3 != null) {
      if (b1 == b2 && b2 == b3) {
        console.log("You are in equality state !")
        if (b1 == "X"){
          console.log("Player_1 is winner");
          alert("Player_1 is winner");
          reset();
        }
        if (b1 == "O"){
          console.log("Player_2 is winner");
          alert("Player_2 is winner");
          reset();
        }
      }
    }
  }
  }
};
resetbtn.addEventListener("click",() => {
    if (window.confirm("Are sure wnat to reset game")) reset();
});
