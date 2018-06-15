Ext.define('Frontend.view.serviceb.ServiceB', {
	extend: 'Ext.grid.Panel',

	xtype: 'grid-serviceb',

	requires: [
		'Frontend.view.serviceb.ServiceBController',
		'Frontend.view.serviceb.ServiceBModel'
	],

	controller: 'serviceb',
	viewModel: 'serviceb',

	title: 'Service B records',
	reference: 'gridServiceB',
	iconCls: 'x-fa fa-gear',

	columnLines: true,

	bind: {
		store: '{storeServiceB}'
	},

	columns: [
		{ text: 'ID', align: 'center', dataIndex: 'id' },
		{ text: 'Vehicle brand', dataIndex: 'name', flex: 1 }
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