let arr = []

function displayArray() {
    const container = document.getElementById("arrayElements")
    container.innerHTML = ""

    arr.forEach((item, index) => {
        container.innerHTML += `Element ${index}: ${item}<br>`;
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addLast()
    }
})

function addLast() {
    const value = document.getElementById("elementInput").value;
    if (value === "") return;
    arr.push(value);
    displayArray();
}

function removeLast() {
    arr.pop();
    displayArray();
}

function removeFirst() {
    arr.shift();
    displayArray();
}

function addFirst() {
    const value = document.getElementById("elementInput").value
    if (value === "") return;
    arr.unshift(value);
    displayArray();
}

function removeAtIndex() {
    const index = document.getElementById("indexInput").value;
    if (index === "") return;
    arr.splice(index, 1);
    displayArray();
}