/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */

export const arrayTest = [];
const setTestObject = (id, result) => ({
    id,
    result,
});

if (localStorage.getItem('COLOR-BLIND-TEST') !== null) {
    const storage = localStorage.getItem('COLOR-BLIND-TEST');
    const parsed = JSON.parse(storage);
    parsed.forEach((element) => {
        arrayTest.push(element);
    });
}

const Tes = {
    async render() {
        return `

    <div class="containerLoad">
        <div id="loading"></div>

    <div class="title-tes">
        <h2>Halaman Tes</h2>
    </div>
    <div class="qs-all">
        <div class="main-div">
            <div class="inner-div">
                <h2 class="question"></h2>
                <ul class="container-options">
                    <li>
                        <input type="radio" name="answer" id="ans1" class="answer">
                        <label for="ans1" id="option1" class="options">answer</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans2" class="answer">
                        <label for="ans2" id="option2" class="options">answer</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans3" class="answer">
                        <label for="ans3" id="option3" class="options">answer</label>
                    </li>
                    <li>
                    <input type="radio" name="answer" id="ans4" class="answer">
                        <label for="ans4" id="option4" class="options">answer</label>
                    </li>
                </ul>
                <button id="submit" class="text-center submitArea">Submit</button>
                <div id="showScore" class="scoreArea"></div>
            </div class="inner-div">
        </div> 
    </div>
    </div>

    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const quizDB = [{
                question: '<img class="srcImg" src="https://i.ibb.co/MV2bTzr/2.png" alt="Ishihara-01" border="0">',
                a: '25',
                b: '12',
                c: '4',
                d: '2',
                ans: 'ans4',
            },

            {
                question: '<img class="srcImg" src="https://i.ibb.co/L928WxJ/3.png" alt="Ishihara-02" border="0">',
                a: '13',
                b: '3',
                c: '8',
                d: '5',
                ans: 'ans2',
            },

            {
                question: '<img class="srcImg" src="https://i.ibb.co/mbvQyQt/5.png" alt="Ishihara-03" border="0">',
                a: '7',
                b: '3',
                c: '9',
                d: '5',
                ans: 'ans4',
            },

            {
                question: '<img class="srcImg" src="https://i.ibb.co/j47Jx8s/6.png" alt="Ishihara-04" border="0">',
                a: '6',
                b: '7',
                c: '3',
                d: '8',
                ans: 'ans1',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/16Ngt2v/7.png" alt="Ishihara-05" border="0">',
                a: '8',
                b: '4',
                c: '7',
                d: '9',
                ans: 'ans3',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/qDqb6WT/8.png" alt="Ishihara-06" border="0">',
                a: '4',
                b: '9',
                c: '6',
                d: '8',
                ans: 'ans4',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/RpPbDPT/16.png" alt="Ishihara-07" border="0">',
                a: '16',
                b: '61',
                c: '25',
                d: '39',
                ans: 'ans1',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/2Pwyzr6/29.png" alt="Ishihara-08" border="0">',
                a: '29',
                b: '35',
                c: '19',
                d: '52',
                ans: 'ans1',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/TWvyLkV/42.png" alt="Ishihara-09" border="0">',
                a: '76',
                b: '42',
                c: '49',
                d: '55',
                ans: 'ans2',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/6Fwh8QT/45.png" alt="Ishihara-10" border="0">',
                a: '40',
                b: '68',
                c: '45',
                d: '54',
                ans: 'ans3',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/6vgk26F/74.png" alt="Ishihara-11" border="0">',
                a: '57',
                b: '78',
                c: '69',
                d: '74',
                ans: 'ans4',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/BfGW4f6/97.png" alt="Ishihara-12" border="0">',
                a: '97',
                b: '96',
                c: '88',
                d: '87',
                ans: 'ans1',
            },
        ];

        const question = document.querySelector('.question');
        const option1 = document.querySelector('#option1');
        const option2 = document.querySelector('#option2');
        const option3 = document.querySelector('#option3');
        const option4 = document.querySelector('#option4');
        const submit = document.querySelector('#submit');

        const answers = document.querySelectorAll('.answer');
        const showScore = document.querySelector('#showScore');

        let questionCount = 0;
        let score = 0;

        const loadQuestion = () => {
            const questionList = quizDB[questionCount];
            question.innerHTML = questionList.question;

            option1.innerText = questionList.a;
            option2.innerText = questionList.b;
            option3.innerText = questionList.c;
            option4.innerText = questionList.d;
        };

        loadQuestion();

        const getCheckAnswer = () => {
            let answer;

            answers.forEach((curAnsElem) => {
                if (curAnsElem.checked) {
                    answer = curAnsElem.id;
                }
            });
            return answer;
        };

        const deselectAll = () => {
            answers.forEach((curAnsElem) => curAnsElem.checked = false);
        };

        submit.addEventListener('click', () => {
            const checkedAnswer = getCheckAnswer();
            console.log(checkedAnswer);

            if (checkedAnswer == quizDB[questionCount].ans) {
                score++;
            }
            questionCount++;
            deselectAll();

            if (questionCount < quizDB.length) {
                loadQuestion();
            } else {
                showScore.innerHTML = `
                <h3>Nilai Mu : ${score}/${quizDB.length}</h3>
                <div class="button text-center">
                    <button class="btn" onclick="location.reload()">Tes Lagi</button>
                    <a href="#/riwayat" class="btn btn-primary">Riwayat</a>
                </div>
                `;

                // menyimpan data hasil test ke local storage
                const id = new Date();
                const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
                const datetime = `${days[id.getDay()]},${id.getDate()}-${id.getMonth() + 1}-${id.getFullYear()}`;
                const testObject = setTestObject(datetime, score);
                arrayTest.push(testObject);

                localStorage.setItem('COLOR-BLIND-TEST', JSON.stringify(arrayTest));
                // end

                showScore.classList.remove('scoreArea');
            }
        });
    },
};

export default Tes;