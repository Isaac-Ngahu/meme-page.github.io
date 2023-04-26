const like_button=document.getElementById("like-button")
const meme_holder=document.getElementById("meme-holder")
const subreddit=document.getElementById("subreddit")
const meme_title=document.getElementById("meme-title")
const author_name=document.getElementById("author-name")
const meme_button=document.getElementById("meme-button")
const detailsForm=document.getElementById("details-form")
const userComment=document.getElementById("post_comment")
const api_url="https://meme-api.com/gimme/30"
function getMemeData(){
    fetch(api_url)
    .then(res=>res.json())
    .then(data=>replaceWithData(data))
    .catch(error=>{
        alert("oops looks like there was an error");
        console.log(error)
    })
}
function postUserInfo(reviews){
fetch(api_url,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
body:JSON.stringify(reviews)
})
.then(res=>res.json())
.then(data=>console.log(data))
}
function handleClick(){
    if(like_button.style.color==="grey"){
        like_button.style.color="red"
    }else{
        like_button.style.color="grey"
    }
}
//function append
function replaceWithData(data){
    like_button.style.color="grey"
   data.memes.forEach(element => {
     meme_title.innerText=`The title is:${element.title}`;
    meme_holder.src=element.url;
    author_name.innerHTML=` The author is:<u>${element.author}</u>`;
subreddit.innerHTML=`The subreddit is<u>${element.subreddit}</u>`

   });
}
function handleOnKeyDown(e){
    if(e==="onkeydown"){
window.location.assign("#main2")
    }
}
function handleSubmit(e){
    e.preventDefault();
    let reviewObject={
        name:e.target.user_name.value,
        email:e.target.user_email.value,
        userReview:e.target.user_review.value,
    }
postUserInfo(reviewObject)
detailsForm.reset()
}
getMemeData()
like_button.addEventListener("click",handleClick)
meme_button.addEventListener("click",getMemeData)
//document.addEventListener("onkeydown",handleOnKeyDown)
detailsForm.addEventListener("submit",handleSubmit)