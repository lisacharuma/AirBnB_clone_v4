document.addEventListener('DOMContentLoaded', function () {
	const amenityDict = {};

	$('input[type="checkbox"]').change(function () {
		const amenityID = $(this).attr('id');
		const amenityName = $(this).attr('name');

		if ($(this).prop('checked')) {
			amenityDict[amenityID] = amenityName;
		} else {
			delete amenityDict[amenityID];
						            }

		updateAmenitiesList();
	});

	function updateAmenitiesList() {
		const amenitiesList = Object.values(amenityDict).join(', ');
		$('.popover h4').text(amenitiesList);
	}
	// get API status
	$.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
		if (data.status === 'OK') {
			$('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	});
});
