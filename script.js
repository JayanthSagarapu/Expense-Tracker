const amountArea = document.getElementById("amount");
const descriptionArea = document.getElementById("description");
const categoryArea = document.getElementById("category");
const list = document.getElementById("list");

function addItem(event) {
  event.preventDefault();

  const amount = event.target.amount.value;
  const description = event.target.description.value;
  const category = event.target.category.value;

  const obj = {
    amount,
    description,
    category,
  };

  console.log(obj);

  const li = document.createElement("li");

  li.className =
    "list-group-item align-self-center w-75 mb-2 bg-secondary p-3 d-bloack";
  li.id = "list-item";
  li.textContent = amount + " - " + description + " - " + category;

  localStorage.setItem(obj.description, JSON.stringify(obj));

  const delbtn = document.createElement("button");

  delbtn.className = "btn btn-sm float-right delete";
  delbtn.textContent = "Delete";
  li.append(delbtn);

  delbtn.addEventListener("click", () => {
    list.removeChild(li);
    localStorage.removeItem(obj.description);
  });

  const editbtn = document.createElement("button");
  editbtn.className = "btn btn-sm float-right edit mr-2";
  editbtn.textContent = " Edit ";
  editbtn.id = "edit";
  li.append(editbtn);

  editbtn.addEventListener("click", (obj) => {
    amountArea.value = obj.amount;
    descriptionArea.value = obj.description;
    categoryArea.value = obj.category;
    localStorage.removeItem(obj.description);
    list.removeChild(li);
  });

  list.append(li);

  form.reset();
}

//     |
//     |
//     V
// Code updated with CrudCrud

// const amount = document.getElementById("amount");
// const description = document.getElementById("description");
// const category = document.getElementById("category");
// const list = document.getElementById("list");

// function addItem(event) {
//   event.preventDefault();

//   const amount = event.target.amount.value;
//   const description = event.target.description.value;
//   const category = event.target.category.value;

//   const obj = {
//     amount,
//     description,
//     category,
//   };
//   console.log(obj);

//   axios
//     .post(
//       "https://crudcrud.com/api/c346d07bb6684bf1829701d2813a762c/bookingData",
//       obj
//     )
//     .then((response) => {
//       ShowOnScreen(response.data);
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// window.addEventListener("DOMContentLoaded", reloadpage);

// function reloadpage() {
//   axios
//     .get(
//       "https://crudcrud.com/api/c346d07bb6684bf1829701d2813a762c/bookingData"
//     )
//     .then((response) => {
//       for (var i = 0; i < response.data.length; i++) {
//         ShowOnScreen(response.data[i]);
//       }
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// function ShowOnScreen(res) {
//   const li = document.createElement("li");

//   li.className =
//     "list-group-item align-self-center w-75 mb-2 bg-secondary p-3 d-bloack";

//   li.append(
//     document.createTextNode(res.amount),
//     " - ",
//     document.createTextNode(res.description),
//     " - ",
//     document.createTextNode(res.category)
//   );

//   const delbtn = document.createElement("button");

//   delbtn.className = "btn btn-sm float-right delete";
//   delbtn.textContent = "Delete";

//   delbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     axios
//       .delete(
//         `https://crudcrud.com/api/c346d07bb6684bf1829701d2813a762c/bookingData/${res._id}`
//       )
//       .then((response) => {
//         console.log("deleted"), response;
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     list.removeChild(li);
//   });

//   li.appendChild(delbtn);

//   const editbtn = document.createElement("button");
//   editbtn.className = "btn btn-sm float-right edit mr-2";
//   editbtn.textContent = " Edit ";

//   editbtn.addEventListener("click", (res) => {
//     list.removeChild(li);
//     amount.value = res.amount;
//     description.value = res.description;
//     category.value = res.category;

//     axios
//       .delete(
//         `https://crudcrud.com/api/c346d07bb6684bf1829701d2813a762c/bookingData/${res._id}`
//       )
//       .then((response) => {
//         console.log("deleted"), response;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

//   li.append(editbtn);

//   list.append(li);

//   form.reset();
// }
