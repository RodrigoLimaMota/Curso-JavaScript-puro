const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
    let score = 0
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((answer,index) => {
        if (answer === correctAnswers[index]) {
            score += 25
        }
    })
    result.textContent = `Resuldado: ${score}%`
})