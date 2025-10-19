document.addEventListener("DOMContentLoaded", function(){
    alert("Wait, Do not close current tab.")
})


// copy clipboard not working, work on it!
function myfunction(){
    var svg_img2 = document.getElementById("link_text");

    svg_img2.select();
    svg_img2.setSelectionRange((a, z) || (0, 999999));

    navigator.clipboard.writeText(link_text.value);
    alert("Copied the text: " + link_text.value);
}
