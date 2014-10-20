(function(){
	var meta = {
		sitename: 'tilde.town/~dmikey'
	};

	var sumo = 'src/sumojs/release';

	define('header', [sumo], function(sumo) {
		return sumo.create({
			tag: 'dmikey-header',
			mixins: ['webcomponent', meta],
			template: 'header_template'
		});
	});

	define('view', [sumo, 'header'], function(sumo, header){
		return sumo.create({
			mixins: ['component'],
			template: 'main_view'
		});
	});

	requirejs(['view', sumo, 'header'], function(view, sumo, header){
		sumo.ready(function(){

			//render main app
			var render_target = document.getElementById('render_target');

			var _view = new view();
			_view.renderInto(render_target);

			//register webcomponents
			new header();
		});
	});
}())


