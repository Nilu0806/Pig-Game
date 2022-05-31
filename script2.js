//SECTION : 3

//PIG GAME:

//HOW TO CREATE OUR FUNDAMENTAL GAME VARIABLES AND IMPLEMENT THEM AS THE GAME RULES:

//VARIABLE DECLERATION:
var scores,currentScore,dice,activePlayer,name1,name2,complete,gamePoint;

//VARIABLE INITIALIZATION:
/*
scores=[0,0];
activePlayer=0;
currentScore=0;
name1=prompt("ENTER PLAYER1 NAME:");
name2=prompt("ENTER PLAYER2 NAME:");
*/
new_game();

//CREATING FUNCTION FOR NEW GAME INITIALIZED WITH ALL THE VARIABLES TO START:
function new_game()
{
complete=false;
scores=[0,0];
activePlayer=0;
currentScore=0;
gamePoint=50;

alert("YOUR INITIAL GAMEPOINT IS: "+gamePoint);
document.getElementById('point').value=gamePoint;//50

name1=prompt("ENTER PLAYER1 NAME:");
name2=prompt("ENTER PLAYER2 NAME:");
if (name1==='') {name1="PLAYER1";}
if (name2==='') {name2="PLAYER2";}

document.getElementById('p1_current').textContent='0';
document.getElementById("p2_current").textContent='0';
document.getElementById("p1_total").textContent='0';
document.getElementById("p2_total").textContent='0';

document.getElementById('p1_name').textContent=name1;
document.getElementById('p2_name').textContent=name2;
document.querySelector('.p2_panel').classList.remove('active');
document.querySelector('.p1_panel').classList.remove('active');
document.querySelector('.p1_panel').classList.add('active');
}

//SET UP AN EVENT HANDLER FOR .button_gamepoint:
document.querySelector('.button_gamepoint').addEventListener('click',function(){
gamePoint=document.getElementById('point').value;
alert("YOU SET YOUR GAMEPOINT ON: "+gamePoint);
console.log(gamePoint);
});

//SET UP AN EVENT HANDLER FOR .button_roll:
document.querySelector('.button_roll').addEventListener('click',function(){

//CONTINUE THE GAME[BECAUSE WE DID NOT GET THE WINNER => complete=false;]:
if(!complete)
{
//1.RANDOM NUMBER:
dice=Math.ceil(Math.random()*6);
console.log(dice);

//2.DISPLAY THE DICE AND RESULTS:
//VISIBLE ONLY THE RECENT DICE:
var SameAndPortable=document.querySelector('#dice'+dice);
SameAndPortable.className='dice_visibality';
//HIDE ALL THE DICES EXEPT RECENT DICE:
for(var i=1;i<=(6-dice);i++)
{
document.querySelector('#dice'+(dice+i)).className='dice';
}

//3.UPDATE THE SCORE ONLY WHEN THE RANDOM NUMBER IS NOT A 1:
if(dice!==1)
{
//ADD SCORE AND IMPLIMENT CURRENT SCORE:
currentScore+=dice;

//DISPLAY CURRENT SCORE:
document.querySelector('#p'+(activePlayer+1)+'_current').textContent=currentScore;
}

//4.CHANGE THE PLAYER WHEN RANDOM NUMBER IS 1:
else
{
//INITIALIZE CURRENT NUMBER WITH 0:
currentScore=0;

//DISPLAY THE CURRENT SCORE OF ACTIVE PLAYER WITH 0:
document.querySelector('#p'+(activePlayer+1)+'_current').textContent='0';

//REMOVE .active FROM THE UNACTIVE PLAYER PANNEL:
document.querySelector('.p'+(activePlayer+1)+'_panel').classList.remove('active');

//CHANGE PLAYER:
activePlayer===0?activePlayer=1:activePlayer=0;

//ADD .active TO THE ACTIVE PLAYER PANNEL:
document.querySelector('.p'+(activePlayer+1)+'_panel').classList.add('active');
}
}

//STARTING NEW GAME[BECAUSE WE GOT THE WINNER => complete=true;]:
else
{
    alert("NEW GAME STARTED:");
	new_game();
}
});

//SET UP AN EVENT HANDLER FOR .button_hold:
document.querySelector('.button_hold').addEventListener('click',function(){

//DISPLAY CURRENT SCORE OF ACTIVE PLAYER WITH 0:
document.querySelector('#p'+(activePlayer+1)+'_current').textContent='0';

//ADD CURRENT SCORE OF THE ACTIVE PLAYER TO TOTAL SCORE OF THE ACTIVE PLAYER:
scores[activePlayer]+=currentScore;

//DISPLAY THE TOTAL SCORE OF THE ACTIVE PLAYER:
document.getElementById('p'+(activePlayer+1)+'_total').textContent=scores[activePlayer];

//CHECK IF ANY PLAYER WON THE GAME:
if(scores[activePlayer]>=gamePoint)
{
//DISPLAY THE WINNER:
if(!complete)
{
	if(activePlayer===0)
	{
	alert(name1+' IS THE WINNER!');
	document.querySelector('#p'+(activePlayer+1)+'_name').textContent='WINNER';
    }
    else
    {
	alert(name2+' IS THE WINNER!');
	document.querySelector('#p'+(activePlayer+1)+'_name').textContent='WINNER';
    }
}

//START NEW GAME:
else
{
	alert("NEW GAME STARTED:");
	new_game();
}

//WE GOT THE WINNER. SO, INITIALIZE THE complete VARIABLE WITH true VALUE:
//IF, ANY ONE WON THE GAME. THEN, complete=false; => complete=true;
complete=true;
}

else
{
//CHANGE PLAYER:
activePlayer===0?activePlayer=1:activePlayer=0;
//INITIALIZE CURRENT NUMBER WITH 0:
currentScore=0;
//TOGGLE THE .active FROM ACTIVE PLAYER TO UNACTIVE PLAYER:
document.querySelector('.p1_panel').classList.toggle('active');
document.querySelector('.p2_panel').classList.toggle('active');
}
});

