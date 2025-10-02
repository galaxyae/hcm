$(document).ready(function() {
    // Get all elements with the class "my-progress"
    var progressBars = $('.my-progress');

    // Loop through each progress bar
    progressBars.each(function(index, element) {
        var progressBar = $(element);

        // Get the percentage value from the data attribute
        var percentage = progressBar.data('percent');

        // Set the gradient stops based on the percentage value
        var colorStops = getColorStops(percentage);

        // Apply the gradient stops to the progress bar
        progressBar.css('background', 'linear-gradient(to right, ' + colorStops.join(', ') + ')');

        // Set the initial width of the progress bar to 0
        progressBar.css('width', '0%');

        // Add numbers or text inside the div
        progressBar.append('<div class="progress-text">' + percentage + '%</div>');

        // Animate the width of the progress bar
        progressBar.animate({
            'width': percentage + '%'
        }, 1000); // Adjust the duration as needed
    });
});

function getColorStops(percentage) {
    if (percentage >= 0 && percentage <= 25) {
        return ['#EE324B', '#EE324B'];
    } else if (percentage > 25 && percentage <= 50) {
        return ['#EE324B', '#EE324B', '#F66026'];
    } else if (percentage > 50 && percentage <= 75) {
        return ['#EE324B', '#F66026', '#F3B407'];
    } else if (percentage > 75 && percentage <= 100) {
        return ['#EE324B', '#F66026', '#F3B407', '#6FD913'];
    }
}
