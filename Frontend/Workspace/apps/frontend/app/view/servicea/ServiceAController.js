Ext.define('Frontend.view.servicea.ServiceAController', {
	extend: 'Ext.app.ViewController',

	requires: [

	],

	alias: 'controller.servicea',

	onRefresh: function() {
		try {
			var me = this;

			me.reloadData();
		} catch(e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	},

	onBeforeRender: function () {
		try {

			var me = this;

			Ext.Ajax.setDefaultHeaders({
				"Accept": "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			});

			AjaxHelpers.executeCall({

				url: 'http://sf-microservices.net:50605/serviceoauth/connect/token',
				method: 'POST',
				params: {
					client_id: 'socialnetworkclient',
					client_secret: 'secret',
					grant_type: 'password',
					username: 'japodaca@bts.com.mx',
					password: 'bts123!'
				}

			}).then(function (content) {

				Ext.Ajax.setDefaultHeaders({
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authorization": Ext.String.format("Bearer {0}", content.access_token)
				});

				me.reloadData();
				
			});

		} catch (e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	},

	reloadData: function() {
		try {
			
			var viewModel = this.getViewModel();
			
			AjaxHelpers.executeCall({

				url: 'http://sf-microservices.net:50605/servicea/api/employees',
				method: 'GET'

			}).then(function (content) {

				viewModel.setData({
					serverNode: content.servidor
				});
				viewModel.setStores({
					storeServiceA: {
						data: content.datos
					}
				});

			});

		} catch(e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	}

});