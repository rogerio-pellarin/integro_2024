var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
	const mainStack = 4;
    const subStack = 2;
    
    // Agrupar los main stacks
    const stacks = [];
    let tempStack = [];
    for (let i = 0; i < input.length; i++) {
        tempStack.push(input[i]);
        if (tempStack.length === mainStack) {
            stacks.push([...tempStack]);
            tempStack = [];
        }
    }
    if (tempStack.length > 0) {
        stacks.push([...tempStack]);
    }
    
    // Agrupar los sub stacks
    const endStacks = [];
    let tempSubStack = [];
    for (let i = 0; i < stacks.length; i++) {
        for (let j = 0; j < stacks[i].length; j++) {
            tempSubStack.push(stacks[i][j]);
            if (tempSubStack.length === subStack) {
                endStacks.push([...tempSubStack]);
                tempSubStack = [];
            }
        }
    }
    if (tempSubStack.length > 0) {
        endStacks.push([...tempSubStack]);
    }
    
    return endStacks;
}

console.log(apples(input))
