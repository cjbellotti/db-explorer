EnvMan.Views.DBExplorer = Backbone.View.extend({

	initialize : function () {

		this.template = swig.compile(getTemplate('templates/db-explorer.html'));

	},

	render : function () {

		this.$el.html(this.template());

	}

});