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

    const post_name = newPostTitle.value.trim();
    const post_content = newPostContent.value.trim();

    fetch('/api/posts/newpost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ post_name, post_content }),
      
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      })
  
}



logoutSubmit.addEventListener("click", commitLogout);
newPostSubmit.addEventListener("click", newPost);