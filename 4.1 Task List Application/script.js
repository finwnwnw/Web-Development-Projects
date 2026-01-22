


// heading = document.querySelector("h1")

// heading.addEventListener('click', function() {
//     this.classList.toggle("highlight")
// })


// document.querySelector("h1").setAttribute("class", "newClass")
// document.querySelector("h1").removeAttribute("class", "heading")

// document.querySelector("h1").style.fontSize = "60px"

// window.onload = addElement;

// function addElement() {
//     const newDiv = document.createElement("div");

//     const newContent = document.createTextNode("Hello, I am a new div!");

//     newDiv.appendChild(newContent);

//     const secondHeading = document.querySelector("h1:nth-of-type(2)");
//     document.body.insertBefore(newDiv, secondHeading)
// }

// const heading = document.querySelector("h1");
// heading.addEventListener('click', addElement)

// function addElement() {
//     const newDiv = document.createElement("div");

//     newDiv.classList.add("div-class");

//     const newParagraph = document.createElement("p");

//     const newContent = document.createTextNode("Hello, I am a new div!");

//     newDiv.appendChild(newParagraph);
//     newParagraph.appendChild(newContent);

//     const existingHeading = document.querySelector("h1:nth-of-type(2)")

//     existingHeading.insertAdjacentElement("afterend", newDiv);
// }



const input = document.getElementById('task-input')
const addBtn = document.getElementById('add-task')
const removeAllBtn = document.getElementById('remove-tasks')
const list = document.getElementById('task-list')

function addTask() {
    if (input.value === "") return;

    const li = document.createElement('li')
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.gap = "20px";
    li.style.marginTop = "10px";
    li.style.left = "5px"

    const text = document.createElement('span')
    text.style.color = 'white'
    text.textContent = input.value

    const removeBtn = document.createElement('button')
    removeBtn.style.backgroundColor = 'rgb(230, 230, 230);'
    removeBtn.style.padding = '5px'
    removeBtn.textContent = "Remove"


    removeBtn.addEventListener('click', () => {
        li.remove();
    })

    li.appendChild(text)
    li.appendChild(removeBtn)
    list.appendChild(li)
    
    input.value = "";

}

addBtn.addEventListener('click', addTask)

document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addTask()
    }
})

removeAllBtn.addEventListener('click', () => {
    list.innerHTML = ""
})