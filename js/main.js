function valideRecherche() {
    let searchValue = document.getElementById("recherche").value;

    if(searchValue == "") {
        $("#myModalBadComment").modal('show');
    }
    else {
        $("#myModal").modal('show');
        
        $("#form-search").submit();
    }
}