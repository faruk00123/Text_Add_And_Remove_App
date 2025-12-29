const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const Btn = document.getElementById('btn');

Btn.addEventListener('click', ()=>{
    if(inputBox.value === ''){
         alert("Plaice Type your text")
    }
    else{
        let Li = document.createElement('li')
        Li.textContent = inputBox.value;
        listContainer.appendChild(Li);

        let Span = document.createElement('span');
        Span.innerHTML = '\u00d7'
        Li.appendChild(Span)
    }
    inputBox.value = '';
    saveData();
})


listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("Data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('Data')
}
showTask();