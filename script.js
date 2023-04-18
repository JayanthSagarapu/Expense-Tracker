const form = document.getElementById('form');
const amount = document.getElementById('amount');
const descriptions = document.getElementById('description');
const category = document.getElementById('category');
const addExpenseBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const listItem = document.getElementById('list-item');

addExpenseBtn.addEventListener('click',addItem);

function addItem(e){
    e.preventDefault();

    const amountInput = amount.value;
    const descriptionInput = descriptions.value;
    const categoryInput = category.value;

    const obj ={
        amount : amount.value,
        description : descriptions.value,
        category : category.value,
    }

    const li = document.createElement('li');

    li.className = 'list-group-item align-self-center w-75 mb-2 bg-secondary p-3 d-bloack';
    li.id = 'list-item';
    li.textContent = amountInput +' - '+ descriptionInput+' - '+categoryInput;

    localStorage.setItem(obj.description,JSON.stringify(obj))


    const delbtn = document.createElement('button');

    delbtn.className = "btn btn-sm float-right delete"
    delbtn.textContent = "Delete";
    li.append(delbtn)

    delbtn.addEventListener('click',() => {  
        list.removeChild(li)
        localStorage.removeItem(obj.description)

    })

    
    
    const editbtn = document.createElement('button');
    editbtn.className = "btn btn-sm float-right edit mr-2";
    editbtn.textContent=" Edit ";
    editbtn.id = 'edit';
    li.append(editbtn)

    editbtn.addEventListener('click',()=>{
        list.removeChild(li);
        amount.value = obj.amount;
        descriptions.value = obj.description;
        category.value = obj.category;
        localStorage.removeItem(obj.description)
    })

    list.append(li);

    form.reset();

}