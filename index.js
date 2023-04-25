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
    fetch("http://alpha-meme-maker.herokuapp.com")
    .then(res=>res.json())
    .then(data=>replaceWithData(data))
}
function replaceWithData(data){
    meme_holder.src=data.url

}
getMemeData()