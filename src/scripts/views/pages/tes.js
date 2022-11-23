const Tes = {
    async render() {
        return `
        <style>
        #test h2{
            text-align: center;
        }
        .containerQ{
            background-color: #3A4750;
            color: #ddd;
            border-radius: 10px;
            padding: 20px;
            font-family: 'Montserrat', sans-serif;
            max-width: 700px;
        }
        .containerQ > p{
            font-size: 32px;
        }
        .question{
            width: 75%;
        }
        .options{
            position: relative;
            padding-left: 40px;
        }
        #options label{
            display: block;
            margin-bottom: 15px;
            font-size: 14px;
            cursor: pointer;
        }
        .options input{
            opacity: 0;
        }
        .checkmark {
            position: absolute;
            top: -1px;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #3A4750;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
        .options input:checked ~ .checkmark:after {
            display: block;
        }
        .options .checkmark:after{
            content: "";
            width: 10px;
            height: 10px;
            display: block;
            background: white;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%,-50%) scale(0);
            transition: 300ms ease-in-out 0s;
        }
        .options input[type="radio"]:checked ~ .checkmark{
            background: #EA9215;
            transition: 300ms ease-in-out 0s;
        }
        .options input[type="radio"]:checked ~ .checkmark:after{
            transform: translate(-50%,-50%) scale(1);
        }
        .btn-primary{
            background-color: #3A4750;
            color: #ddd;
            border: 1px solid #ddd;
        }
        .btn-primary:hover{
            background-color: #EA9215;
            border: 1px solid #EA9215;
        }
        .btn-success{
            margin-left: 4px;
            padding: 5px 25px;
            background-color: #EA9215;
            border: 1px solid #ddd;
        }
        .btn-success:hover{
            background-color: #303841;
            border: 1px solid #303841;
            border: 1px solid #ddd;
        }
        @media(max-width:576px){
            .question{
                width: 100%;
                word-spacing: 2px;
            } 
        }
        </style>
        <div id="test" class="container mt-5 ">
            <h2>Halaman Tes</h2>
        <div class="container row justify-content-center">
            <div class="containerQ mt-sm-5 my-1 col-9">
                <div class="question ml-sm-5 pl-sm-5 pt-2">
                    <div class="py-2 h5"><a href="https://imgbb.com/"><img src="https://i.ibb.co/xMd76P5/12.png" alt="12" border="0"></a></div>
                    <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                        <label class="options">34
                            <input type="radio" name="radio" id="ans1" class="answer">
                            <span class="checkmark"></span>
                        </label>
                        <label class="options">17
                            <input type="radio" name="radio" id="ans2" class="answer">
                            <span class="checkmark"></span>
                        </label>
                        <label class="options">8
                            <input type="radio" name="radio" id="ans3" class="answer">
                            <span class="checkmark"></span>
                        </label>
                        <label class="options">5
                            <input type="radio" name="radio" id="ans4" class="answer">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="d-flex align-items-center pt-3">
                    <div id="prev">
                        <button class="btn btn-primary">Previous</button>
                    </div>
                    <div class="ml-auto mr-sm-5">
                        <button class="btn btn-success">Next</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Tes;