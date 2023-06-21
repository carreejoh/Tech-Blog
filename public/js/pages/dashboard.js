const logoutSubmit = document.querySelector('#logoutBtn');

const newPostSubmit = document.querySelector('#newPostSubmit');
const newPostTitle = document.getElementById('newPostTitle');
const newPostContent = document.getElementById('newPostContent');

const deletePost = document.querySelectorAll(".deletePostBtn");
const updatePost = document.querySelectorAll(".updatePostBtn");

const updatedPostSubmit = document.querySelector('#updatedPostSubmit');
const cancelUpdate = document.querySelector(".cancelEdit");
let updatedPostTitle = document.getElementById('updatedPostTitle');
let updatedPostContent = document.getElementById('updatedPostContent');


const commitLogout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST'
    });

    if (response.ok) {
        window.location.replace('/');
    } else {
        alert('Cannot logout');
    }
}


const newPost = async () => {

    const post_name = newPostTitle.value.trim();
    const post_content = newPostContent.value.trim();

    fetch('/api/posts/newpost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post_name, post_content }),

    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            location.reload();
        })

}


const deletePostFn = function () {

    let postId = this.id;

    const deletePostAsync = async () => {
        
        fetch('/api/posts/deletepost', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postId })
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

    deletePostAsync();
}


const updatePostFn = function () {

    let postId = this.id


    let currentTitle = document.querySelector(`#postName${postId}`);
    let currentContent = document.querySelector(`#postContent${postId}`);

    updatedPostTitle.value = currentTitle.innerHTML;
    updatedPostContent.value = currentContent.innerHTML;

    const updatePostAsync = async () => {

        let newTitle = updatedPostTitle.value;
        let newContent = updatedPostContent.value;

        fetch('/api/posts/updatepost', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postId, newTitle, newContent })
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

    cancelUpdate.addEventListener("click", function() {
        return;
    })
    updatedPostSubmit.addEventListener("click", updatePostAsync);

}



for (let i = 0; i < deletePost.length; i++) {
    deletePost[i].addEventListener("click", deletePostFn)
}

for (let i = 0; i < updatePost.length; i++) {
    updatePost[i].addEventListener("click", updatePostFn)
}

logoutSubmit.addEventListener("click", commitLogout);
newPostSubmit.addEventListener("click", newPost);





