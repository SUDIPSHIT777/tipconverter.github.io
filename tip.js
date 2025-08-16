let convert = document.getElementById("convert");
let result = document.getElementById("result");
convert.addEventListener("click", () => {
    let input1 = document.getElementById("in1").value;
    let input2 = document.getElementById("in2").value;
    if (input1 === "" && input2 === "") {
        result.textContent = "Give Two Input";
    }
    else {
        let output = (input1 * input2) / 100;
        result.textContent = `Total Tip is ${output}%`
    }
});
