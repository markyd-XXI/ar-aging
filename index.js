$(document).ready(function () {
    $('#ar-report').DataTable({
		processing: true,
		ajax: {
            url: './dataService.php',
            dataType: 'json',
        },
	});
});