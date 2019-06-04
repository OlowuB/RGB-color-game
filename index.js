window, setTimeout(() => {
    "use strict"

    let colors=[]; 
    let numSquares=6;
    let pickedColor;
    let squares=document.querySelectorAll(".square");
    let displayMsg=document.querySelector("#message");
    let colorDisplay=document.querySelector("#colorDisplay");
    let h1=document.querySelector("h1");
    let resetbtn=document.querySelector("#reset");
    let modebtns=document.querySelectorAll(".mode");

    init();

    function init(){
        setupModeButtons();
        setupSquares();
        reset();
    }

    function setupSquares(){

        for (let i=0;i< squares.length; i++){ 
        

            squares[i].addEventListener("click",function() {
                let clickedColor=this.style.backgroundColor;

                if (clickedColor === pickedColor){
                    displayMsg.textContent="Correct";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                    resetbtn.textContent = "Play again?";
                } else{
                    this.style.backgroundColor = "#232323";
                    displayMsg.textContent = "Try again";
                }
            });
        }
            
    }

    function setupModeButtons(){
        for (let i = 0; i < modebtns.length; i++) {
            modebtns[i].addEventListener("click", function () {
                modebtns[0].classList.remove("selected");
                modebtns[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
                reset();
            });
        }
    }


    function reset(){
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        resetbtn.textContent = "New Colors" 
        message.textContent = "";

        for (let i = 0; i < squares.length; i++) {
            if(colors[i]){
                squares[i].style.display="block";
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.display="none";

            }
        }
        h1.style.backgroundColor = "steelblue";
    }

    
    resetbtn.addEventListener("click", function (){
        reset();
    });

    function changeColors(color) {
        for(let i=0; i<squares.length;i++){
            squares[i].style.backgroundColor=color;
        }
    }

    function pickColor(){
        let random=Math.floor(Math.random()*colors.length); 
        return colors[random];
    }

    function generateRandomColors(num){
        let arr=[];
        for (let i=0; i<num; i++){
            arr.push(randomColor());
        }
        return arr;
    }

    function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }



}, 500);