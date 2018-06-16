Ext.define('Frontend.view.servicec.ServiceC', {
	extend: 'Ext.grid.Panel',

	xtype: 'grid-servicec',

	requires: [
		'Frontend.view.servicec.ServiceCController',
		'Frontend.view.servicec.ServiceCModel'
	],

	controller: 'servicec',
	viewModel: 'servicec',

	title: 'Service C records',
	reference: 'gridServiceC',
	iconCls: 'x-fa fa-gear',

	columnLines: true,

	bind: {
		store: '{storeServiceC}'
	},

	columns: [
		{ text: 'First Name', align: 'center', dataIndex: 'firstName' },
		{ text: 'Last Name', align: 'center', dataIndex: 'lastName' },
		{ text: 'User Name', align: 'center', dataIndex: 'username' },
		{ text: 'Email', align: 'center', dataIndex: 'email' }
	],

	listeners: {
		beforerender: 'onBeforeRender'
	},

	tbar: {
		overflowHandler: 'menu',
		defaults: {
			xtype: 'button'
		},
		items: [{
			itemId: 'btnRefrescar',
			text: 'Reload',
			iconCls: 'x-fa fa-refresh',
			handler: 'onRefresh'
		}]
	}

});