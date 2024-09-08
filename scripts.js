document.getElementById('add-btn').addEventListener('click', function() {
    // Get the input values
    const ingredient = document.getElementById('ingredient').value;
    const direction = document.getElementById('direction').value;

    // Check if both fields are filled
    if (ingredient === '' || direction === '') {
        alert('Please fill in both the ingredient and the direction before adding.');
        return;  // Stop the function if any field is empty
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${ingredient}: ${direction}`;

    // Append to the recipe list
    document.getElementById('recipe-list').appendChild(listItem);

    // Clear the input fields
    document.getElementById('ingredient').value = '';
    document.getElementById('direction').value = '';
});
