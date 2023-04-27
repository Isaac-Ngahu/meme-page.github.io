const like_button=document.getElementById("like-button")
const meme_holder=document.getElementById("meme-holder")
const subreddit=document.getElementById("subreddit")
const meme_title=document.getElementById("meme-title")
const author_name=document.getElementById("author-name")
const meme_button=document.getElementById("meme-button")
const detailsForm=document.getElementById("details-form")
const userComment=document.getElementById("post_comment")
const user_comment=document.getElementById("user_comment")
const addUserComments=document.getElementById("addUserComments")
const api_url="https://meme-api.com/gimme/30"
//fetching meme data
function getMemeData(){
    fetch(api_url)
    .then(res=>res.json())
    .then(data=>replaceWithData(data))
   .catch(error=>{
        alert("oops looks like there was an error");
        console.log(error)
    })
}
//post reviews 
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
//change like button color
function handleClick(){
    if(like_button.style.color==="grey"){
        like_button.style.color="red"
    }else{
        like_button.style.color="grey"
    }
}
//populate with data
function replaceWithData(data){
    like_button.style.color="grey"
   data.memes.forEach(element => {
     meme_title.innerText=`The title is:${element.title}`;
    meme_holder.src=element.url;
    author_name.innerHTML=` The author is:<u>${element.author}</u>`;
subreddit.innerHTML=`The subreddit is<u>${element.subreddit}</u>`
});
}
// handling events
function handleOnKeyDown(e){
    if(e==="onkeydown"){
window.location.assign("#main2")
    }
}
function handleSubmitDetails(e){
    e.preventDefault();
    let reviewObject={
        name:e.target.user_name.value,
        email:e.target.user_email.value,
        userReview:e.target.user_review.value,
    }
postUserInfo(reviewObject)
detailsForm.reset()
}
function appendComment(e){
    const Li=document.createElement("li");
 const value=e.target.post_comment.value;
 if(value===""){
    alert("blank comment")  
 }else{
    Li.innerText=value;
    addUserComments.appendChild(Li);
    user_comment.reset()
 }

}
function handleSubmitComment(e){
    e.preventDefault();
    appendComment(e);
    return;
    }
    function handleOnKeyDown(e){
if(e.key==="ArrowDown"){
    window.location.href="#main2"
}else if(e.key==="ArrowUp"){
    window.location.href="#heading1"
}

    }
    //calling functions
getMemeData()
like_button.addEventListener("click",handleClick)
meme_button.addEventListener("click",getMemeData)
detailsForm.addEventListener("submit",handleSubmitDetails)
user_comment.addEventListener("submit",handleSubmitComment)
document.addEventListener("keydown",handleOnKeyDown)