function init(){
	
	var id = "";
    var pw = "";
    
	$("#loginBox").fadeIn(1200, function() {}); // login box fade in
	$("#backgroundBlur").fadeIn(1200, function() {}); // login box fade in
	/**
	 * login button click event
	 */
	$("#loginBoxEnter").click(function(){
		id = $("#loginBoxID").val();
		pw = $("#loginBoxPW").val();
		
		if(id == "" || pw == ""){
			alert("Type correctly.");
			return;
		}
		
		$("#backgroundBlur").fadeOut(700, function() {});
		$("#loginBox").fadeOut(800, function() {  // login box fade out
			$("#mainPageArea").fadeIn(300, function() {});
		});
	});
	
	$("#loginBoxKeepLoginCheckImg").click(function(){
		var className = $(this).attr("class");
		if(className == "loginCheckImgUnchecked"){
			$(this).attr("class", "loginCheckImgChecked");
		} else {
			$(this).attr("class", "loginCheckImgUnchecked");
		}
	});
};
