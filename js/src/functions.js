/* global Handlebars */
function getContent(loader, page, tpl) {
	page.html(loader);
	page.html(Handlebars.compile(tpl.html())());
	// setTimeout(()=> {
	// }, 1000);
}