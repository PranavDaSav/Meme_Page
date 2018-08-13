document.getElementById('BUTTON_animeMemes').onclick = function() {
  window.open(
   'https://www.google.com/search?tbm=isch&q=fate+stay+night+memes&backchip=online_chips:lancer&chips=q:fate+stay+night+memes&sa=X&ved=0ahUKEwjh_Nj40eLcAhWPw4MKHQ2wCzEQ3VYIJCgA&biw=1280&bih=590&dpr=1.5')
  '_blank'

};

document.getElementById('BUTTON_scaryMemes').onclick = function() {
  window.open(
   'https://www.google.com/search?q=scary+memes&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXl8vB3eLcAhUn6IMKHbVWCjUQ_AUICigB&biw=1280&bih=590')
  '_blank'
};

document.getElementById('BUTTON_animalMemes').onclick = function() {
  window.open(
   'https://www.google.com/search?q=animal+memes&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiak_X03-LcAhWr7IMKHaLkDDcQ_AUICigB&biw=1280&bih=590')
  '_blank';
};


// whn button is clicked, open google in new tab
// when button is clicked, open google searh of input

document.getElementById('BUTTON_search').onclick = function() {
   var search = document.getElementById('INPUT_search').value;
   alert(search);

   window.open(
    'https://www.google.com/search?q=' + search)
   '_blank';
}
