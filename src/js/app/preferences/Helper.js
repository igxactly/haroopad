define([
		'preferences/Helper.opt'
	], function(option) {

		var config = option.toJSON();

		var EditorTabView = Backbone.View.extend({
			el: '#helper-section',

			events: {
				'click input[name=youtube]': 'youtube',
				'click input[name=slideshare]': 'slideshare',
				'click input[name=vimeo]': 'vimeo',
				'click input[name=jsfiddle]': 'jsfiddle',
				'click input[name=tweet]': 'tweet',
				'click input[name=gist]': 'gist'
			},

			initialize: function() {
				this.$el.find('input[name=youtube]').prop('checked', config.youtube);
				this.$el.find('input[name=slideshare]').prop('checked', config.slideshare);
				this.$el.find('input[name=vimeo]').prop('checked', config.vimeo);
				this.$el.find('input[name=jsfiddle]').prop('checked', config.jsfiddle);
				this.$el.find('input[name=tweet]').prop('checked', config.tweet);
				this.$el.find('input[name=gist]').prop('checked', config.gist);
			},

			youtube: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('youtube', bool);
			},

			slideshare: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('slideshare', bool);
			},

			vimeo: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('vimeo', bool);
			},

			jsfiddle: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('jsfiddle', bool);
			},

			tweet: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('tweet', bool);
			},

			gist: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('gist', bool);
			}
		});

		return EditorTabView;

});