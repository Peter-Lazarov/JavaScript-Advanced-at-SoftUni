function getArticleGenerator(articles) {

    function showNext(){
        let articleTag = document.createElement("article");
        if(articles.length > 0){
            articleTag.textContent = articles.shift();
            document.getElementById("content").appendChild(articleTag);
        }
    }

    return showNext;
}
