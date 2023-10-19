function showValues() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const output = document.getElementById("output");

    output.innerHTML = `
        <h2>User Input:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
}

window.document.body.style.backgroundColor = 'cyan' // changing the background color
document.getElementById('hello').innerHTML = 'hello' // changing the text content
const s = document.querySelector('p').style.color = "yellow";// changing the content color

document.getElementById('change color').style.backgroundColor = 'red'
function clicked(){
alert("fuck u");
document.getElementById('hello').style.color = 'blue'
}

let a = 10

document.getElementById('hello').innerHTML=`hello mufi ${a}`

const input = document.getElementById('input');
const input_value = document.getElementById('input-value');
const reversed = document.getElementById('reversed-value');
const button = document.getElementById('reverse-click');

input.addEventListener("keyup",()=>{
    input_value.innerText = input.value ;
})

button.addEventListener("click",()=>{
    if(input.value.length > 0){
        reversed.innerText = input.value.split("").reverse().join("");
    }
     else {
        reversed.innerText = "";
    }
})
