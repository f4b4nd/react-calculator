interface Evaluate {
    (prev: string, curr: string, operator: string | null) : string | null
}


export const evaluate: Evaluate = (prev, curr, operator) => {

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
    
    return res?.toString() || null

}
