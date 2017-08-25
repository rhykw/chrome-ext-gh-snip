chrome.extension.onRequest.addListener (
    function(request, sender, sendResponse) {
	if ( document.forms.new_issue == undefined || document.forms.new_issue.action == undefined ){
		return false;
	}
	var url = document.forms.new_issue.action + "/new?";
	var labels = Array.prototype.map.call(
		document.querySelectorAll("#new_issue div.labels>a.label") ,
		function(node){return "&"+encodeURIComponent("labels[]")+"="+encodeURIComponent(node.title);}
	).join("");
	var title = "title=" + encodeURIComponent( document.forms.new_issue.elements["issue_title"].value );
	var body = "body=" + encodeURIComponent( document.forms.new_issue.elements["issue_body"].value );
	window.open(url + title + labels + "&" + body, "_blank");
    }
)
