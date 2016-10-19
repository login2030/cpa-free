/* global page, Handlebars, getContent */
window.addEventListener('load', e=> {
	let pageContent = $('#js-content');
	
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
		getContent(pageContent, $('#t-index'));
	}
	function start() {
		getContent(pageContent, $('#t-start'));
	}
	function content() {
		getContent(pageContent, $('#t-content'));
	}
	function reviews() {
		getContent(pageContent, $('#t-reviews'));
	}
	function team() {
		getContent(pageContent, $('#t-team'));
	}
	function contacts() {
		getContent(pageContent, $('#t-contacts'));
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
		// Видео на главной
		if ($el.hasClass('js-index-video')) {
			$el.html('<iframe class="c-iframe-video" src="https://player.vimeo.com/video/182517337?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		}
		if ($el.hasClass('js-mob-menu-item')) {
			btnMobMenu.sideNav('hide');
		}
	});
	/* --- */
});