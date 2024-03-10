function changePrice() {
    // Get the zip code input value
    var zipCodeInput = document.getElementById('zipCodeInput');
    var zipCode = zipCodeInput.value.trim();

    // Get the error div
    var zipCodeError = document.getElementById('zipCodeError');

    // Validate the zip code format (you can customize this validation)
    var zipCodePattern = /^\d{5}$/;
    if (!zipCodePattern.test(zipCode)) {
        zipCodeError.innerHTML = 'Invalid zip code. Please enter a valid 5-digit zip code.';
        return;
    } else {
        zipCodeError.innerHTML = ''; // Clear the error message
    }

    // Get the price div
    var priceDiv = document.getElementById('priceDiv');

    // Define prices based on zip codes (you can customize this mapping)
    var prices = {
        '12345': '$15.00',
        '67890': '$20.00',
        '54321': '$25.00',
        // Add more zip codes and corresponding prices as needed
    };

    // Check if the entered zip code has a corresponding price
    if (prices.hasOwnProperty(zipCode)) {
        priceDiv.innerHTML = '<p>This is your price for zip code ' + zipCode + ': ' + prices[zipCode] + '</p>';
    } else {
        priceDiv.innerHTML = '<p>No price available for the entered zip code</p>';
    }
}