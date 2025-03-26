let input = document.querySelector('input');

let getValue = (e) =>{
    let val = e.target.innerText
    input.value += val;
}

let result = () =>{
    let res = eval(input.value)
    input.value = res
}

let empty = () =>{
    input.value = ""
}
console.log("updates");