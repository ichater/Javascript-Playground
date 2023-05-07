function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
}

const generatorObject = simpleGenerator()


// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())

function* generateId() {
    let id = 1

    // normally an infinite while loop is now acceptable
    while (true) {
        yield id
        id++
    }
}

const id = generateId()

// console.log(id.next().value)
// console.log(id.next().value)
// console.log(id.next().value)
