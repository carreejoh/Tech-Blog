// const logoutSubmit = document.querySelector('#logoutBtn');
const commentButton = document.querySelectorAll(".commentBtn");

// let commentBtn = document.getElementById('.commentBtn');

// // const commitLogout = async () => {
// //     const response = await fetch('/api/user/logout', {
// //         method: 'POST'
// //     });

// //     if(response.ok) {
// //         window.location.replace('/');
// //     } else {
// //         alert('Cannot logout');
// //     }
// // }


const addComment = function () {
    console.log(this.id);

    const submitComment = document.querySelector("#submitComment");
    const postContent = document.getElementById('newComment');

    let post_id = this.id; 
    // const logComment = function () {
    //     console.log(commentContent.value)
    //     console.log("hello there!")
    // };

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
}


for(let i=0; i<commentButton.length; i++) {
    commentButton[i].addEventListener("click", addComment);
}