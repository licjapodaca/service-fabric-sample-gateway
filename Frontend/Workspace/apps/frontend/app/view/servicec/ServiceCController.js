Ext.define('Frontend.view.servicec.ServiceCController', {
	extend: 'Ext.app.ViewController',

	requires: [
		
	],

	alias: 'controller.servicec',

	onRefresh: function() {
		try {
			var me = this;
			me.reloadData();
		} catch(e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	},

	onBeforeRender: function() {
		try {
			var me = this;
			me.reloadData();
		} catch(e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	},

	reloadData: function() {
		try {
			
			var viewModel = this.getViewModel();
			
			AjaxHelpers.executeCall({

				url: 'http://localhost:50605/servicec/users/10',
				method: 'GET'

			}).then(function (content) {

				viewModel.setData({
					serverNode: content.servidor
				});
				viewModel.setStores({
					storeServiceC: {
						data: content.datos
					}
				});

			});

		} catch(e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	}

});