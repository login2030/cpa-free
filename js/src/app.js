/* global app, page, Handlebars, getContent, Materialize, sendStartForm, ouibounce, sendAjax */
window.addEventListener('load', e => {
	let pageContent = $('#js-content'),
		htmlBody = $('html, body'),
		body = $('body'),
		footer = $('#js-footer');
	/* Навигация */
	page('/', index);
	page('/start', start);
	page('/content', content);
	page('/reviews', reviews);
	page('/team', team);

	page();

	function index() {
		getContent(pageContent, $('#t-index'));
	}

	function start() {
		getContent(pageContent, $('#t-start'));
		sendStartForm($('#js-start-form'), $('#iframe-order-bro-click'), (form)=> {
			$('#popup-send-form').openModal();
			out.disable();
			sendAjax(form);
		});
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
		// descMenu.css({
		// 	width: descMenu.width()
		// });
	mobMenu.html(descMenu.html()).find('li a').addClass('js-mob-menu-item');
	btnMobMenu.sideNav();
	/* --- */

	/* Обрабатываем клики для всего сайта */
	$(window).click(e => {
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
	});
	/* --- */

	/* Политика конфиденциальности */
	$('#modal-trigger').leanModal();
	/* --- */
	
	/* Ставим реф ссылку на страницу благодарности */
	$('#popup-outbounce')
		.find('#js-start-form-popup input[name="thankyou_url"]').attr('value', app.data.setting.thankyou);
	/* --- */
	
	/* Попап при выходе с сайта */
	let out = ouibounce(document.getElementById('popup-outbounce'), {
		delay: 0,
		aggressive: true,
		callback: function() {
			$('#popup-outbounce').openModal();
		}
	});
	sendStartForm($('#js-start-form-popup'), $('#iframe-order-bro-click'), (form)=> {
		$('#popup-send-form').openModal();
		$('#popup-outbounce').closeModal();
		sendAjax(form);
	});
	/* --- */

});