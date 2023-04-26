"use strict";
import { randomRGB, toggle } from "./helper.js";
let inputSearch = document.querySelector("#searchId");
let btn = document.querySelector("#btn");
let boxForPost = document.querySelector(".boxForPost");
export let boxForComments = document.querySelector(".boxForComments");

btn.addEventListener("click", apiForPost);
boxForPost.addEventListener("click", toggle);

async function apiForPost() {
    let key = Number(inputSearch.value);
    if (key === "" || key <= 0 || key > 100) {
        return (boxForPost.innerHTML = `ERROR - ключа з ID  ${key} не існує`);
    }

    boxForComments.classList.add("btnToggle");

    try {
        let responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${key}`);
        let data = await responsePost.json();
        boxForPost.innerHTML = `<h4 class="name"><i class="medium material-icons" style="color:${randomRGB()};">face</i>Name ID -${data.id}</h4>
                            <p><span class = 'title'>Title:</span><br/>${data.title}</p>
                            <p class="postText"><span class = 'post'>Post:</span> <br/>${data.body}</p>
                            <a id="commentBtn" class="waves-effect waves-light btn-small"><i class="material-icons left">comment</i>Коментарі</a>`;
    } catch (error) {
        console.log("ERROR:" + error.message);
    }

    try {
        let responseComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${key}/comments`);
        let dataComments = await responseComments.json();
        boxForComments.innerHTML = "";
        let comment = "";
        dataComments.forEach((el) => {
            comment += `<h6><i class="small material-icons"style="color:${randomRGB()};">face</i>Name ID ${el.id}</h6>
                    <p class="postText"><span>Comment:</span> <br/>${el.body}</p>`;
        });
        boxForComments.innerHTML = comment;
    } catch (error) {
        console.log("ERROR: " + error.message);
    }
}
