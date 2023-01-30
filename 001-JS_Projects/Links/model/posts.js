module.exports = {
    posts : [{title : "youtube", description : "GAHHAD", url : "https://www.youtube.com/c/LUVADEPEDREIROOFICIAL"}],

    getAll() {
        return this.posts;
    },

    getURL(title) {
        let postFind = this.posts.find(element => element.title == title) 
        return postFind
    },
    PostUrl(title, description, url) {
        this.posts.push({title, description, url});
    }
    

}