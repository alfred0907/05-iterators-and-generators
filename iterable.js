function createIterable(count) {
  let value = 0
  let value2 = 1
  let nextValue = value + value2
  let counter = 0

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (counter < count) {
            if (counter !== 0) {
              value = value2
              value2 = nextValue
              nextValue = value + value2
            }
            counter += 1
            return { value, done: false }
          }
          return { done: true }
        },
      }
    },
  }
}

const iterable = createIterable(5)

console.log([...iterable])
