document.getElementById('add-btn').addEventListener('click', function() {
    // Get the input values
    const ingredient = document.getElementById('ingredient').value;
    const direction = document.getElementById('direction').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${ingredient}: ${direction}`;

    // Append to the recipe list
    document.getElementById('recipe-list').appendChild(listItem);

    // Clear the input fields
    document.getElementById('ingredient').value = '';
    document.getElementById('direction').value = '';
});
