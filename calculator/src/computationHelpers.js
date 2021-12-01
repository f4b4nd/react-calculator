const ACTIONS = {
    ADD_DIGIT : 'digit',    
    REMOVE_DIGIT : 'delete',
    EVALUATE : 'evaluate',
    OPERATOR : 'operator',
    CLEAR : 'clear',
}

const evaluate = (prev, curr, operation) => {
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


export {ACTIONS, evaluate}