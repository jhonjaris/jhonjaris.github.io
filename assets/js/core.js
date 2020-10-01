function navItemsListener(){
    let tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(function (element, index, array) {
        element.addEventListener("click", function () {
    
            this.classList.add("active");
            console.log(this.id);
            (!isNaN(parseInt(this.id))) ? loadHomeworks(this.id) : loadHomeworks();
            for (i = 0; i < tabs.length; i++) {
                if (i !== index) {
                    tabs[i].classList.remove("active");
                }
            }
        })
    })
}
function homeworkBtnListener(){
    $("#saveHomework").on("click", function(e){  
        e.preventDefault();
        const form = document.getElementById('homeworkForm');
        const rawData = new FormData(form);
        const body = {
            action: "saveHomework",
            title:rawData.get("homeworkTitle"),
            subject:rawData.get("homeworkSubject"),
            deliver_time:rawData.get("deliverDate") + " " + rawData.get("deliverTime") + ":00",
            condition:rawData.get("homeworkCondition"),
            details:rawData.get("homeworkDetails")
        }
        console.log(body)
        $.post("engine/core.php",body, function(response){
            // console.log(response);
            
            form.reset()
            loadHomeworks();
        })

    })
}
function saveSubjectBtnListener(){

    $("#saveSubject").on("click", function(e){
        e.preventDefault();
        const body = {
            action: 'saveSubject',
            subjectTitle: $('#subjectTitle').val()
        }
        console.log(body)
        $.post("engine/core.php", body, function(response){
            console.log(response);
            loadSelections();
        })
    })
}

function loadSelections(){
    $.get("engine/core.php?subjects", function(response){
        let all = []; 
        response = eval(response);
        response.forEach(function(a, i){
            option = document.createElement("option");
            option.value = a.id;
            option.innerText = a.title;
            all[i] = option;
        })
        $("#homeworkSubject").html(all)
    })
}
function loadHomeworks(condition = ""){

    let url = (condition !== "") ? "engine/core.php?condition=" + condition:  "engine/core.php?allHomeworks";
    console.log(url);
    $.get(url, function(r){
        r = eval(r);
        let list = [];
        let doneButton = `            
        <button class="done">Marcar como realizada</button> 
        <button class="delete">Eliminar</button>`;
        let undoButton = `
        <button class="undo">No realizada</button>
        <button class="delete">Eliminar</button>
        `
        r.forEach(function(a,i){
            card = document.createElement("div");
            card.setAttribute("homeworkId", a.id);
            card_header = document.createElement("div");
            card_body = document.createElement("div");
            card_footer = document.createElement("div");
            card.classList = `card col-12 col-sm-5 col-md-3 m-4 condition-${a.condition_}`;
            card_header.classList = "card-header";
            card_body.classList = "card-body";
            card_footer.classList = "card-footer";

            card_header.innerHTML = `<h4>${a.title}</h4>`;
            card_body.innerHTML = `<h6>${a.subject_}</h6><p>${a.deliver_time}</p>`;
            card_footer.innerHTML = (a.condition_ == 3) ? undoButton : doneButton ;
            card.append(card_header);
            card.append(card_body);
            card.append(card_footer);
        
            list[i] = card;
        })
        $('#main').html(list);
        doneListener();
    })
}

function doneListener(){
    $('.card').on('click', '.done', function(e){
        e.stopPropagation();
        $.post('engine/core.php', {action: 'setDone', id:$(this).parents('.card').attr('homeworkId')}, function(r){
            console.log(r)
            loadHomeworks();
        })
    })

    $('.card').on('click', '.undo', function(e){
        e.stopPropagation();
        $.post('engine/core.php', {action: 'setUndone', id:$(this).parents('.card').attr('homeworkId')}, function(r){
            console.log(r)
            loadHomeworks();
        })
    })

    $('.card').on('click', '.delete', function(e){
        e.stopPropagation();

        if(confirm("Estás seguro que deseas eliminar esta tarea?") === true){
            $.post('engine/core.php', {action: 'delete', id:$(this).parents('.card').attr('homeworkId')}, function(r){
                console.log(r)
                loadHomeworks();
            })
        }
    })
}

function init(){
    loadSelections();
    homeworkBtnListener();
    navItemsListener();
    saveSubjectBtnListener();
    loadHomeworks();
    $('#addHomework').on('click', function(){
        $('#homeworkFormDiv').fadeToggle(500);
    })
    $('#addSubject').on('click', function(){
        $('#subjectFormDiv').fadeToggle(500);
    })

}

$(document).ready(function(){
    init();
})