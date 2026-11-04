document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("search-btn");
    const input = document.getElementById("search-input");
    const result = document.getElementById("result");

    button.addEventListener("click", function () {
        const query = encodeURIComponent(input.value.trim());

        fetch("superheroes.php?query=" + query)
        .then(response => response.text())
        .then(data => { result.innerHTML = data; })
        .catch(error => console.error("Error:", error));
    });
});