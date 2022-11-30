/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
const Tes = {
    async render() {
        return `
    <style>
    .question{
        color:#303841;
    }
    .qs-all{
        display: flex;
        color: #303841;
        justify-content: center;
        margin-bottom: 200px;
        margin-left: 100px;
        margin-right: 100px;
    }
    .title-tes{
        text-align: center;
        margin: 50px;
    }
    .main-div{
        background-color: #3A4750;
        color: #ddd;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
        width: 700px;
    }
    .inner-div{
        background-color: #3A4750;
        border-radius: 1rem;
    }
    .inner-div h2{
        text-align:center;
        font-size: 3.5rem;
        font-weight: 400;
    }

    .inner-div li{
        font-size: 20px;
        margin-top: 1.5rem;
        list-style: none;
    }
    .inner-div ul{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    input {
        cursor: pointer;
    }

    #submit , .btn{
        outline: none;
        font-size: 2rem;
        display: block;
        margin: auto;
        border: none;
        border-radius: 10px;
        text-transform: uppercase;
        color: #fefefe;
        background-color: #303841;
        margin-top: 4rem;
    }

    #submit:hover {
        background-color: #EA9215;
        transition: 300ms ease-in-out 0s;
    }

    #showScore{
        margin-top: 3rem;
        padding: 3rem 4rem;
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    }

    #showScore h3{
        font-size: 3rem;
        text-align: center;
    }


    #showScore .btn{
        margin-top: 2rem;
        background-color: #303841;
        color: black;
    }

    #showScore .btn:hover{
    
        background-color: #3A4750;
        color: white;
    }

    .scoreArea{
        display: none;
    }


    @media screen and (min-width: 300px) {
        .srcImg{
            width: 350px;
            margin-left: 10px;
        }
        .inner-div{
            width: auto;
            border-radius: 1rem;
            box-shadow: 0 1rem -0.7rem rgba(0, 0, 0, 0.4);
        }
        #submit , .btn{
            padding: 10px;
            outline: none;
            font-size: 1rem;
            display: block;
            margin: 10px;
            border: none;
            text-transform: uppercase;
            color: #fefefe;
            background-color: #303841;
        }
        .qs-all{
            margin-bottom: 200px;
            margin-left: 20px;
            margin-right: 20px;
        }
    }

    @media screen and (max-width: 759px) {
        .inner-div{
            width: auto;
            border-radius: 1rem;
            box-shadow: 0 1rem -0.7rem rgba(0, 0, 0, 0.4);
        }
    }
    </style>
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
                <button id="submit" class="submitArea">Submit</button>
                <div id="showScore" class="scoreArea"></div>
            </div class="inner-div">
        </div> 
    </div>
    </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const quizDB = [
            {
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
                <button class"btn" onclick="location.reload()">Tes Lagi</button>
        
                `;
                showScore.classList.remove('scoreArea');
            }
        });
    },
};

export default Tes;

        // <style>
        // #test h2{
        //     text-align: center;
        // }
        // .containerQ{
        //     background-color: #3A4750;
        //     color: #ddd;
        //     border-radius: 10px;
        //     padding: 20px;
        //     font-family: 'Montserrat', sans-serif;
        //     max-width: 700px;
        // }
        // .containerQ > p{
        //     font-size: 32px;
        // }
        // .question{
        //     width: 75%;
        // }
        // .options{
        //     position: relative;
        //     padding-left: 40px;
        // }
        // #options label{
        //     display: block;
        //     margin-bottom: 15px;
        //     font-size: 14px;
        //     cursor: pointer;
        // }
        // .options input{
        //     opacity: 0;
        // }
        // .checkmark {
        //     position: absolute;
        //     top: -1px;
        //     left: 0;
        //     height: 25px;
        //     width: 25px;
        //     background-color: #3A4750;
        //     border: 1px solid #ddd;
        //     border-radius: 50%;
        // }
        // .options input:checked ~ .checkmark:after {
        //     display: block;
        // }
        // .options .checkmark:after{
        //     content: "";
        //     width: 10px;
        //     height: 10px;
        //     display: block;
        //     background: white;
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     border-radius: 50%;
        //     transform: translate(-50%,-50%) scale(0);
        //     transition: 300ms ease-in-out 0s;
        // }
        // .options input[type="radio"]:checked ~ .checkmark{
        //     background: #EA9215;
        //     transition: 300ms ease-in-out 0s;
        // }
        // .options input[type="radio"]:checked ~ .checkmark:after{
        //     transform: translate(-50%,-50%) scale(1);
        // }
        // .btn-primary{
        //     background-color: #3A4750;
        //     color: #ddd;
        //     border: 1px solid #ddd;
        // }
        // .btn-primary:hover{
        //     background-color: #EA9215;
        //     border: 1px solid #EA9215;
        // }
        // .btn-success{
        //     margin-left: 4px;
        //     padding: 5px 25px;
        //     background-color: #EA9215;
        //     border: 1px solid #ddd;
        // }
        // .btn-success:hover{
        //     background-color: #303841;
        //     border: 1px solid #303841;
        //     border: 1px solid #ddd;
        // }
        // @media(max-width:576px){
        //     .question{
        //         width: 100%;
        //         word-spacing: 2px;
        //     }
        // }
        // </style>
        // <div id="test" class="container mt-5 ">
        //     <h2>Halaman Tes</h2>
        // <div class="container row justify-content-center">
        //     <div class="containerQ mt-sm-5 my-1 col-9">
        //         <div class="question ml-sm-5 pl-sm-5 pt-2">
        //             <div class="py-2 h5"><a href="https://imgbb.com/"><img src="https://i.ibb.co/xMd76P5/12.png" alt="12" border="0"></a></div>
        //             <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
        //                 <label class="options">34
        //                     <input type="radio" name="radio" id="ans1" class="answer">
        //                     <span class="checkmark"></span>
        //                 </label>
        //                 <label class="options">17
        //                     <input type="radio" name="radio" id="ans2" class="answer">
        //                     <span class="checkmark"></span>
        //                 </label>
        //                 <label class="options">8
        //                     <input type="radio" name="radio" id="ans3" class="answer">
        //                     <span class="checkmark"></span>
        //                 </label>
        //                 <label class="options">5
        //                     <input type="radio" name="radio" id="ans4" class="answer">
        //                     <span class="checkmark"></span>
        //                 </label>
        //             </div>
        //         </div>
        //         <div class="d-flex align-items-center pt-3">
        //             <div id="prev">
        //                 <button class="btn btn-primary">Previous</button>
        //             </div>
        //             <div class="ml-auto mr-sm-5">
        //                 <button class="btn btn-success">Next</button>
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>