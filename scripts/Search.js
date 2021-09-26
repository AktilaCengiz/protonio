var searchInput = [
    {
        "key": "ProtonClient",
        "href": "#ProtonClient"
    },
    {
        "key": "ProtonHandler",
        "href": "#ProtonHandler"
    },
    {
        "key": "ProtonModule",
        "href": "#ProtonModule"
    }];


function search() {

    var txtValue = document.getElementById("myInput").value;

    if (txtValue !== "") {
        FilterPatientListBasedOnLiveSearch(txtValue);
    } else {
        document.getElementById("searchMenu").style.display = "none";
    }

}


function FilterPatientListBasedOnLiveSearch(filterVal) {

    filterVal = filterVal.toLowerCase();
    var trustArray = searchInput.map(function (data) {
        if (!filterVal || data.key.toLowerCase().indexOf(filterVal) !== -1) {
            return `<li><a onclick="display${data.key}()" class="dropdown-item" href="${data.href}"> ${data.key} </a></li>`
        }

    });

    var chgStr = trustArray.toString()
    var changedStr = chgStr.replaceAll(",", " ");

    document.getElementById("searchMenu").style.display = "block";
    document.getElementById("searchResults").innerHTML = changedStr;

}