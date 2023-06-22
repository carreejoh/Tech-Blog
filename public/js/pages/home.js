
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
            // location.reload();
            let cardList = document.querySelector(`#commentList${post_id}`);
            let card = document.createElement("div");
            card.className = "item commentCard";
            let userDateDiv = document.createElement("div");
            userDateDiv.className = "right floated content";
            let userDateP = document.createElement("p");

            //For date
            function format_date(date) {
                return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
                    new Date(date).getFullYear() 
                  }`;
            }

            userDateP.innerHTML = `${data.comment_user}<br>${format_date(data.createdAt)}`
            let content = document.createElement("div");
            content.className = "content";
            let contenth3 = document.createElement("h3");
            contenth3.innerHTML = `${data.comment_content}`

            cardList.appendChild(card);
            card.appendChild(userDateDiv);
            userDateDiv.appendChild(userDateP);
            card.appendChild(content);
            content.appendChild(contenth3);
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

