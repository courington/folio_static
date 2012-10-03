var offCanvas = function(){
	$('a.menu-button').click(function(){
		$('[role="navigation"]').toggleClass('active-nav');
		$('[role="main"]').toggleClass('active-nav');
	});
}