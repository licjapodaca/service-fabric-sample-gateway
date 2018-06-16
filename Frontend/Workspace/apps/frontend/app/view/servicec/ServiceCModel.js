Ext.define('Frontend.view.servicec.ServiceCModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.servicec',

	data: {
		
	},

	stores: {
		storeServiceC: {
			fields: [
				{ name: 'firstName', type: 'string' },
				{ name: 'lastName', type: 'string' },
				{ name: 'username', type: 'string' },
				{ name: 'email', type: 'string' }
			],
			autoLoad: false
		}
	}

	
});