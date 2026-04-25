let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.button'));
buttons.map((button) =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case "AC":
                display.innerText = '0';
                break;
                case "=":
                    try{
                        display.innerText = eval(display.innerText);
                    }
                    catch (e){
                        display.innerText = 'Error';
                    }
                    break;
                    case "%":
                       let passedText = display.innerText + "/100";
                       display.innerText = eval(passedText);
                       break;
                       case "+/-":
                        display.innerText = '-';
                        break;
            default:
            if (display.innerText === '0' && e.target.innerText !== '.'){
                display.innerText =e.target.innerText;
             } else{
                display.innerText += e.target.innerText;
            }
        }
    });
});
let changerColor = document.querySelector('.changer');
let darkgrays = Array.from(document.querySelectorAll('.darkgray'));
let oranges = Array.from(document.querySelectorAll('.orange'));
changerColor.addEventListener('click', () =>{
        changerColor.style.background='linear-gradient( to right, blue 0%, purple 100%)';
        changerColor.style.color ='white';
        darkgrays.forEach(el  =>{
            el.style.backgroundColor ='purple';
        });
        oranges.forEach(el  =>{
            el.style.backgroundColor = 'blue';
        });       
        document.body.style.background = 'linear-gradient( to right, blue 0%, purple 100%)';
});
changerColor.addEventListener('dblclick', () =>{
        changerColor.style.background='linear-gradient( to right, aqua 0%, brown 100%)';
        changerColor.style.color ='white';
        darkgrays.forEach(el  =>{
            el.style.backgroundColor ='brown';
        });
        oranges.forEach(el  =>{
            el.style.backgroundColor = 'aqua';
        });       
        document.body.style.background = 'linear-gradient( to right, aqua 0%, brown 100%)';
});