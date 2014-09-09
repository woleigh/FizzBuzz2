	$(document).ready(function(){
		// Make the Enter Key functional
		$(document).keydown(function(event){
		var numberAdd =$("input[name=search]").val();
		var textDelete = $('.main p');
		var mainAdd = $('.main')
    	if (event.which == 13){
    		event.preventDefault();
    	// Remove any displayed text when enter key is pressed
    		textDelete.remove();
		// Declare Overall Fizz Buzz App Conditions
			for (var i = 1; i <= numberAdd; i++){
	
				if (i % 5=== 0 && i % 3=== 0){
				//console.log("Fizz Buzz")
				mainAdd.append("<p>Fizz Buzz</p>");
				}
				else if (i % 5 === 0){
				//console.log ("buzz");
				mainAdd.append("<p>Buzz</p>");

				}
				else if (i % 3 === 0){
				//console.log ("fizz");
				mainAdd.append("<p>Fizz</p>")
				}
				else {
				//console.log(i);
				mainAdd.append("<p>" + i +"</p>");
				}

			}

		}
	});
});