console.log("mini-project_6");
var addTask = document.querySelector("#enter-task");
var addbtn = document.getElementById("s-btn");
var accessbottom = document.getElementById("bttm");
let paragraphCounter = 1;
let checkboxCounter = 1;

addTask.addEventListener("click", () => {
    if (addTask.textContent === "Enter your task here...") {
        addTask.textContent = "";
    }
});


addbtn.addEventListener("click", () => {
    if (addTask.textContent === "" || addTask.textContent === "Enter your task here...") {
        alert("No task Added");
        addTask.textContent = "Enter your task here..."
    } else {
        document.getElementById("bttm").style.border = "2px solid #61656A";
        document.getElementById("bttm").style.borderTop = "0";

        let newParagraph = document.createElement('p');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        newParagraph.appendChild(checkbox);
        newParagraph.appendChild(document.createTextNode(addTask.textContent));
        newParagraph.style.backgroundColor="#ddd"

        newParagraph.id = `mytask${paragraphCounter}`;
        checkbox.id = `checkBox${checkboxCounter}`;

        accessbottom.appendChild(newParagraph);

        paragraphCounter++;
        checkboxCounter++;

        addTask.textContent = "";

        console.clear();

        var check = document.querySelectorAll('[id^="checkBox"]');
        check.forEach(function (checkBox) {
            checkBox.addEventListener('click', function () {
                 setTimeout(() => {
                    checkBox.parentElement.remove();
                }, 300);
            })
        });

        var checkParaCount = document.querySelectorAll('[id^="mytask"]');
        checkParaCount.forEach(function (Para) {
            if (checkParaCount.length >= 8) {
                console.log(Para.length);
                accessbottom.style.overflowY = "auto";
            }
           
        });
    }
});


