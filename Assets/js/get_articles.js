
	$(document).ready(main);

	function main() {
		       $.ajax({
		      method:"GET",
              url : 'articlelist.json', 
              dataType : 'json', 
              cache : false, 
              success : function(data) {
                console.log(data);
                addArticles(data);
                },
              error: function(){
              	alert("error:no data available")
              }
              });

        function addArticles(obj) {
            for (i in obj.articles) { 
            	$("#articlescheckbox").append("<li><div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\""+obj.articles[i].title+"\" onclick=\"load('"+obj.articles[i].url+"')\"><label class=\"form-check-label\" for=\""+obj.articles[i].title+"\">"+obj.articles[i].title+"</label></div></li>");
            	$("#infobox"+obj.articles[i].number+" h5").text(obj.articles[i].title);
            	$("#infobox"+obj.articles[i].number+" #author").text("Author: "+obj.articles[i].author);
	           	$("#infobox"+obj.articles[i].number+" #authordescr").text("Author description: "+obj.articles[i].authordescription);
	           	$("#infobox"+obj.articles[i].number+" #date").text("Date of publication: "+obj.articles[i].date);
	           	$("#infobox"+obj.articles[i].number+" #source").text("Original source: "+obj.articles[i].originalsource);
	           	$("#infobox"+obj.articles[i].number+" #source").text("Original source: "+obj.articles[i].originalsource);
	           	$("#infobox"+obj.articles[i].number+" #journal").text("Journal: "+obj.articles[i].journal);			


          }
          	
   }
 }

          	
		function load(file) {
			$.ajax({
				method: 'GET',
				url: "articlelist.json",
				dataType:"json",
				success: function(d) {
				for (i in d.articles) {
					if (file == d.articles[i].url){
						var col = 0;
						var title = d.articles[i].box;
						if ($("#"+title).length) {
		            	$("#"+title).remove();
						}
						else {
		            	$("#Articles").append("<div class=\"col-"+col+" colonne_variabili\" id='"+title+"'></div>");
		            	$("#"+title).load(file);
							}
						if ($("#Articles").children().length == 1) {
							var col = 12;
							$(".colonne_variabili").attr("class","col-"+col+" colonne_variabili");
						} else if ($("#Articles").children().length == 2) {
							var col = 6;
							$(".colonne_variabili").attr("class","col-"+col+" colonne_variabili");
						} else if ($("#Articles").children().length == 3) {
							var col = 4;
							$(".colonne_variabili").attr("class","col-"+col+" colonne_variabili");
						}
						else if ($("#Articles").children().length > 3) {
							alert("Max number of documents exceeded");
						}
							}
				}
				},
				error: function() {
					alert('Could not load file '+file)
				}
			});
         }  