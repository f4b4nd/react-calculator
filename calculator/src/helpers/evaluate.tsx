interface Props {
    (prev: string, curr: string, operator: string): string | null
}


export const evaluate: Props = (prev, curr, operator) => {

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
