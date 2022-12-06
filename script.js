let screenNumber = "0";
function setScreenNumber(numb) {
  screenNumber = numb;
  document.querySelectorAll(".top .result")[0].textContent = screenNumber;
}

//thame
let colorScheme = "";
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  colorScheme = "dark";
} else {
  colorScheme = "light";
}
document.querySelectorAll(".App")[0].classList.add(colorScheme);
//thame

let bunnotnsList = document.querySelectorAll(".row button");
function doAnimation() {
  document.querySelectorAll(".top .result")[0].classList.add("nice");
  for (var i = 0; i < bunnotnsList.length; i++) {
    bunnotnsList[i].classList.add("nice");
  }
}
window.setTimeout(doAnimation, 500);

//way
let wayArr = [];
function setWay(way) {
  let elType = "";
  let wayContent = "";
  way.map((el) => {
    if (el === "/" || el === "*" || el === "-" || el === "+") {
      elType = "symb";
    } else if (el === "=") {
      elType = "func_done";
    } else {
      elType = "number";
    }
    wayContent = wayContent + '<span class="' + elType + '">' + el + "</span>";
  });

  document.querySelectorAll(".top .way")[0].innerHTML = wayContent;
}
//way

//numb
const handleSetNumb = (numb) => {
  let oldScreenNumber =
    document.querySelectorAll(".top .result")[0].textContent;
  if (
    oldScreenNumber === "0" ||
    oldScreenNumber === "/" ||
    oldScreenNumber === "*" ||
    oldScreenNumber === "-" ||
    oldScreenNumber === "+"
  ) {
    if (numb === ".") {
      setScreenNumber(oldScreenNumber + numb);
    } else {
      setScreenNumber(numb);
    }
  } else {
    let newScreenNumber = oldScreenNumber + numb;
    setScreenNumber(newScreenNumber);
  }
};
let numbList = document.querySelectorAll(".row .numb");
for (var i = 0; i < numbList.length; i++) {
  numbList[i].addEventListener("click", (e) => {
    e.preventDefault();
    handleSetNumb(e.target.textContent);
  });
}
//numb

//clear
document.querySelectorAll(".row .clear")[0].addEventListener("click", (e) => {
  e.preventDefault();
  setScreenNumber("0");
  wayArr = [];
  setWay([]);
});
//clear

// math
let funcList = document.querySelectorAll(".row .func");
for (var i = 0; i < funcList.length; i++) {
  funcList[i].addEventListener("click", (e) => {
    e.preventDefault();
    wayArr = [...wayArr, screenNumber, e.target.textContent];
    setScreenNumber(e.target.textContent);
    setWay(wayArr);
  });
}
// math

//result
document.querySelectorAll(".row .done")[0].addEventListener("click", (e) => {
  e.preventDefault();
  let resultArr = [...wayArr, screenNumber, e.target.textContent];
  setWay(resultArr);

  wayArr = [...wayArr, screenNumber];
  let resultStr = wayArr.join("");
  let result = math.evaluate(resultStr);
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  setScreenNumber(result);
});
//result

//retry
document.querySelectorAll(".top .result")[0].addEventListener("click", (e) => {
  e.preventDefault();
  setScreenNumber(screenNumber);
  wayArr = [];
  setWay([]);
});
//retry

//serviceWorker
function swDev() {
  let ulr = window.location.href;
  let swUrl = ulr + "sw.js";
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response);
  });
}
swDev();
//serviceWorker
