function rechercher() {
    var input, filter, articles, title, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    articles = document.getElementsByClassName('article');
    for (i = 0; i < articles.length; i++) {
        title = articles[i].getElementsByClassName("titre")[0];
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            articles[i].style.display = "";
        } else {
            articles[i].style.display = "none";
        }
    }
}