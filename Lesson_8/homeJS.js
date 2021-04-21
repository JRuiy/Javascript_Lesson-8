button.onclick = function() {
	text.style.display = 'none';
}

title.onclick = function() {
	if(menu.classList.contains('block')){
		menu.classList.remove('block');
		menu.classList.add('hide');
	}else{
		menu.classList.remove('hide');
		menu.classList.add('block');
	}
}