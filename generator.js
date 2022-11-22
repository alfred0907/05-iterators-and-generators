function createGenerator(count) {
  return function* generatorFunction() {
    let value = 0
    let value2 = 1
    let nextValue = value + value2
    let counter = 0

    while (counter < count) {
      yield value
      value = value2
      value2 = nextValue
      nextValue = value + value2
      counter += 1
    }
  }
}

const generatorFunction = createGenerator(5)

console.log([...generatorFunction()])
