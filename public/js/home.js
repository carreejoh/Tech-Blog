
const commentButton = document.querySelectorAll(".commentBtn");
const displayCommentsBtn = document.querySelectorAll(".displayCommentsBtn");
const hideCommentsBtn = document.querySelectorAll(".hideCommentsBtn");


const addComment = function () {
    console.log(this.id);

    const submitComment = document.querySelector("#submitComment");
    const postContent = document.getElementById('newComment');

    let post_id = this.id; 

    const logComment = async () => {
        let content = postContent.value.trim();

        fetch('/api/comments/newcomment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ post_id, content })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
        return;
    } 
    submitComment.addEventListener("click", logComment)
};


const displayComments = function () {
    console.log(this.id)
    let currentPostShow = document.querySelector(`#commentsSection${this.id}`);
    currentPostShow.setAttribute("style", "display: block;");
}

const hideComments = function () {
    console.log(this.id)
    let currentPost = document.querySelector(`#commentsSection${this.id}`);
    currentPost.setAttribute("style", "display: none;");
}






for(let i=0; i<commentButton.length; i++) {
    commentButton[i].addEventListener("click", addComment);
}

for(let i=0; i<displayCommentsBtn.length; i++) {
    displayCommentsBtn[i].addEventListener("click", displayComments);
}

for(let i=0; i<hideCommentsBtn.length; i++) {
    hideCommentsBtn[i].addEventListener("click", hideComments);
}

