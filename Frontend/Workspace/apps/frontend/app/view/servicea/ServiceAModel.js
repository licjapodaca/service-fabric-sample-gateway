Ext.define('Frontend.view.servicea.ServiceAModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.servicea',

	data: {
		//serverNode: ""
	},

	stores: {
		storeServiceA: {
			fields: [
				{ name: 'id', type: 'int' },
				{ name: 'name', type: 'string' }
			],
			autoLoad: false
		}
	}

	
});