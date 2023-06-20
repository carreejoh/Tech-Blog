const logoutSubmit = document.querySelector('#logoutBtn');
const submitComment = document.getElementById('submitCommentBtn');
const commentContent = document.getElementById('newComment');



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









logoutSubmit.addEventListener("click", commitLogout);