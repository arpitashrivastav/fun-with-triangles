import "./styles.css";
const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = parseInt(angle1) + parseInt(angle2) + parseInt(angle3);
  // console.log(sumOfAngles);
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value
  );
  //90
  //303030
  // console.log(inputs[0].value, inputs[1].value, inputs[2].value);
  // console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    console.log("This is a triangle!");
    output.innerText = "This is a triangle!";
  } else {
    console.log("This is not a triangle!");
    output.innerText = "This is not a triangle!";
  }
}
isTriangleBtn.addEventListener("click", isTriangle);
