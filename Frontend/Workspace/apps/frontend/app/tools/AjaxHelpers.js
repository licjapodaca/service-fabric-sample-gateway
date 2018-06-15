Ext.define('Frontend.tools.AjaxHelpers', {
	singleton: true,

	alternateClassName: [
		"AjaxHelpers"
	],

	constructor: function () {
		try {
			
		} catch (err) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	},

	promiseCallback: function (options, success, response, resolve) {
		if (success) {
			resolve(Ext.decode(response.responseText));
		} else {
			switch (response.status) {
				case 500:
					Ext.raise({ errorMessage: Ext.isEmpty(Ext.decode(response.responseText, true)) ? response : Ext.decode(response.responseText, true).ExceptionObject.Message, errorType: "Ajax", errorHttpStatus: response.status });
					break;
				case 0:
					Ext.raise({ errorMessage: Ext.String.format("No es posible localizar la ruta <strong>{0}</strong>", response.request.url), errorType: "Ajax", errorHttpStatus: response.status });
					break;
				default:
					Ext.raise({ errorMessage: Ext.isEmpty(Ext.decode(response.responseText, true)) ? response : Ext.decode(response.responseText, true).message, errorType: "Ajax", errorHttpStatus: response.status });
					break;
			}
		}
	},
	
	executeCall: function(params) {
		try {
			return new Ext.Promise(function (resolve, reject) {
				Ext.Ajax.request({
					url: params.url,
					method: params.method,
					jsonData: params.method == "POST" && !Ext.isEmpty(params.jsonData) ? params.jsonData : undefined,
					params: params.method == "POST" && !Ext.isEmpty(params.params) ? params.params : undefined,
					callback: function(options, success, response) { AjaxHelpers.promiseCallback(options, success, response, resolve); }
				});
			});
		} catch (e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	}
}, function() {
	Ext.Ajax.setDefaultHeaders({
		"Accept": "application/json",
		"Content-Type": "application/json"
	});
});