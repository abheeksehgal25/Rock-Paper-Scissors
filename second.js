let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".photos");
const message=document.querySelector(".message");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");
const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomindx=Math.floor(Math.random()*3);
    return options[randomindx];
}
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you won");
        message.innerText="You Won!!!";
        message.style.backgroundColor="green";
        userscore++;
        userscorepara.innerText=userscore;
    }
    else{
        console.log("you lost");
        message.innerText="You Lost :(";
        message.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText=compscore;
    }
}
const drawgame=()=>{
    message.innerText="Game was draw";
    message.style.backgroundColor="rgb(7, 3, 52)"
}
const playgame=(userchoice)=>{
    const compchoice=getCompChoice();
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
}
choices.forEach((photos)=>{
    photos.addEventListener("click",()=>{
        const userchoice=photos.getAttribute("id");
        playgame(userchoice);
    });
});