//SET UP AN EVENT HANDLER FOR .button_new:
document.querySelector('.button_new').addEventListener('click',new_game);

//LEARNING JAVASCRIPT DOM ACCESSING:

//HOW TO GENERATE A RANDOM NUMBER:
/*dice=Math.ceil(Math.random()*6);*/
/*console.log(dice);*/
//Math.floor(7.5) => 7
//Math.ceil(7.5) => 8

//HOW TO MANIPULATE THE DOM:
//.querySelector('selector[like, (id=>#id), (class=>.class), (tag-name=>tag-name)]') => IT SELECTS THE SELECTOR TO MANIPULATE THE SELECTOR PROPERTIES.
//.textContent="ENTER YOUR TEXT HERE"; => IT CHANGES THE THE TEXT IN THE SELECTOR.

//document.querySelector('#p1_current').textContent=dice;
//                    ||
//                    \/
//document.querySelector('#p'+(activePlayer+1)+'_current').textContent=dice;
//.textContent =>IT DOES NOT CREATE ANY HTML. IT JUST ENTER THE PLAIN TEXT.
//TO ENTER HTML WE USE=> .innerHTML='tag-start'+'strings/variables'+'tag-end'; 
//                    ||
//                    \/
/*
document.querySelector('#p'+(activePlayer+1)+'_current').innerHTML='<b>'+dice+'</b>';
*/

//HOW TO READ FROM THE DOM:
/*var read=document.querySelector('#p'+(activePlayer+1)+'_current').textContent;
console.log(read);
*/

//HOW TO CHANGE CSS STYLES:
//CSS - STYLE USING .style-ATTRIBUTE:
//document.querySelector('#dice'+dice).style.display='all';
//CSS - STYLES USING .class-SELECTOR:
/*document.querySelector('#dice'+dice).className='dice_visibality';*/

//ANOTHER WAY TO SELECT ELEMENTS BY ID:
//.getElementById('ID') =>IT ONLY USE id-SELECTORS AND IT IS FASTER THAN querySelector.
/*document.getElementById('p1_current').textContent='0';
document.getElementById("p2_current").textContent='0';
document.getElementById("p1_total").textContent='0';
document.getElementById("p2_total").textContent='0';*/

//HOW TO SET UP AN EVENT HANDLER:
//WHAT A CALLBACK FUNCTION IS:
//WHAT AN ANONYMOUS FUNCTION(A function which have no name) IS:
//HOW TO CHANGE THE IMAGE IN AN <img> ELEMENT:(here, the dice images.)
/*
function roll()
{
//CODE;
}
//.addEventListener('event','listener[i.e. function]');
document.querySelector('.button_roll').addEventListener('click',roll);//HERE, ROLL VALUE IS CALL BY VALUE.
//EVENT: click
//EVENT LISTENER: roll()
*/
//                         ||
//                         \/
//WE CAN DO SIMILAR DIRECTLY:(using anonymous function: we use it when the event listener is unique. here, it is perfect.)
/*document.querySelector('.button_roll').addEventListener('click',function(){
//CODE;
//1.RANDOM NUMBER:
dice=Math.ceil(Math.random()*6);
console.log(dice);
//2.DISPLAY THE RESULT:
//VISIBLE ONLY THE RECENT DICE:
var SameAndPortable=document.querySelector('#dice'+dice);
SameAndPortable.className='dice_visibality';
//HIDE ALL THE DICES EXEPT RECENT DICE:
for(var i=1;i<=(6-dice);i++)
{
document.querySelector('#dice'+(dice+i)).className='dice';
}
//3.UPDATE THE SCORE ONLY WHEN THE RANDOM NUMBER IS NOT A 1:
if(dice!==1)
{
//ADD SCORE:
currentScore+=dice;
document.querySelector('#p'+(activePlayer+1)+'_current').textContent=currentScore;
}
//4.CHANGE THE PLAYER WHEN RANDOM NUMBER IS 1:
else
{
currentScore=0;
document.querySelector('#p'+(activePlayer+1)+'_current').textContent='0';
//HOW TO ADD,REMOVE AND TOGGLE HTML CLASSES:
//VERY USEFULL FEATURE TO REMOVE SOMETHING:
document.querySelector('.p'+(activePlayer+1)+'_panel').classList.remove('active');
//CHANGE PLAYER:
/*
if(activePlayer===0)
activePlayer=1;
else
activePlayer=0;
*/
/*//HERE, WE USE TERNARY OPERATOR:
activePlayer===0?activePlayer=1:activePlayer=0;
//VERY USEFULL FEATURE TO ADD SOMETHING:
document.querySelector('.p'+(activePlayer+1)+'_panel').classList.add('active');
*/
//VERY USEFUL FEATURE TO TOGGLE SOMETHING:
/*
document.querySelector('.p1_panel').classList.toggle('active');
document.querySelector('.p2_panel').classList.toggle('active');
*/
/*}
});*/
