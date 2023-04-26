const like_button=document.getElementById("like-button")
const meme_holder=document.getElementById("meme-holder")
like_button.addEventListener("click",handleClick)
function handleClick(){
    if(like_button.style.color==="grey"){
        like_button.style.color="red"
    }else{
        like_button.style.color="grey"
    }
}
function getMemeData(){
    fetch("https://meme-api.com/gimme")
    .then(res=>res.json())
    .then(data=>replaceWithData(data))
}
function replaceWithData(data){
    meme_holder.setAttribute("src",data.url)
}
getMemeData()