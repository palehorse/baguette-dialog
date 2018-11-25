(function( factory ) {
	if (typeof(require) === 'function') {
		module.exports = factory(jQuery);
	} else {
		factory(jQuery);
	}
})(function( $ ) {
	var _defaults = {
			latency: 110,
		}, _dialog, _opacity = 0.5,
		_cover = $('<div class="bagutte-dialog-cover"></dvi>').css({
					display: 'none',
					backgroundColor: '#000',
					opacity: 0,
				 }),
		_init = function() {
			_dialog.hide();
			_cover.insertAfter($('body'));
		},
		_showDialog = function(callback) {
			$('body').css({overflow: 'hidden'});
			_cover.css({
				zIndex: 10000,
				opacity: _opacity,
				height: '100%',
				width: '100%',
				position: 'fixed',
				top: 0,
				left: 0,
			}).fadeIn(_defaults.latency, function() {
				_dialog.css({
					zIndex: 20000,
					position: 'absolute',
					top: '15%',
					left: '50%',
					marginLeft: -(_dialog.outerWidth() / 2),
					//left: ($('body').outerWidth() - _dialog.outerWidth()) / 2,

				}).fadeIn(_defaults.latency, function() {
					if (typeof callback === 'function') {
						callback.call();
					}
				});
			});
	
			return _dialog;
		},
		_hideDialog = function(callback) {
			$('body').css({overflow: 'scroll'});
			_cover.fadeOut(_defaults.latency, function() {
				_cover.hide();
			});
			_dialog.fadeOut(_defaults.latency, function() {
				_dialog.hide();
				if (typeof callback === 'function') {
					callback.call();
				}
			});
			return _dialog;
		},
		_dismissDilog = function(callback) {
			_cover.off().on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				_hideDialog.call(null, callback);
			});
			return _dialog;
		},
		_methods = {
			'show': _showDialog,
			'hide': _hideDialog,
			'dismiss': _dismissDilog,
		};

	$.fn.dialog = function(params, callback) {
		if (typeof params === 'undefined') {
			params = {};
		}
		_dialog = $(this);
		switch (typeof params) {
			case 'object':
				$.extend(_defaults, params);
				_init.call();
				break;
			case 'string':
				if (typeof _methods[params] === 'function') {
					return _methods[params].call(null, callback);
				} else {
					console.error('Not supported method');
				}
				break;
			default:
				console.error('Parameters error!');
		}
	}
});