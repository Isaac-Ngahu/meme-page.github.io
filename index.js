const like_button=document.getElementById("like-button")
const meme_holder=document.getElementById("meme-holder")
const subreddit=document.getElementById("subreddit")
const meme_title=document.getElementById("meme-title")
const author_name=document.getElementById("author-name")
const meme_button=document.getElementById("meme-button")

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
    .catch(error=>{
        alert("oops looks like there was an error");
        console.log(error)
    })
}
function replaceWithData(data){
    like_button.style.color="grey"
   data.memes.forEach(element => {
     meme_title.innerText=`The title is:${element.title}`;
    meme_holder.src=element.url;
    author_name.innerHTML=` The author is:<u>${element.author}</u>`;
subreddit.innerHTML=`The subreddit is<u>${element.subreddit}</u>`

   });
}
getMemeData()
like_button.addEventListener("click",handleClick)
meme_button.addEventListener("click",getMemeData)
