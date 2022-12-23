document.addEventListener("DOMContentLoaded", ()=>{
    update();
})

function update() {
    let list = document.getElementById("list")

    console.log(list);

    fetch("http://localhost:3000/get").then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
        let posts = json;

        posts.forEach(element => {
            list.innerHTML += `<li>${element.title} - ${element.url}</li>`
            console.log(element.title);
        });
    })
}

function newPost() {
    let title = document.getElementById("title").value;   
    let desc = document.getElementById("desc").value;
    let url = document.getElementById("url").value;

    let post = {title, desc, url};

    let options = {
        method : "POST",
        headers : new Headers({"content-type" : "application/json"}),
        body : JSON.stringify(post)
    }

    fetch("http://localhost:3000/new/post", options).then(res =>{
        console.log(res);
        update();
    })
}