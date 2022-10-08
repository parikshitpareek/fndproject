document.querySelector('#push').onclick = function(){
if(document.querySelector('#newtask input').value.length == 0){
    alert("Please Enter a Task");
}
else{
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <button class="delete">
            <i class="fa-sharp fa-solid fa-x"></i>
            </button>
            <button class="up">
            <i class="fa-solid fa-arrow-up"></i>
            </button>
            <button class="down">
            <i class="fa-solid fa-arrow-down"></i>
            </button>
            <span id="taskname">
            ${document.querySelector('#newtask input').value}
            </span>
        </div>
    `;

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    var upLink = document.querySelectorAll(".up");
    for (var i = 0; i < upLink.length; i++) {
        upLink[i].addEventListener('click', function () {
            var wrapper = this.parentElement;
            if (wrapper.previousElementSibling)
            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        });
    }
    var downLink = document.querySelectorAll(".down");
    for (var i = 0; i < downLink.length; i++) {
        downLink[i].addEventListener('click', function () {
            var wrapper = this.parentElement;
            if (wrapper.nextElementSibling)
            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
        });
    }
}
}

