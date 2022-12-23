module.exports = {
    posts : [{title : "youtube", description : "GAHHAD", url : "https://www.youtube.com/c/LUVADEPEDREIROOFICIAL"}],

    getAll() {
        return this.posts;
    },
    PostUrl(title, description, url) {
        this.posts.push({title, description, url});
    }
    

}