//*********************************************
// created node elements
const parentNodeDiv = document.createElement("div");
const nodeP = document.createElement("p");
const childNodeDiv = document.createElement("div");
const nodeInput = document.createElement("input");
const nodeBtn = document.createElement("button");
const nodeUl = document.createElement("ul");
// created node elements
//*********************************************

//*********************************************
// created html DOM elements
const div = document.body.appendChild(parentNodeDiv);
const p = parentNodeDiv.appendChild(nodeP);
const inputButtonDiv = parentNodeDiv.appendChild(childNodeDiv);
const input = childNodeDiv.appendChild(nodeInput);
const btn = childNodeDiv.appendChild(nodeBtn);
const ul = parentNodeDiv.appendChild(nodeUl);
// created html DOM elements
//*********************************************

//*********************************************
// Last inserted value
//*********************************************
// Last inserted value
input.addEventListener("input", updateValue);
function updateValue(e) {
  const value = (p.textContent = `Last inserted value is ${e.target.value}`);
  localStorage.setItem("Some text", value);
}
document.addEventListener("DOMContentLoaded", () => {
  const text = localStorage.getItem("Some text");

  if (text && text.trim()) {
    p.textContent = text;
  }
});
// Last inserted value
//*********************************************
// Last inserted value
//*********************************************

//*********************************************
// .class selectors
div.classList.add("todo");
p.classList.add("todo-p");
inputButtonDiv.classList.add("todo-input-btn");
input.classList.add("todo-input");
btn.classList.add("todo-btn");
// .class selectors
//*********************************************

//*********************************************
// default values
input.placeholder = "Type here...";
btn.textContent = "Add task";
ul.style.cssText = "display: none; list-style: none; padding: 0;";
// default values
//*********************************************

function buttonHandler() {
  if (input.value === "") {
    //*********************************************
    // default values
    input.placeholder = "Please enter a value";
    btn.textContent = "Empty value!";
    // default values
    //*********************************************

    //*********************************************
    // class selectors
    input.classList.add("todo-input-danger");
    btn.classList.add("todo-btn-danger");
    // class selectors
    //*********************************************
  }
  if (input.value !== "") {
    (function createElements() {
      //*********************************************
      // created node elements
      const nodeLi = document.createElement("li");
      const nodeInputCheckboxInLi = document.createElement("input");
      const nodeSpanInLi = document.createElement("span");
      const nodeBtnInLi = document.createElement("button");
      // created node elements
      //*********************************************

      //*********************************************
      // created html DOM elements
      const li = nodeUl.appendChild(nodeLi);
      const inputCheckboxInLi = nodeLi.appendChild(nodeInputCheckboxInLi);
      const spanInLi = nodeLi.appendChild(nodeSpanInLi);
      const btnInLi = nodeLi.appendChild(nodeBtnInLi);
      // created html DOM elements
      //*********************************************

      //*********************************************
      // .class selectors
      li.classList.add("added-li");
      inputCheckboxInLi.classList.add("checkbox-li");
      spanInLi.classList.add("span-text-li");
      btnInLi.classList.add("remove-btn-li");
      input.classList.add("todo-input-success");
      btn.classList.add("todo-btn-success");
      // remove .class selectors
      input.classList.remove("todo-input-danger");
      btn.classList.remove("todo-btn-danger");
      //*********************************************

      //*********************************************
      // default values
      input.placeholder = "Value will added!";
      btn.textContent = "Added!";
      inputCheckboxInLi.type = "checkbox";
      const textNode = document.createTextNode(input.value);
      btnInLi.textContent = "x";
      // default values
      //*********************************************

      if (btn.textContent === "Added!") {
        setTimeout(() => {
          //*********************************************
          // default values
          btn.textContent = "Add task";
          input.placeholder = "Please enter a value";
          // default values
          //*********************************************

          //*********************************************
          // .class selectors
          input.classList.remove("todo-input-success");
          btn.classList.remove("todo-btn-success");
          // .class selectors
          //*********************************************
        }, 1000);
      }

      //**************
      (function addTask() {
        //*********************************************
        // default style
        ul.style.cssText =
          "display: fles; flex-direction: column; list-style: none; padding: 0;";
        // default style
        //*********************************************

        //*********************************************
        // CALLED inputCheckboxInLi textNode btnInLi
        ul.appendChild(li).appendChild(spanInLi).appendChild(textNode);
        ul.appendChild(li).appendChild(btnInLi);
        // CALLED inputCheckboxInLi textNode btnInLi
        //*********************************************

        (function checkboxes() {
          inputCheckboxInLi.addEventListener("click", function () {
            if (inputCheckboxInLi.checked) {
              spanInLi.style.textDecoration =
                "3px line-through solid rgba(255,0,0,.5)";
            }
            if (!inputCheckboxInLi.checked) {
              spanInLi.style.textDecoration = "none";
            }
          });
        })();

        //*********************************************
        // clear input value after add element
        input.value = "";
        // clear input value after add element
        //*********************************************
      })();

      (function removeTask() {
        btnInLi.addEventListener("click", () => {
          ul.appendChild(li).remove();
        });
      })();
    })();
  }
}

btn.addEventListener("click", () => buttonHandler());

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    buttonHandler();
  }
});
