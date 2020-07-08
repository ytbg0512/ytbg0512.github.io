const wrapper = Object.values(document.getElementsByClassName("wrapper"));

function filter() {
    let value, name, item, i;


    value = document.getElementById("searchbar").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for (i = 0; i < item.length; i++) {
        name = item[i].getElementsByClassName("list");

        if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
            item[i].style.display = "block";
            wrapper.forEach(element => element.style.marginBottom = "2%");
          } else {
            item[i].style.display = "none";
            wrapper.forEach(element => element.style.marginBottom = "0");
          }
    }
}