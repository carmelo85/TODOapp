
var add = document.getElementById('todoButton');
add.addEventListener('click',addAnItem);

var del = document.getElementById('delButton');
del.addEventListener('click',delFunc);

var edit = document.getElementById('edButton');
edit.addEventListener('click',editFunc);

var editedContent = document.getElementById('editedContent');
editedContent.addEventListener('click',editFunc);



//Adding an item to the list
function addAnItem() {
    var userInput = document.inputForm.inputField.value;

        if(userInput === ''){

            alert('Please enter an item.');

        } else{

            var itemArray = [];
            itemArray = document.getElementById('todoListItems');
            itemArray.innerHTML += '<li class="listItem"><input type="checkbox">' + userInput + '</li>';
            document.getElementById('todoInput').value = '';
            applyClasses(itemArray);
        }
}


function keyCode(event) {
    var x = event.keyCode;
    if (x == 13) {
    addAnItem();
    }
}


function delFunc(){
    var x = [].slice.call(document.querySelectorAll('#todoListItems li'));
        x.filter(function(i){

            return i.firstChild.checked

        }).forEach(function(i){

            i.remove();

        })
}




function editFunc(){

 var x = [].slice.call(document.querySelectorAll('#todoListItems li'));
 x.filter(function(i){

 return i.firstChild.checked

 }).forEach(function(i){
     var oldItem = document.querySelector('li').value;
 i.innerHTML='<input type="text" class="editedItem"><button class="doneButton">Done</button>'
     replacedContent(x,oldItem);
 })

}

function replacedContent(x){
    var itemChange = document.getElementById('editedItem');
    itemChange.value;
    document.replace(itemChange,x);

}





