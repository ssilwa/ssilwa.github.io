function table_search() {
    var input, filter, ul, li, a, i, j;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("masterTable");
    li = ul.getElementsByClassName("blog_post");
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByClassName("knowledge")[0];
        sub_li_list = a.getElementsByTagName("li");
        hide = true;
        for (j = 0; j < sub_li_list.length; j++){
            tag = sub_li_list[j].innerText;
            if (tag.toUpperCase().indexOf(filter) > -1){
                hide = false;
            }
        }
        if (hide){
            li[i].style.display = "none";
        }
        else{
            li[i].style.display = "";
        }
    }
}