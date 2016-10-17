/* global page, Handlebars, getContent */
window.addEventListener('load', e=> {
	let pageContent = $('#js-content');
	
	let preloader = $('#t-preloader').html();
	
	/* Навигация */
	page('/', index);
	page('/start', start);
	page('/content', content);
	page('/reviews', reviews);
	page('/team', team);
	page('/contacts', contacts);
	
	page({
		hashbang: true
	});
	
	function index() {
		// let tPage = Handlebars.compile($('#t-index').html());
		// pageContent.html(tPage());
		getContent(preloader, pageContent, $('#t-index'));
	}
	function start() {
		// let tPage = Handlebars.compile($('#t-start').html());
		// pageContent.html(tPage());
		getContent(preloader, pageContent, $('#t-start'));
	}
	function content() {
		// let tPage = Handlebars.compile($('#t-content').html());
		// pageContent.html(tPage());
		getContent(preloader, pageContent, $('#t-content'));
	}
	function reviews() {
		// let tPage = Handlebars.compile($('#t-reviews').html());
		// pageContent.html(tPage());
		getContent(preloader, pageContent, $('#t-reviews'));
	}
	function team() {
		// let tPage = Handlebars.compile($('#t-team').html());
		// pageContent.html(tPage());
		getContent(preloader, pageContent, $('#t-team'));
	}
	function contacts() {
		// let tPage = Handlebars.compile($('#t-contacts').html());
		// pageContent.html(tPage());
		getContent(preloader, pageContent, $('#t-contacts'));
	}
	/* --- */
	
	/* Меню */
	let descMenu = $('#js-desc-menu'),
		mobMenu = $('#js-mob-menu'),
		btnMobMenu = $('#js-btn-mob-menu');
	mobMenu.html(descMenu.html());
	btnMobMenu.sideNav();
	/* --- */
	
	/* Обрабатываем клики */
	$(window).click(e=> {
		let $el = $(e.target);
		// Видео на главной
		if ($el.hasClass('js-index-video')) {
			$el.html('<iframe class="c-iframe-video" src="https://player.vimeo.com/video/182517337?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		}
	});
	/* --- */
});