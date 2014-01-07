    
    // Very easy to use. Just chang tabID by your tab id.
    // When you click on any tab the change cycle is stopped. 
    // If you want to keep the changing then just comment out or delete 'clearInterval(tabCycle);' line
    
    var tabChange = function () {
			    var tabs = $('#tabID > li');
			    var active = tabs.filter('.active');
			    var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
			    // Use the Bootsrap tab show method
			    next.tab('show');
			};
			// Tab Cycle function
			var tabCycle = setInterval(tabChange, 5000);

			// Tab click event handler
			$('a').on('click', function (e) {
			    e.preventDefault();
			    // Stop the cycle
			    clearInterval(tabCycle);
			    // Show the clicked tabs associated tab-pane
			    $(this).tab('show');
			    // Start the cycle again in a predefined amount of time
			    setTimeout(function () {
			        //tabCycle = setInterval(tabChange, 5000);
			    }, 15000);
			});
