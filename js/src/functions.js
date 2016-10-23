/* global app, Handlebars */
/*
	<script src="js/plugins/modernizr.min.js" type="text/javascript"></script>
	<script src="https://cdn.jsdelivr.net/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
	<script src="https://cdn.jsdelivr.net/handlebarsjs/4.0.5/handlebars.min.js" type="text/javascript"></script>
	<script src="https://cdn.jsdelivr.net/page.js/1.6.3/page.min.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
*/
function getContent(page, tpl) {
	page.html(Handlebars.compile(tpl.html())(app.data));
}

function sendStartForm(form, iframe, func) {
	form.submit(e=> {
		let $form = $(e.target),
			$input = $form.find('.validate');
		for (let i = $input.length - 1; i >= 0; i--) {
			let val = $($input[i]).val();
			if (val === '' || val.indexOf('@') === -1) {
				$input[i].focus();
				return false;
			} else {
				e.target.submit();
				$input.val('').blur();
				if (iframe.find('iframe').length === 0) {
					iframe.html('<iframe src="http://cpapay.ru/ob/go/1/ifr/realtime" frameborder="0"></iframe>');
				}
				func();
			}
		}
	});
}

Handlebars.registerHelper('actionTab', function(id) {
    if (id === 1) {
        return 'active';
    } 
});
