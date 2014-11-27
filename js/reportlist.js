$('#reportListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getreports.php?id='+id, function (data) {
		var reports = data.items;
		$.each(reports, function(index, employee) {
			$('#reportList').append('<li><a href="employeedetails.html?id=' + employee.idimagen + '">' +
					'<h4>' + employee.texto + '</h4>' +
					'<p>' + employee.artista + '</p>' +
					'<span class="ui-li-count">' + employee.estilo + '</span></a></li>');
		});
		$('#reportList').listview('refresh');
	});
});
