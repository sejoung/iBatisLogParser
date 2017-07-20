tipJS.model({
	__name : "app.parserModel",
	sampleText: "",
	savedCount: 0,
	getSampleText : function(){
		tipJS.debug("parseModel.getSampleText()");
		this.sampleText = "[DEBUG][2017/07/20 10:05:05] c.i.c.l.j.JakartaCommonsLoggingImpl [debug:27] {pstm-100007} Executing Statement: SELECT TEST1, TEST2 FROM DUAL WHERE COL1 = ? AND COL2 = ?";
		this.sampleText += "\n[DEBUG][2017/07/20 10:05:05] c.i.c.l.j.JakartaCommonsLoggingImpl [debug:27] {pstm-100007} Parameters: [CW, 9999]";
		return this.sampleText;
	},
	getParsedSQL : function(key) {
		return localStorage.getItem(key);
	},
	setParsedSQL : function(key, value) {
		localStorage.setItem(key, value);
	},
	getMaxKey : function() {
		return localStorage.length;
	},
	getListParsedSQL : function() {
		var list = [];
		$.each ( localStorage, function (k,v) {
			list[k] = v;
		});
		return list;
	},
	removeMaxParsedSQL : function (key) {
		var maxKey = this.getMaxKey();
 		localStorage.removeItem(parseInt(maxKey-1));
	},
	clear : function () {
		localStorage.clear();
	}
});