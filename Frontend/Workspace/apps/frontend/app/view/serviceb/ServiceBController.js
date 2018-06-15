Ext.define('Frontend.view.serviceb.ServiceBController', {
	extend: 'Ext.app.ViewController',

	requires: [
		
	],

	alias: 'controller.serviceb',

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

				url: 'http://localhost:50605/serviceb/api/vehiclebrand',
				method: 'GET'

			}).then(function (content) {

				viewModel.setData({
					serverNode: content.servidor
				});
				viewModel.setStores({
					storeServiceB: {
						data: content.datos
					}
				});

			});

		} catch(e) {
			Ext.raise({ errorMessage: e.message, errorType: e.name, errorStack: e.stack });
		}
	}

});