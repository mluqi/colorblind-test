const quizDB = [
    {
       question: "Soal no 1",
        a: "25",
        b: "12",
        c:"4",
        d:"9",
        ans: "ans4"
    },

    {
        question: "Soal no 2",
        a: "13",
        b: "7",
        c:"2",
        d:"5",
        ans: "ans2"
    },

    {
        question: "Soal no 3",
        a: "10",
        b: "4",
        c:"1",
        d:"7",
        ans: "ans3"
    },

    {
        question: "Soal no 4",
        a: "8",
        b: "0",
        c:"6",
        d:"9",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount= 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>Nilai Mu adalah : ${score}/${quizDB.length}</h3>
        <button class"btn" onclick="location.reload()">Tes Lagi</button>

        `;
        showScore.classList.remove('scoreArea');
    }
});