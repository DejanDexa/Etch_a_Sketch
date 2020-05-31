let newSize;

function checkVal() {
    let gridVal = $("#myGrid").val();
    if (gridVal > 0 && gridVal < 64) {
        console.log("valid " + gridVal);
        newSize = gridVal;
        console.log(newSize);
    } else {
        newSize=16;
        console.log("invalid");
    }
};

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

let specGrid = function() {

    let specRowMaker = function() {
        for (i = 0; i < newSize; i++) {
            $("#table").append("<tr class='row'></tr>");
        }
    };
    specRowMaker();

    let specCellMaker = function() {
        for (i = 0; i < newSize; i++) {
            $(".row").append("<td class='cell'></td>")
        }   
    };

    specCellMaker();
    console.log("specGrid: " + newSize);
    
};

let gridMaker = function() {
    if (newSize > 1) {
        specGrid();
    } else {
        autoGrid();
    }
};

gridMaker();

$("#resetButton").click(function() {
    $("#table").empty();
    gridMaker();
});

$("table").on("mouseenter", ".cell", function() {
    $(this).css("background-color", $("#color").val());
});