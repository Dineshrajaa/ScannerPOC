var scannerMethods={
	/*keyUpListener:function(event){
		// Method to listen keyUp
		if(event.keyCode==13)
			$("#eventLister").append("Text:"+$("#firstTextbox").val()+"<br/>");

	},*/
	keyDownListener:function(event){
		// Method to listen keydown
			var eventLister=document.getElementById("eventLister");
			var firstTextbox=document.getElementById("firstTextbox");
			var t = document.createTextNode("BeforeText:"+firstTextbox.value+event.keyCode);
			eventLister.appendChild(t);
		if(event.keyCode==13){
			var eventLister=document.getElementById("eventLister");
			var firstTextbox=document.getElementById("firstTextbox");
			var t = document.createTextNode("AfterText:"+firstTextbox.value);
			eventLister.appendChild(t);
		}
			
	},
	clearContents:function(){
		document.getElementById("eventLister").innerHTML = "";// clear the displayed information
		document.getElementById("firstTextbox").value=""; // clear the text box value
		/*$("#eventLister").html(""); */
		$("#firstTextbox").val("").focus();
	}
};