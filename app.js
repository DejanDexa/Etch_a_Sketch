let autoGrid = function() {

    let rowMaker = function() {
    for (i=0; i < 16; i++) {
        $("#table").append("<tr class='row'></tr>");
    }
};

rowMaker();

 let cellMaker = function () {
     for (i=0; i < 16; i++) {
         $(".row").append("<td class='cell'></td>")
     }
};
cellMaker();
console.log("autoGrid");
}

autoGrid();

$("table").on("mouseenter", ".cell", function() {
    $(this).css("background-color", "black");
});