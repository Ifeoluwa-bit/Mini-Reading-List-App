    //getting all required elements
    let bookList = document.querySelector('#book-list .bookList');
    const inputBox = document.querySelector("#add-book .inputField");
    const addBtn = document.querySelector("#add-book button");
    const deleteAllBtn = document.querySelector(".pending button");
    const pending = document.querySelector(".pending");


    

    inputBox.onkeyup = () => {
        let userInput = inputBox.value;//getting user entered value
        if(userInput.trim() != 0){ //if user values aren't only white spaces
            addBtn.classList.add('active') // active the add button
        } else{
            addBtn.classList.remove('active')
        }
    }

    //if user click on the add button
    addBtn.addEventListener('click', () => {
        let userInput = inputBox.value; //getting user entered value
        let getLocalStorage = localStorage.getItem("New Book"); //getting loaclstorage
        if(getLocalStorage == null){ //if local storage is null
            listArray = []; // create an empty/blank array
        } else {
            listArray = JSON.parse(getLocalStorage); //transforming JSON string to js object
        }
        listArray.push(userInput); // pushing or adding user data
        localStorage.setItem("New Book", JSON.stringify(listArray)) //transforming js object to JSON string
    });

    showBooks(); // calling showBooks function


    //function to show books inside ul
    function showBooks(){
        let getLocalStorage = localStorage.getItem("New Book"); //getting loaclstorage
        if(getLocalStorage == null){ //if local storage is null
            listArray = []; // create an empty/blank array
        } else {
            listArray = JSON.parse(getLocalStorage); //transforming JSON string to js object
        }
        const pendingNumb = document.querySelector(".pendingNumb");
        pendingNumb.textContent = listArray.length; //passing the length value in pendingNumb
        if(listArray.length > 0){ //if array length is greater than 0
            pending.classList.add('active'); //active the clearall button
        } else{
            pending.classList.remove('active'); //unactive the clearall button
        }
        let newBookTag = '';
        listArray.forEach((element, index) => {
            newBookTag += `<li> 
            <span class="name"> ${element} </span> 
            <span class = "delete" onclick="deleteBook(${index})"; >delete</span></li>`;
        });
    bookList.innerHTML = newBookTag; // adding new li tag inside ul tag
    inputBox.value = ''; //once book added leave the input field blank
}



    
    //delete book function
    function deleteBook(index) {
        let getLocalStorage = localStorage.getItem("New Book"); //getting loaclstorage
        listArray = JSON.parse(getLocalStorage);
        listArray.splice(index, 1);  //delete or remove the particular index li
        //after removing the li, update the localstorage again
        localStorage.setItem("New Book", JSON.stringify(listArray)) //transforming js object to JSON string
        showBooks();
    }

    //delete all tasks function
    deleteAllBtn.addEventListener('click', ()=>{
        listArray = []; //empty an array
    //after deleting all books, update the local storage again
        localStorage.setItem("New Book", JSON.stringify(listArray)); //transforming js object into a json string
        showBooks(); //calling showTasks function
    })



    
    //hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            bookList.style.display = "none";
        } else {
            bookList.style.display = "initial"
        }
    });

    

    //filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const books = bookList.getElementsByTagName('li');
        Array.from(books).forEach(function(book){
        const title =  book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block'; 
        } else {
            book.style.display = 'none';
        }
        });
    });


//tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');

    tabs.addEventListener('click', function(e){
        if( e.target.tagName == "LI"){
            const targetPanel = document.querySelector(e.target.dataset.target);
            Array.from(panels).forEach(function(panel){
                if(panel == targetPanel){
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        }
    });
    
    /*const list = document.querySelector('#book-list ul');
    //const lists = JSON.parse(localStorage.getItem('items')) || [];
    
   
//delete books
list.addEventListener('click', function(e){
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});


//add books
const addForm = document.forms['add-book'];


addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
   

    //create element
    const li = document.createElement("li");
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    //add content
    deleteBtn.textContent = 'delete'
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete'); 

    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li); 

    //localStorage.setItem('items', JSON.stringify(items));
    this.reset();

});

    
 /*
    let arrayList = Array.from(list);
    window.onload = () => {
        if (JSON.parse(localStorage.getItem("mylist")) != null) {
         arrayList = JSON.parse(localStorage.getItem("mylist"));
        }
        console.log(arrayList);
    };
   

    
/*
   localStorage.setItem("listkey", JSON.stringify(list));

   var storedArray = localStorage.getItem("listkey");
   list = JSON.parse(storedArray);*/

    

   /*
    if (localStorage.getItem("mylist") == null ) {
        localStorage.setItem("mylist", "[]");
    } 

    var old =  JSON.parse(localStorage.getItem("mylist"));
    old.push(list.appendChild(li) 
    );

    localStorage.setItem("mylist", JSON.stringify (old));

    function view() {
        if (localStorage.getItem("data")) != null {
            list.querySelectorAll('li') = JSON.parse(localStorage.getItem("mylist"))
        }
    }
    /*
    let m = [...list].map(function(lis){
        return {
            name: lis.bookName,
            delete: lis.deleteBtn
        }
    });
    localStorage.setItem('listkey', JSON.stringify(m));

    window.addEventListener('load', () => {
        const myList = JSON.parse(localStorage.getItem('listkey'));
    });
let data = JSON.parse(localStorage.getItem('mylist')) || [];
    data.push([
    value,
    'delete'
  ]);
  localStorage.setItem('mylist', JSON.stringify(data));


  window.addEventListener('load', function()
{
  const data = JSON.parse(localStorage.getItem('mylist'));
  
});
*/


/*
let data = JSON.parse(localStorage.getItem('todo')) || [];
  data.push([
    task,
    btn_selected_color
  ]);
  localStorage.setItem('todo', JSON.stringify(data));
}*/


//hide books
/*const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial"
    }
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
     const term = e.target.value.toLowerCase();
     const books = list.getElementsByTagName('li');
     Array.from(books).forEach(function(book){
       const title =  book.firstElementChild.textContent;
       if(title.toLowerCase().indexOf(term) != -1){
          book.style.display = 'block'; 
       } else {
           book.style.display = 'none';
       }
     });
});


//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if( e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});

/*var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function (btn) {
     btn.addEventListener('click', (e) =>{

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
     });
});*/






