const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

// A idéia seria introduzir esses elementos abaixo da resposta correta
const answerQuestions = [
    answerQuestion01 = document.createElement('p'),
    answerQuestion02 = document.createElement('p'),
    answerQuestion03 = document.createElement('p'),
    answerQuestion04 = document.createElement('p'),
    answerQuestion05 = document.createElement('p'),
    answerQuestion06 = document.createElement('p'),
    answerQuestion07 = document.createElement('p'),
    answerQuestion08 = document.createElement('p'),
    answerQuestion09 = document.createElement('p'),
    answerQuestion10 = document.createElement('p')
]

// Respostas corretas
const correctAnswers = ['B', 'C', 'C', 'A', 'E', 'B', 'B', 'C', 'D', 'A']

//basicamente o código que você ensinou
form.addEventListener('submit', event => {
    let score = 0
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value,
        form.inputQuestion9.value,
        form.inputQuestion10.value
    ]
    
    //Esse vetor seria as referências das respostas corretas 
    const correctAnswerOfQuestions = [
        document.querySelector('#correctAnswerQuestion01'),
        document.querySelector('#correctAnswerQuestion02'),
        document.querySelector('#correctAnswerQuestion03'),
        document.querySelector('#correctAnswerQuestion04'),
        document.querySelector('#correctAnswerQuestion05'),
        document.querySelector('#correctAnswerQuestion06'),
        document.querySelector('#correctAnswerQuestion07'),
        document.querySelector('#correctAnswerQuestion08'),
        document.querySelector('#correctAnswerQuestion09'),
        document.querySelector('#correctAnswerQuestion10')
    ]

    const answersText = [
     `
     Alternativa b: Entre 4 a 6 litros. São retirados 450 mililitros.    
     A quantidade de sangue varia de pessoa para pessoa. O volume de sangue é entre 7% e 8% o peso corporal. Assim, um adulto com 50 e 80 quilos, pode ter entre 4 e 6 litros de sangue, respectivamente.
     Portanto, 4 a 6 litros é a alternativa que compreende a quantidade mais próxima de adultos com pesos diferentes.
     `,
     `
     Alternativa c: Descartes.     
     “Je pense, donc je suis” é a frase original, escrita em francês, do filósofo René Descartes (1596-1650). Ela resume o pensamento e o método de Descartes, para quem tudo tem início na dúvida.
     `,
      `
      Alternativa c: Brasil.      
      Francisco Canhos é o nome do homem que, na década de 40, desenvolveu o primeiro chuveiro elétrico seguro em Jaú-SP. O aparelho vinha sendo desenvolvido desde os anos 30, mas apresentava riscos de curto-circuito.
      `,
      `
      Alternativa a: Vaticano e Rússia.      
      O Vaticano, sede da igreja católica, tem apenas 44 hectares (0,44 km2). A Rússia, localizada em dois continentes (Ásia e Europa), tem 17 milhões de km2.
      `,
      `
      Alternativa e: João Goulart.
      João Belchior Marques Goulart (1919-1976) foi o 24º presidente do Brasil, cujo período de governo compreende os anos de 1961 a 1964.
      `,
      `
      Alternativa b: Asterisco, beneficente, meteorologia, entretido.
      Estas palavras são exemplos de barbarismo, um vício de linguagem em que as palavras são pronunciadas ou escritas incorretamente.
      `,
      `
      Alternativa b: Dom Quixote.
      Dom Quixote, de Miguel de Cervantes, é um clássico da literatura espanhola. A obra foi escrita em duas partes, uma em 1605, e a outra em 1615.
      `,
      `
      Alternativa c: Infinitas.
      Ao longo dos tempos, vários estudiosos têm se dedicado a calcular o número pi e já chegaram ao número de 5 bilhões de casas.
      `,
      `
      Alternativa d: 118.
      Os últimos elementos foram adicionados à tabela periódica em 2016. Eles são: 113 (Nihônio), 115 (Moscóvio), 117 (Tenessino) e 118 (Oganessônio).
      `,
      `
      Alternativa a: Japão e Serra Leoa.
      No Japão, a expectativa de vida é em média 84 anos, enquanto na Serra Leoa é 53 anos.
      `
    ] 

    //minha lógica seria inserir os paragrafos através do método "insertAdjacenteElement()"
    userAnswers.forEach((userAnswer, index) => {
        answerQuestions[index].textContent = answersText[index]

        if (userAnswer === correctAnswers[index]) {

            answerQuestions[index].setAttribute('class', 'correctAnswer')            
            correctAnswerOfQuestions[index].insertAdjacentElement('afterend', answerQuestions[index])
            userAnswer.classList.add('correctAnswer')
            score += 25
            return
        }
        answerQuestions[index].setAttribute('class', 'wrongAnswer')        
        correctAnswerOfQuestions[index].insertAdjacentElement('afterend', answerQuestions[index])
        userAnswer.classList.add('wrongAnswer')      
    })
    result.textContent = `Resuldado: ${score}%`
})