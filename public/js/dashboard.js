const logoutSubmit = document.querySelector('#logoutBtn');

const newPostSubmit = document.querySelector('#newPostSubmit');
const newPostTitle = document.getElementById('newPostTitle');
const newPostContent = document.getElementById('newPostContent');





const commitLogout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST'
    });

    if(response.ok) {
        window.location.replace('/');
    } else {
        alert('Cannot logout');
    }
}

const newPost = async () => {

    let post_name = newPostTitle.value.trim();
    let post_content = newPostContent.value.trim();

    if(post_name && post_content) {
    const newPost = await fetch('/api/posts/newPost', {
        method: 'POST',
        body: JSON.stringify({ post_name, post_content}),
        headers: { 'Content-Type': 'application/json'}
    });
    if(newPost.ok) {
        console.log("new post success")
    } else {
        console.log("new post failed")
    }
} else {
    alert('New Post Failed!');
}
    
}




logoutSubmit.addEventListener("click", commitLogout);
newPostSubmit.addEventListener("click", newPost);