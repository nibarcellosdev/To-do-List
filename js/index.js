const $input = document.querySelector('#userInput');
const $buttonAddItem = document.querySelector('button');
const $ul = document.querySelector('#list');

function addItem() {
  if (!$input.value) return;
  var li = document.createElement('li');
  var liContent = document.createTextNode($input.value);
  li.appendChild(liContent);
  $ul.appendChild(li);
  li.addEventListener('click', function() {
    li.classList.toggle('done');
  })
  
  var dBtn = document.createElement('button');
  dBtn.appendChild(document.createTextNode('X'));
  li.appendChild(dBtn);
  dBtn.addEventListener('click', function() {
    li.classList.add('delete');
  });
  
  $input.value = '';
}


function addItemEnter(e) {
  if (e.keyCode === 13) {
     return addItem();
  }
  return '';
}



$buttonAddItem.addEventListener('click', addItem);
$input.addEventListener('keypress', addItemEnter);