const like_button=document.getElementById("like-button")
like_button.addEventListener("click",handleClick)
function handleClick(){
    if(like_button.style.color==="grey"){
        like_button.style.color="red"
    }else{
        like_button.style.color="grey"
    }
}