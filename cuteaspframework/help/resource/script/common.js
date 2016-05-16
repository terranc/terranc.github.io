$(document).ready(function(){
	var menuData = $("ul#sitemap");
	var isDefault = $("body").attr("id") == "default";
	var dataSource = isDefault ? "resource/data/menu.html?" : "../../resource/data/menu.html?";
	$("div#menu").load(dataSource + Math.random(),null,function(){
		var currFolderName = getCurrentUrlFolderName();
		$("ul#" + currFolderName + "Tree").slideDown();
		$(this).find("h3").click(function(){
			var me = $(this);
			me.next("ul").slideToggle(this.getElementsByTagName("li").length*80);
		});
		if(isDefault){
			var defaultPaths = location.href.split("/");
			var defaultPath = "";
			for(var i = 0; i<defaultPaths.length-2;i++){
				defaultPath += defaultPaths[i] + "/";
			}
			$.each($("div#menu a"),function(i,item){
				item.setAttribute("href",item.getAttribute("href").replace($.browser.msie ? defaultPath : "../","manual/"));
			});
			$.each($("div#sitemap a"),function(i,item){
				item.setAttribute("href",item.getAttribute("href").replace($.browser.msie ? defaultPath : "../","manual/"));
			});
		}
	});
});
var getCurrentUrlFileName = function(){
	var currentUrl = location.href.toLowerCase();
	var currentFile = currentUrl.substring(currentUrl.lastIndexOf("/")+1);
	var currentFileName = currentFile.substring(0,currentFile.lastIndexOf("."));
	return currentFileName;
}
var getCurrentUrlFolderName = function(){
	var currentUrl = location.href.toLowerCase();
	var currentPath = currentUrl.substring(0,currentUrl.lastIndexOf("/"));
	var currentFolderName = currentPath.substring(currentPath.lastIndexOf("/")+1);
	return currentFolderName;
}