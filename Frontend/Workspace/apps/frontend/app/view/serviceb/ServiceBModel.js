Ext.define('Frontend.view.serviceb.ServiceBModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.serviceb',

	data: {
		
	},

	stores: {
		storeServiceB: {
			fields: [
				{ name: 'id', type: 'int' },
				{ name: 'name', type: 'string' }
			],
			autoLoad: false
		}
	}

	
});