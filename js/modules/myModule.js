const asyncFunction = () => {
  return setTimeout(() => {
    return "This is async information!"
  },3000)
}

const syncFunction = () => {
  return "This is sync function"
}

export { syncFunction, asyncFunction }