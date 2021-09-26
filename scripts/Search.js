// SearchBarScriptBy Venosa
var searchInput = [
    {
        "key": "ProtonClient",
        "parent": "class",
        "href": "#ProtonClient"
    },
    {
        "key": "ProtonHandler",
        "parent": "class",
        "href": "#ProtonHandler"
    },
    {
        "key": "ProtonModule",
        "parent": "class",
        "href": "#ProtonModule"
    },
    {
        "key": "MongooseProvider",
        "parent": "class",
        "href": "#MongooseProvider"
    },
    {
        "key": "MySqlProvider",
        "parent": "class",
        "href": "#MySqlProvider"
    },
    {
        "key": "SqlProvider",
        "parent": "class",
        "href": "#SqlProvider"
    },
    {
        "key": "ProtonClientOptions",
        "parent": "Typedefs",
        "href": "#ProtonClientOptions"
    },
    {
        "key": "ProtonModuleOptions",
        "parent": "Typedefs",
        "href": "#ProtonModuleOptions"
    },
    {
        "key": "ProtonHandlerOptions",
        "parent": "Typedefs",
        "href": "#ProtonHandlerOptions"
    }
];


function search() {

    var txtValue = document.getElementById("myInput").value;

    if (txtValue !== "") {
        Filter(txtValue);
    } else {
        document.getElementById("searchMenu").style.display = "none";
    }

}


function Filter(filterVal) {

    filterVal = filterVal.toLowerCase();
    var trustArray = searchInput.map(function (data) {
        if (!filterVal || data.key.toLowerCase().indexOf(filterVal) !== -1) {
            return `<li><a onclick="display${data.key}()" style="color: black!important;"  class="dropdown-item" href="${data.href}"><span class="badge bg-secondary">${data.parent} </span> ${data.key} </a></li>`
        }
    });

    var chgStr = trustArray.toString()
    var changedStr = chgStr.replaceAll(",", " ");

    document.getElementById("searchMenu").style.display = "block";
    document.getElementById("searchResults").innerHTML = changedStr;

}