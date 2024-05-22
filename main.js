let theList = document.querySelector('#list')
theList.addEventListener('click', (e) => {
    if (e.target.tagName === 'li') {
        e.target.classList.toggle("checked")
    }
});
let task = document.querySelector('#task')
let btn = document.querySelector('#liveToastBtn')
btn.addEventListener('click', newElement)
function newElement(event) {
    event.preventDefault();

    if(task.value) {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = `<button>x</button> ${task.value}`;
        theList.append(liDOM);
        task.value="";
        saveItem();
        toastSuccess();
    } else {
        toastError();
    }
}

//li'ye tıklanınca checked yap, buttona tıklanınca sil
theList.addEventListener('click', deleteItem)
function deleteItem (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle("checked")
        saveItem();
    } else if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
        saveItem();
    }
}


//başarılı mesaj 3sn sonra kaybolacak
function toastSuccess() {
    let success = document.querySelector('.toast.success');
    let toastBody = document.querySelector('.toast-body');
    let successText = document.querySelector('#toast-body-success').innerHTML;
    toastBody.textContent = `${successText}`;
    $(success).toast("show");
    setTimeout(function() {
        $(error).toast("hide");
    }, 3000);
}

//hatalı mesaj 3sn sonra kaybolacak
function toastError() {
    let error = document.querySelector('.toast.error');
    let toastBody = document.querySelector('.toast-body');
    let errorText = document.querySelector('#toast-body-error').innerHTML;
    toastBody.textContent = `${errorText}`;
    $(error).toast("show");
    setTimeout(function() {
        $(error).toast("hide");
    }, 3000);
}

function saveItem () {
    localStorage.setItem("data", theList.innerHTML);
}

function showItem () {
    theList.innerHTML = localStorage.getItem("data");
}

showItem