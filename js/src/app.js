/* global page, Handlebars, getContent, Materialize */
window.addEventListener('load', e=> {
	let pageContent = $('#js-content'),
		htmlBody = $('html, body'),
		footer = $('#js-footer');
	/* Навигация */
	page('/', index);
	page('/start', start);
	page('/content', content);
	page('/reviews', reviews);
	page('/team', team);
	
	page({
		hashbang: true
	});
	function index() {
		getContent(pageContent, $('#t-index'));
	}
	function start() {
		getContent(pageContent, $('#t-start'));
	}
	function content() {
		getContent(pageContent, $('#t-content'));
		$('#js-tabs').tabs();
	}
	function reviews() {
		getContent(pageContent, $('#t-reviews'));
	}
	function team() {
		getContent(pageContent, $('#t-team'));
	}
	/* --- */
	
	/* Меню */
	let descMenu = $('#js-desc-menu'),
		mobMenu = $('#js-mob-menu'),
		btnMobMenu = $('#js-btn-mob-menu');
	mobMenu.html(descMenu.html()).find('li a').addClass('js-mob-menu-item');
	btnMobMenu.sideNav();
	/* --- */
	
	/* Обрабатываем клики для всего сайта */
	$(window).click(e=> {
		let $el = $(e.target);
		if ($el.hasClass('js-index-video')) {
			$el.html('<iframe class="c-iframe-video" src="https://player.vimeo.com/video/182517337?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		}
		if ($el.hasClass('js-reviews-video')) {
			$el.html('<iframe class="c-iframe-video" src="https://player.vimeo.com/video/182519880?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		}
		if ($el.hasClass('js-mob-menu-item')) {
			btnMobMenu.sideNav('hide');
		}
		if ($el.hasClass('js-footer')) {
			e.preventDefault();
			htmlBody.animate({
				scrollTop: footer.offset().top
			}, 200, ()=> {
				let btn = footer.find('.waves-effect.waves-light.btn');
				setTimeout(()=> {
					btn.addClass('red');
					setTimeout(()=> {
						btn.removeClass('red');
					}, 3000);
				}, 500);
			});
		}
	});
	/* --- */
	
	/* Политика конфиденциальности */
	$('#modal-trigger').leanModal();
	/* --- */
});