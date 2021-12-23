export const evaluate = (prev, curr, operation) => {

    let res
    const a = parseFloat(prev)
    const b = parseFloat(curr)

    if (operation === "+") {
        res = a + b
    }
    else if (operation === "-") {
        res = a - b
    }
    else if (operation === "*") {
        res = a * b
    }
    else if (operation === "÷") {
        res = a / b
    }
    
    return res

}
