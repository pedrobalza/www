var serviceURL = "http://localhost/appempleados/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.idimagen + '">' +
					'<img src="pics/' + employee.foto + '"/>' +
					'<h4>' + employee.texto + '</h4>' +
					'<p>' + employee.artista + '</p>' +
					'<span class="ui-li-count">' + employee.estilo + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}