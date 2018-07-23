(function($){
	$(document).ready(function(){
		$('nav.main a.opener').click(function(e){
			e.preventDefault();
			e.stopPropagation();

			$(document.body).toggleClass('nav-open');
		});

		$(document.body).click(function(){
			$(this).removeClass('nav-open');
		});

		$(window).scroll(function(){
			if($(window).scrollTop() > 122){
				$(document.body).addClass('scrolled');
			}else{
				$(document.body).removeClass('scrolled');
			}
		});

		var f = function(){
			var s = ($(this).offset().top - $(window).scrollTop()) / 4;

			$(this).css({
				backgroundPosition: '50% ' + (s) + 'px'
			});
		}

		$('.parallax').each(function(){
			var obj = this;

			$(window).scroll(function(){
				f.call(obj);
			});

			f.call(obj);
		});

		$('#contact form').submit(function(e){
			e.preventDefault();
			var form = this;

			$.post('f.php', {
				name: $(this).find('input[name=name]').val(),
				email: $(this).find('input[name=email]').val(),
			}, function(response){
				if(response == '1'){
					$(form).find('.form-inner').animate({
						opacity: 0
					}, 300, function(){
						$('<p class="thanks"><span>Thanks, watch for the Digital HeartBeat newsletter in your mailbox soon.</span></p>').hide().appendTo(form).fadeIn(300);
					});
				}
			});
		});

		$('nav.main a[href*=#]').click(function(e){
			var p = $($(this).attr('href')).offset().top - ($('header').height() - 12);

			$('html, body').animate({
				scrollTop: p
			});
			e.preventDefault();
		});
	});
})(window.jQuery);