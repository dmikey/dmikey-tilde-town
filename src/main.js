(function(){
	var meta = {
		sitename: 'SumoJS',
		description: 'This page built with <a href="http://www.github.com/dmikey/sumojs" target="_new">SumoJS</a>, the ultra light JavaScript Application Framework.',
		copyright: '© 2014 <a href="http://github.com/dmikey">Dmikey</a>'
	};

	var sumo = 'src/sumojs/main';

	define('header', [sumo], function(sumo) {
		return sumo.create({
			tag: 'dmikey-header',
			mixins: ['webcomponent', meta],
			template: 'header_template'
		});
	});

	define('social', [sumo], function(sumo) {
		return sumo.create({
			tag: 'dmikey-social',
			mixins: ['webcomponent'],
			template: 'social_template'
		});
	});

	define('primaryNav', [sumo], function(sumo) {
		return sumo.create({
			tag: 'dmikey-navigation',
			mixins: ['webcomponent'],
			template: 'primarynav_template'
		});
	});

	define('footer', [sumo], function(sumo) {
		return sumo.create({
			tag: 'dmikey-footer',
			mixins: ['webcomponent', meta],
			template: 'footer_template'
		});
	});

	define('view', [sumo], function(sumo){
		return sumo.create({
			mixins: ['component'],
			template: 'main_view'
		});
	});

	requirejs(['view', sumo, 'header', 'social', 'primaryNav', 'footer'], function(view, sumo, header, social, primaryNav, footer){
		sumo.ready(function(){

			//render main app
			var render_target = document.getElementById('render_target');

			//create new instance of main view
			var _view = new view();
			_view.renderInto(render_target);

			//register webcomponents
			new header();
			new social();
			new primaryNav();
			new footer();
		});
	});
}())


