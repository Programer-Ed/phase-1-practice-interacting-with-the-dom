"use strict";

function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (let i = 0, arr2 = Array(a.length); i < a.length; i++) {
            arr2[i] = a[i];
        }
        return arr2;
    }
    return Array.from(a);
}

let playing = true;

let timer = function() {
    return setInterval(function() {
        let c = document.getElementById("counter");
        let d = parseInt(c.innerText);
        c.innerText = d + 1;
    }, 1000);
};

let interval = timer();

const minusBtn = document.getElementById('#minus')
const addBtn = document.getElementById('#plus')
const heart = document.getElementById('#heart')
const pause = document.getElementById('#pause')
const commentForm = document.getElementById('#form')

minusBtn.addEventListener('click', function(){
    let c = document.getElementById('counter')
    let d = parseInt(c.innerText);
    c.innerText = d -1;
})

addBtn.addEventListener('click', function(){
    let c = document.getElementById('counter')
    let d = parseInt(c.innerText);
    c.innerText = d +1;
})
heart.addEventListener('click', function(){
    let c = document.getElementById('counter')
    let d = parseInt(c.innerText);
    let likes = document.querySelector('.likes')
    let like;
     if([].concat(_toConsumableArray(likes.children)).map(function(child) {
        return parseInt(child.dataset.num);
    }).includes(d)) {
        like = document.querySelector('[data-num="' + d + '"]');
        let likeCount = parseInt(like.children[0].innerText);
        like.innerHTML = d + " has been liked <span>" + (likeCount + 1) + "</span> times";
    } else {
        like = document.createElement("li");
        like.setAttribute("data-num", d);
        like.innerHTML = d + " has been liked <span>1</span> time";
        likes.appendChild(like);
    }});
pause.addEventListener("click", function() {
        if (playing) {
            playing = false;
            clearInterval(interval);
            this.innerText = "resume";
        } else {
            playing = true;
            interval = timer();
            this.innerText = "pause";
        }
        [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(button) {
            if (button.id !== "pause") {
                button.disabled = !playing;
            }
        });
    });
commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let input = this.children[0];
        let comment = input.value;
        input.value = "";
        let comments = document.querySelector(".comments");
        let commentElement = document.createElement("p");
        commentElement.innerText = comment;
        comments.appendChild(commentElement);
    });