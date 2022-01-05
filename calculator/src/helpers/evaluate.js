export const evaluate = (prev, curr, operator) => {

    let res
    const a = parseFloat(prev)
    const b = parseFloat(curr)

    if (operator === "+") {
        res = a + b
    }
    else if (operator === "-") {
        res = a - b
    }
    else if (operator === "*") {
        res = a * b
    }
    else if (operator === "÷") {
        res = a / b
    }
    
    return res

}
