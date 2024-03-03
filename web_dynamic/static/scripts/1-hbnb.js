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
});
