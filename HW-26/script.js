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
    if (key === "" || key <= 0) {
        return (boxForPost.innerHTML = `ERROR - ключа з ID  ${key} не існує`);
    }

    boxForComments.classList.add("btnToggle");

    try {
        let responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        let data = await responsePost.json();
        data.length >= key ? createPost(data[key - 1]) : (boxForPost.innerHTML = `ERROR - ключа з ID ${key} не існує`);
    } catch (error) {
        console.log("ERROR:" + error.message);
    }

    try {
        let responseComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${key}/comments`);
        let dataComments = await responseComments.json();
        createComments(dataComments);
    } catch (error) {
        console.log("ERROR: " + error.message);
    }
}

function createPost(user) {
    boxForPost.innerHTML = `<h4 class="name"><i class="medium material-icons" style="color:${randomRGB()};">face</i>Name ID -${user.id}</h4>
                            <p><span class = 'title'>Title:</span><br/>${user.title}</p>
                            <p class="postText"><span class = 'post'>Post:</span> <br/>${user.body}</p>
                            <a id="commentBtn" class="waves-effect waves-light btn-small"><i class="material-icons left">comment</i>Коментарі</a>`;
}

function createComments(data) {
    boxForComments.innerHTML = "";
    let comment = "";
    data.forEach((el) => {
        comment += `<h6><i class="small material-icons"style="color:${randomRGB()};">face</i>Name ID ${el.id}</h6>
                    <p class="postText"><span>Comment:</span> <br/>${el.body}</p>`;
    });
    return (boxForComments.innerHTML = comment);
}
