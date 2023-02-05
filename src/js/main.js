// preloader
$(document).ready(function(){



});


// search box
var search_items_list = document.getElementById('search_items_list');
const search_input = document.getElementById('search_input');
var searched_items = document.getElementById('searched_items');
search_items_list.classList.add('d-none');

search_input.addEventListener('focus',function(){

        search_items_list.classList.remove('d-none');
});

search_input.addEventListener('blur',function(){
search_items_list.classList.add('d-none');

});

search_input.addEventListener('keyup',function(){
    searched_items.innerText = search_input.value;
});



// counter number 

$(document).ready(function(){

    $('.number_counter').counterUp({
        delay: 10,
        time: 1000
    });

});
