document.addEventListener('DOMContentLoaded', function(){
    
    const list = document.querySelector('#book-list ul');
    
   
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
const hideBox = document.querySelector('#hide');
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

});




