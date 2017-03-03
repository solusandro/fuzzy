sap.ui.jsview("testui5.Someview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf testui5.Someview
	*/ 
	getControllerName : function() {
		return "testui5.Someview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf testui5.Someview
	*/ 
	createContent : function(oController) {

	}

});
