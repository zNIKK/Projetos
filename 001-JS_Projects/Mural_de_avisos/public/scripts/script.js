document.addEventListener("DOMContentLoaded", () => {
    updatePost()
})
function updatePost() {
    fetch("http://192.168.15.28:3000/api/all").then(res => {
        return res.json();
    }).then(json => {

        let postElements = "";
        let posts = JSON.parse(json);
        posts.forEach(post => {
            let postElement =
                `
            <div id="${post.id}" class="post card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="d-flex card-body justify-content-between">
                    <div class="card-text">${post.description}</div>
                    <button onclick="deletePost()" class="btn btn-danger">Delete</button>
                </div>
            </div>
            `
            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {
    console.log("New Post");
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.15.28:3000/api/new", options).then(res => {
        console.log(res);
        updatePost();
    })

}

function deletePost() {

        const options = {
            method: "DELETE",
            headers: new Headers({ "content-type": "application/json" }),
        }

        fetch(`http://192.168.15.28:3000/api/del/${a}`, options).then(res => {
            console.log(res);
            updatePost();
        })

}