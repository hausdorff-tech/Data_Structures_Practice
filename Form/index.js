let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let loadingMessage = document.getElementById("loading");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");

function submitForm(answer){
    //Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(answer.toLowerCase() === "istanbul"){
                resolve();
            }
            else{
                reject(new Error("Wrong answer, try again!"));
            }
        }, 1500);
    })
};

function disable(el){
    el.disabled = true;
}

function enable(el){
    el.disabled = false;
}

function show(el){
    el.style.display = "visible";
}

function hide(el){
    el.style.display = "none";
}

function HandleTextAreaChange(){ ///DOESN'T WORK
    textarea.onchange === true ? enable(button) : disable(button);
}

async function HandleFormSubmit(e){
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);

    try{
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);        
    }
    catch(err){
        show(errorMessage);
        errorMessage.textContent = err.message;
    }
    finally{
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
}

form.onsubmit = HandleFormSubmit;
textarea.oninput = HandleTextAreaChange;