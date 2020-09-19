let overlay = ('.overlay');

$('.close').click(function() {
	$('.item1, item2').fadeOut()
});

$('.item2').click(function() {
	$(overlay).fadeIn()
});

$('.esc').click(function () {
	$(overlay).fadeOut()
});

$(overlay).click(function () {
	$(this).fadeOut()
});

$('.overlay .popup').click(function (e) {
	e.stopPropagation()
})

$(document).keydown(function (e) {
	if (e.keyCode == 27) {
		$(overlay).fadeOut()
	}
});

let popup2 = ('.popup2')

$('.image').click(function () {
	$(popup2).fadeIn()
});

$('.escp').click(function () {
	$(popup2).fadeOut()
});

$(popup2).click(function () {
	$(this).fadeOut()
});

$('.popup2 .inner').click(function (e) {
	e.stopPropagation()
});

$(document).keydown(function (e) {
	if (e.keyCode == 27) {
		$(popup2).fadeOut()
	}
})




for(var i = 1 ; i <= 31 ; i++) { 
	document.getElementById('day').innerHTML  += "<option>"+ i + "</option>"
 }

var months = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
for(var i = 0; i < months.length; i++) {
	document.getElementById('month').innerHTML += "<option>" + months[i] + '</option>'
}

for(var i = 1905; i <= 2020; i++) {
	document.getElementById('year').innerHTML += "<option>" + i + "</option>"
}


