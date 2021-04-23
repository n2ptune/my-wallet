const ROUTINE_MAX_LIMIT = 300

const routine = {
  check: true,
  value: [],
  run(): void {
    if (routine.check) {
      routine.value.push(Math.floor(Math.random() * 50000000))
      if (routine.value.length > ROUTINE_MAX_LIMIT) {
        routine.check = false
      }
    } else {
      routine.value.pop()
      if (!routine.value.length) {
        routine.check = true
      }
    }
  }
}

setInterval(() => {
  routine.run()
})

export default routine
