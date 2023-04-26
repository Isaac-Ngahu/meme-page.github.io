const like_button=document.getElementById("like-button")
const meme_holder=document.getElementById("meme-holder")
const subreddit=document.getElementById("subreddit")
const meme_title=document.getElementById("meme-title")
const author_name=document.getElementById("author-name")
const meme_button=document.getElementById("meme-button")
const postLink=document.getElementById("postlink")
function handleClick(){
    if(like_button.style.color==="grey"){
        like_button.style.color="red"
    }else{
        like_button.style.color="grey"
    }
}
function getMemeData(){
    fetch("https://meme-api.com/gimme/30")
    .then(res=>res.json())
    .then(data=>replaceWithData(data))
}
function replaceWithData(data){
    like_button.style.color="grey"
   data.memes.forEach(element => {
     meme_title.innerText=`The title is:${element.title}`;
    meme_holder.src=element.url;
    author_name.innerText=` The author is:${element.author}`;
subreddit.innerText=`The subreddit is${element.subreddit}`
postLink.innerText=`click link to get meme${element.postLink}`
   });
}
getMemeData()
like_button.addEventListener("click",handleClick)
meme_button.addEventListener("click",getMemeData)
