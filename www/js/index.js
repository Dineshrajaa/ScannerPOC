var scannerMethods={
	/*keyUpListener:function(event){
		// Method to listen keyUp
		if(event.keyCode==13)
			$("#eventLister").append("Text:"+$("#firstTextbox").val()+"<br/>");

	},*/
	keyDownListener:function(event){
		// Method to listen keydown
		if(event.keyCode==13){
			var eventLister=document.getElementById("eventLister");
			var firstTextbox=document.getElementById("firstTextbox");
			//$("#eventLister").append("Text:"+$("#firstTextbox").val()+"<br/>");
			var t = document.createTextNode("Text:"+firstTextbox.value);
			eventLister.appendChild(t);
		}
			
	},
	clearContents:function(){
		document.getElementById("eventLister").innerHTML = "";// clear the displayed information
		document.getElementById("firstTextbox").value=""; // clear the text box value
		/*$("#eventLister").html(""); 
		$("#firstTextbox").val("").focus();*/
	}
};