/* global app, Handlebars */
function getContent(page, tpl) {
	page.html(Handlebars.compile(tpl.html())(app.data));
}

function sendStartForm(form, iframe, func) {
	form.submit(e=> {
		e.preventDefault();
		let $form = $(e.target),
			$input = $form.find('.validate');
		for (let i = 0; i < $input.length; i++) {
			let val = $($input[i]).val();
			if (val === '' || val.indexOf('@') === -1) {
				$input[i].focus();
				return false;
			} else {
				e.target.submit();
			}
		}
		func($form);
	});
}
function sendAjax($form) {
	$.ajax({
		url: 'writetxt.php',
		type: 'POST',
		data: {
			name: $form.find('input[type=text]').val(),
			email: $form.find('input[type=email]').val()
		},
		success: (data)=> {
			console.log(data);
		},
		error: ()=> {
			console.log('Error');
		}
	});
}

Handlebars.registerHelper('actionTab', function(id) {
    if (id === 1) {
        return 'active';
    } 
});
