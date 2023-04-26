const like_button=document.getElementById("like-button")
const meme_holder=document.getElementById("meme-holder")
like_button.addEventListener("click",handleClick)
const meme_title=document.getElementById("meme-title")
const author_name=document.getElementById("author-name")
function handleClick(){
    if(like_button.style.color==="grey"){
        like_button.style.color="red"
    }else{
        like_button.style.color="grey"
    }
}
function getMemeData(){
    fetch("https://meme-api.com/gimme/60")
    .then(res=>res.json())
    .then(data=>replaceWithData(data))
}
function replaceWithData(data){
   data.memes.forEach(element => {
    author_name.innerText=element.author;
    meme_title.innerText=element.title;
    meme_holder.src=element.url;
   });
}
getMemeData()