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

            <h4 class="text-center mt-5">Halaman Test</h4>
            <hr class="border border-secondary opacity-90 w-75 mx-auto">

    <!-- instruksi --> 
    <div class="card text-center w-75 mx-auto mb-5 mt-5">
        <div class="card-header fw-bold">
            Warning!
        </div>
        <div class="card-body">
            <p class="card-text">Seperti test buta warna lain nya, tidak disarankan untuk mengikuti test menggunakan kacamata dengan lensa berwarna apapun. Oleh karena itu, pastikan untuk memperhatikan hal berikut sebelum mengikuti tes :</p>
            <ol class="list-group list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Tidak menggunakan kaca mata dengan lensa berwarna</div>
                        Tes ini disarankan untuk dilakukan dengan mata telanjang atau apabila menggunakan kacamata maka pakailah kaca mata dengan lensa tanpa warna (bening). Hal tersebut dilakukan dengan tujuan untuk menghasilkan hasil yang lebih akurat dan tidak terjadi kesalah pahaman dalam mengikuti tes.
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Ubah tingkat kecerahan di layar anda menjadi tinggi</div>
                        Kecerahan pada layar mempengaruhi warna dan kemampuan untuk melihat diferensiasi, sehingga disarankan untuk meningkatkan tingkat kecerahan pada layar monitor atau ponsel anda.
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Jarak pandang layar maksimal 1 meter</div>
                        Untuk hasil yang akurat posisikan layar dengan mata pada jarak maksimal 1 meter dari tempat duduk dengan layar monitor/ponsel dan kondisikan ruangan dengan cahaya yang cukup.
                    </div>
                </li>
            </ol>
        </div>
        <div class="card-footer text-muted">
            Test dibawah ini
        </div>
    </div>
    <!--end-->

    <div class="containerLoad">
    <div id="loading"></div>
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
                <button id="submit" class="text-center mx-auto submitArea mb-5 mt-5 ps-5 pe-5">Submit</button>
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
            {
                question: '<img class="srcImg" src="https://i.ibb.co/bsQGR94/69.png" alt="Ishihara-13" border="0">',
                a: '10',
                b: '88',
                c: '69',
                d: '87',
                ans: 'ans3',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/SsKQnqk/27.png" alt="Ishihara-14" border="0">',
                a: '27',
                b: '29',
                c: '2',
                d: '3',
                ans: 'ans1',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/2MHmJ8d/13.png" alt="Ishihara-15" border="0">',
                a: '22',
                b: '13',
                c: '23',
                d: '43',
                ans: 'ans2',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/3yLBVHt/28.png" alt="Ishihara-16" border="0">',
                a: '78',
                b: '30',
                c: '70',
                d: '28',
                ans: 'ans4',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/khWgfWx/11.png" alt="Ishihara-17" border="0">',
                a: '71',
                b: '11',
                c: '17',
                d: '77',
                ans: 'ans2',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/yVwrnzR/73.png" alt="Ishihara-18" border="0">',
                a: '29',
                b: '72',
                c: '23',
                d: '73',
                ans: 'ans4',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/wBSMH6q/96.png" alt="Ishihara-19" border="0">',
                a: '97',
                b: '96',
                c: '88',
                d: '87',
                ans: 'ans2',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/g4641L9/57.png" alt="Ishihara-20" border="0">',
                a: '57',
                b: '5',
                c: '24',
                d: '87',
                ans: 'ans1',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/SVmyMFC/35.png" alt="Ishihara-21" border="0">',
                a: '39',
                b: '30',
                c: '35',
                d: '3',
                ans: 'ans3',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/gTrhfR3/26.png" alt="Ishihara-22" border="0">',
                a: '28',
                b: '26',
                c: '29',
                d: '21',
                ans: 'ans2',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/7bBBHvB/15.png" alt="Ishihara-23" border="0">',
                a: '45',
                b: '40',
                c: '75',
                d: '15',
                ans: 'ans4',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/j5ZpBHt/12.png" alt="Ishihara-24" border="0">',
                a: '12',
                b: '13',
                c: '19',
                d: '15',
                ans: 'ans1',
            },
            {
                question: '<img class="srcImg" src="https://i.ibb.co/x2k1FbL/9.png" alt="Ishihara-25" border="0">',
                a: '0',
                b: '1',
                c: '9',
                d: '19',
                ans: 'ans3',
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
                <h4 class="text-center">Anda telah menjawab benar ${score} dari ${quizDB.length} soal</h4>
                <div class="button text-center">
                    <button class="btn text-center ps-5 pe-5" onclick="location.reload()">Tes Lagi</button>
                    <a href="#/riwayat" class="btn btn-primary ps-5 pe-5">Riwayat</a>
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