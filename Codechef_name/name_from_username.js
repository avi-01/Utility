var all_title = "";

$("body").find('div[title]').each(function() { 
if($(this).attr('class')=='user-name'){
		console.log($(this).children('a').children('span')[1]);
		var text= $(this).html()
		text="<b>"+$(this).attr('title')+"</b>"
// 		$(this).html(text)
		$(this).children('a').children('span')[1].innerHTML = text; 
    all_title += $(this).attr('title') + " ";}
});
console.log(all_title);