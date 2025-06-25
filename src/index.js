const button1= document.getElementById('addPostButton');

button1.onclick=displayAlert;

function displayAlert(event){
    alert("You have added a post.")
}

const BASE_URL ="http://localhost:3000/posts"
 
function displayPosts() {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((posts) => {
      const postList = document.getElementById("post-list");
      postList.innerHTML = "";

      posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.textContent = post.title;
        postDiv.style.cursor = "pointer";

        postDiv.addEventListener("click", () => handlePostClick(post.id));
        postList.appendChild(postDiv);
      });
    });
}

function addNewPostListener() {
    const form = document.getElementById("new-post-form");

  form.addEventListener("submit", function (e) {
     e.preventDefault();

    const newPost = {
      title: document.getElementById("new-title").value,
      content: document.getElementById("new-content").value,
      author: document.getElementById("new-author").value
    }
  });
}

function addNewPostListener(){
    const form =document.getElementById("new-post-form");

    form.addEventListener(Submit, function(event){
        event.preventDefault();

        const newPostForm={
            title: document.getElementById("new-title").value,
      content: document.getElementById("new-content").value,
      author: document.getElementById("new-author").value
        }
    });
}