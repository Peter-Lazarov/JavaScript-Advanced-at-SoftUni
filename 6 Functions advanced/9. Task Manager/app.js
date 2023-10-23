function solve() {
    const form = document.querySelector("form");
    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const date = document.getElementById("date");
    const sectionsAll = document.querySelectorAll("section");
    const open = sectionsAll[1];
    const inProgress = sectionsAll[2];
    const complete = sectionsAll[3];
    
    form.addEventListener("submit", onSubmit);

    function onSubmit(event){
        event.preventDefault();

        const taskValue = task.value;
        const descriptionValue = description.value;
        const dateValue = date.value;

        if(!taskValue || !descriptionValue || !dateValue){
            return;
        }
        let myArticle = createArticle(taskValue, descriptionValue, dateValue);
        open.children[1].appendChild(myArticle);
        task.value = "";
        description.value = "";
        date.value = "";

    }

    function createArticle(name, description, date){
        let article = document.createElement("article");
        article.innerHTML = `<h3>${name}</h3>
            <p>Description: ${description}</p>
            <p>Due Date: ${date}</p>
            <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
            </div>`;
        
        const buttons = article.querySelectorAll("button");
        const startButton = buttons[0];
        const deleteButton = buttons[1];
        startButton.addEventListener("click", moveArticle.bind(this, "inProgress"));
        deleteButton.addEventListener("click", onDelete);

        return article;
    }

    function moveArticle(section, event){
        const article = event.target.parentElement.parentElement;
        const buttons = article.querySelectorAll("button");
        const deleteButton = buttons[0];
        const finishButton = buttons[1];

        deleteButton.textContent = "Delete";
        deleteButton.classList.remove("green");
        deleteButton.classList.add("red");

        finishButton.textContent = "Finish";
        finishButton.classList.remove("red");
        finishButton.classList.add("orange");

        deleteButton.removeEventListener("click", moveArticle);
        deleteButton.addEventListener("click", onDelete);

        finishButton.removeEventListener("click", onDelete);
        finishButton.addEventListener("click", onFinish);

        inProgress.children[1].appendChild(article);
    }

    function onFinish(event){
        const article = event.target.parentElement.parentElement;
        event.target.parentElement.remove();
        complete.children[1].appendChild(article);
    }

    function onDelete(event){
        event.target.parentElement.parentElement.remove();
    }
}
