const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let boxone=document.getElementById("box1")
let boxtwo=document.getElementById("box2")
let charcs=characters.length


function generate()
{boxone.innerText=""
 boxtwo.innerText=""
    for(let i=0;i<15;i++)
    {
boxone.innerText+=characters[Math.floor(Math.random()*charcs)]
boxtwo.innerText+=characters[Math.floor(Math.random()*charcs)]
    }
}