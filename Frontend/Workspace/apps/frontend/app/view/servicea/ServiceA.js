Ext.define('Frontend.view.servicea.ServiceA', {
	extend: 'Ext.grid.Panel',

	xtype: 'grid-servicea',

	requires: [
		'Frontend.view.servicea.ServiceAController',
		'Frontend.view.servicea.ServiceAModel'
	],

	controller: 'servicea',
	viewModel: 'servicea',

	reference: 'gridServiceA',
	iconCls: 'x-fa fa-gear',

	columnLines: true,

	bind: {
		title: 'Service A records from server [{serverNode}]',
		store: '{storeServiceA}'
	},

	columns: [
		{ text: 'ID', align: 'center', dataIndex: 'id' },
		{ text: 'Employee Name', dataIndex: 'name', flex: 1 }
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