/* global Handlebars */
function getContent(page, tpl) {
	page.html(Handlebars.compile(tpl.html())());
}