	$(document).ready(function(){
		// Make the Enter Key functional
		$(document).keydown(function(event){
		var numberAdd =$("input[name=search]").val();
    	if (event.which == 13){
    		event.preventDefault();
    	// Remove any displayed text when enter key is pressed
    		$('.main p').remove();
		// Declare Overall Fizz Buzz App Conditions
			for (var i = 1; i <= numberAdd; i++){
	
				if (i % 5=== 0 && i % 3=== 0){
				//console.log("Fizz Buzz")
				$('.main').append("<p>Fizz Buzz</p>");
				}
				else if (i % 5 === 0){
				//console.log ("buzz");
				$('.main').append("<p>Buzz</p>");

				}
				else if (i % 3 === 0){
				//console.log ("fizz");
				$('.main').append("<p>Fizz</p>")
				}
				else {
				//console.log(i);
				$('.main').append("<p>" + i +"</p>");
				}

			}

		}
	});
});