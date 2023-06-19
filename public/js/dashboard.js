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

// const newPost = async () => {

//     let post_name = newPostTitle.value.trim();
//     let post_content = newPostContent.value.trim();


//     let newPostContent = {
//         post_name: post_name,
//         post_content: post_content,
//     }

//     if(post_name && post_content) {
//     const newPost = await fetch('/api/posts/newPost', {
//         method: 'POST',
//         body: JSON.stringify({ newPostContent}),
//         headers: { 'Content-Type': 'application/json'}
//     });
//     if(newPost.ok) {
//         console.table(newPostContent);
//     } else {
//         console.log("new post failed")
//     }
// } else {
//     alert('New Post Failed!');
// }
    
// }


const newPost = async () => {s
    // const newpost = {
    //     title: newPostTitle.value.trim(),
    //     content: newPostContent.value.trim(),
    // }


    let post_name = newPostTitle.value.trim();
    let post_content = newPostContent.value.trim();

    fetch('/api/posts/newpost', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({ post_name, post_content }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Array added successfully:', data);
      })
      .catch((error) => {
        console.error('Error adding array:', error);
      });
}



logoutSubmit.addEventListener("click", commitLogout);
newPostSubmit.addEventListener("click", newPost);