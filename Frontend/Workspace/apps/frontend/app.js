/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Frontend.Application',

    name: 'Frontend',

    requires: [
        // This will automatically load all classes in the Frontend namespace
        // so that application classes do not need to require each other.
        'Frontend.*',
        'Ext.*'
    ],

    // The name of the initial view to create.
    mainView: 'Frontend.view.main.Main'
});
