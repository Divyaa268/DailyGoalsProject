const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelectorAll(".container");

const tasks = [];

function showAllTasks()
{
    tasks.forEach((value, index) => 
    {
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);
    })


}

form.addEventListener("submit", (e) => 
{
    e.preventDefault(); // to prevent reloading page
    tasks.push({
        title: title.value,
        description: description.value,
        
    })
})