const elements  = document.querySelectorAll('.container .card');
const scores    = document.querySelectorAll(".score span");
const ender = document.querySelector('.end');
const input = document.querySelector('.round input');
let rows = [[],[],[]];
let columns = [[],[],[]];
let crossRow = [];
let statement = true;
let stateText = false;
let scoreX = 0;
let scoreO = 0;


Array.from(elements).forEach((ele,index) =>{
    ele.addEventListener('click',(e) => {
        const row = parseInt(ele.getAttribute('row'));
        const column = parseInt(ele.getAttribute('column'));

        if(statement){
            if(e.target.innerText == ''){
                stateText ? e.target.innerText = 'X':e.target.innerText ='O';
                stateText = !stateText;
                Player(row,column,e);
                Test();
                controlls.Sounder(e);
            }
        }
    });
})    

function Player(row,column,e){
    
        const main_cross = elements[4].innerText;
        const cross_1 = elements[0].innerText;
        const cross_2 = elements[2].innerText;
        const cross_3 = elements[6].innerText;
        const cross_4 = elements[8].innerText;

        rows[row].push(e.target.innerText);
        columns[column].push(e.target.innerText);


        if(main_cross != ''){
            if(main_cross == cross_1 && main_cross == cross_4){
                End(main_cross);
            }else if(main_cross == cross_2 && main_cross == cross_3){
                End(main_cross);
            }
        }

        if(rows[0] != ''){
            if(rows[0][0] == rows[0][1] && rows[0][1] == rows[0][2]){
                End(rows[0][0]);
            }
        }
        if(rows[1] != ''){
            if(rows[1][0] == rows[1][1] && rows[1][1] == rows[1][2]){
                End(rows[1][0]);
            }
        }
        if(rows[2] != ''){
            if(rows[2][0] == rows[2][1] && rows[2][1] == rows[2][2]){
               End(rows[2][0]); 
            }
        }
        
        if(columns[0] != ''){
            if(columns[0][0] == columns[0][1] && columns[0][1] == columns[0][2]){
                End(columns[0][0]);
            }
        }
        if(columns[1] != ''){
            if(columns[1][0] == columns[1][1] && columns[1][1] == columns[1][2]){
                End(columns[1][0]);
            }
        }
        if(columns[2] != ''){
            if(columns[2][0] == columns[2][1] && columns[2][1] == columns[2][2]){
                End(columns[2][0]);
            }
        }

        if(rows[0].length == 3 && rows[1].length == 3 && rows[2].length == 3){
            End('No winner');
        }

}

function End(winner){
  statement = false;
   if(winner){
       setTimeout(() => {
        elements.forEach(ele => {
            ele.innerText = '';
        })
        statement = true;
       },1000)
       if(winner == 'X'){
            scores[0].innerHTML =`X : ${++scoreX}`;
        }else if(winner == 'O'){
            scores[1].innerHTML =`O : ${++scoreO}`;
        }
        document.querySelector('.winner').innerText = `Player ${winner} Won`;
        if(scoreO == input.value && rows[0].length > 0 || scoreX == input.value && rows[0].length > 0){
            setTimeout(() => {
                ender.classList.add("active");
            },1000)
            controlls.EndSound();
        }
    }
    rows = [[],[],[]];
    columns = [[],[],[]];
    crossRow = [];
}

function Test(e){
    if(e){
        if(e.target.value > parseInt(e.target.getAttribute('max'))){
            e.target.value ='';
        }
        if(e.target.value < parseInt(e.target.getAttribute('min'))){
            e.target.value = '';
        }
    }
}

document.querySelector('.tryer').addEventListener("click",() =>{
    scoreO = 0;
    scoreX = 0;
    ender.classList.remove("active");
    scores[0].innerHTML =`X : ${0}`;
    scores[1].innerHTML =`O : ${0}`;
    controlls.MainSound();
})
input.addEventListener('input',Test,false);
