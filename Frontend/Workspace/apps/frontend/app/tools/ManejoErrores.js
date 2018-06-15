Ext.define('Frontend.tools.ManejoErrores', {
	singleton: true,

	alternateClassName: [
		"ManejoErrores"
	],

	constructor: function () {
		this.verificarErrores();
	},

	verificarErrores: function () {
		var me = this;

		Ext.Error.handle = function (err) {
			me.mostrarError(err);
			return true;
		};
	},

	mostrarError: function (err) {

		var IsError = err.errorType != 'Ajax' || (err.errorType == 'Ajax' && err.errorHttpStatus == 500);

		var myMsg = Ext.create('Ext.window.MessageBox', {
			// set closeAction to 'destroy' if this instance is not
			// intended to be reused by the application
			closeAction: 'destroy'
			// buttonText: {
			// 	ok: 'OK',
			// 	yes: 'Achis',
			// 	no: 'No',
			// 	cancel: 'Cancel'
			// }
		}).show({
			title: IsError ? 'Error de Sistema...' : 'Mensaje de Sistema...',
			message: IsError ?
				Ext.String.format(
					'Se ha generado un error en el sistema, favor de intentar su operaci&oacute;n mas tarde o en su ' +
					'defecto enviar el detalle presentado a soporte con el objetivo de atenderle lo antes posible.<br /> <br />' +
					'{0}Desea enviar el error presentado a Soporte?',
					Ext.String.format("<strong>Mensaje de error:</strong> {0}<br/><br/>", err.errorMessage)) : err.errorMessage,
			buttons: IsError ? Ext.Msg.YESNO : Ext.Msg.OK,
			icon: IsError ? Ext.Msg.ERROR : Ext.Msg.WARNING,
			fn: function (btn) {
				if (btn === 'yes') {
					console.error('Enviar correo del error generado...', err);
				}
			}
		});
	}
});