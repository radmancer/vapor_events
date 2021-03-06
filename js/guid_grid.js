var firstColumnWidth = 25;
var lastColumnWidth = 0;

var firstRowHeight = 14;
var lastRowHeight = 0;

function shrinkVertical(){
    firstRowHeight--;
    lastRowHeight++;
    if(firstRowHeight == 0){
        firstRowHeight = 14;
        lastRowHeight = 0;
        for(var i = 1; i < 6; i++){
            var grid =  "display:-ms-grid;";
                grid += "display:grid;";
                grid += "-ms-grid-rows:30vh " + firstRowHeight + "vh 14vh 14vh 14vh 14vh " + lastRowHeight + "vh;";
                grid += "-ms-grid-columns:25vw 25vw 25vw 25vw 25vw;";
                grid += "grid-template:";
                grid += "'1_1   1_2   1_3   1_4   1_5' 30vh";
                grid += "'2_1   2_2   2_3   2_4   2_5' " + firstRowHeight + "vh";
                grid += "'3_1   3_2   3_3   3_4   3_5' 14vh";
                grid += "'4_1   4_2   4_3   4_4   4_5' 14vh";
                grid += "'5_1   5_2   5_3   5_4   5_5' 14vh";
                grid += "'6_1   6_2   6_3   6_4   6_5' 14vh";
                grid += "'7_1   7_2   7_3   7_4   7_5' " + lastRowHeight + "vh /";
                grid += "25vw   25vw   25vw   25vw   25vw;";
            document.getElementsByClassName("grid")[0].style.cssText = grid;
            document.getElementsByClassName("cell-2_" + i)[0].style.height = firstRowHeight + "vh";
            document.getElementsByClassName("cell-7_" + i)[0].style.height = lastRowHeight + "vh";
        }    
    }
    for(var i = 1; i < 6; i++){
        var grid =  "display:-ms-grid;";
            grid += "display:grid;";
            grid += "-ms-grid-rows:30vh " + firstRowHeight + "vh 14vh 14vh 14vh 14vh " + lastRowHeight + "vh;";
            grid += "-ms-grid-columns:25vw 25vw 25vw 25vw 25vw;";
            grid += "grid-template:";
            grid += "'1_1   1_2   1_3   1_4   1_5' 30vh";
            grid += "'2_1   2_2   2_3   2_4   2_5' " + firstRowHeight + "vh";
            grid += "'3_1   3_2   3_3   3_4   3_5' 14vh";
            grid += "'4_1   4_2   4_3   4_4   4_5' 14vh";
            grid += "'5_1   5_2   5_3   5_4   5_5' 14vh";
            grid += "'6_1   6_2   6_3   6_4   6_5' 14vh";
            grid += "'7_1   7_2   7_3   7_4   7_5' " + lastRowHeight + "vh /";
            grid += "25vw   25vw   25vw   25vw   25vw;";
        document.getElementsByClassName("grid")[0].style.cssText = grid;
        document.getElementsByClassName("cell-2_" + i)[0].style.height = firstRowHeight + "vh";
        document.getElementsByClassName("cell-7_" + i)[0].style.height = lastRowHeight + "vh";
    }
}

function shrinkHorizontal(){
    firstColumnWidth--;
    lastColumnWidth++;
    if(firstColumnWidth == 0){
        firstColumnWidth = 25;
        lastColumnWidth = 0;
        for(var i = 2; i < 8; i++){
            var grid =  "display:-ms-grid;";
                grid += "display:grid;";
                grid += "-ms-grid-rows:30vh 14vh 14vh 14vh 14vh 14vh 0vh;";
                grid += "-ms-grid-columns:25vw " + firstColumnWidth + "vw 25vw 25vw " + lastColumnWidth + "vw;";
                grid += "grid-template:";
                grid += "'1_1   1_2   1_3   1_4   1_5' 30vh";
                grid += "'2_1   2_2   2_3   2_4   2_5' 14vh";
                grid += "'3_1   3_2   3_3   3_4   3_5' 14vh";
                grid += "'4_1   4_2   4_3   4_4   4_5' 14vh";
                grid += "'5_1   5_2   5_3   5_4   5_5' 14vh";
                grid += "'6_1   6_2   6_3   6_4   6_5' 14vh";
                grid += "'7_1   7_2   7_3   7_4   7_5' 0vh /";
                grid += "25vw   " + firstColumnWidth + "vw   25vw   25vw   " + lastColumnWidth + "vw;";
            document.getElementsByClassName("grid")[0].style.cssText = grid;
            document.getElementsByClassName("cell-" + i + "_2")[0].style.width = firstColumnWidth + "vw";
            document.getElementsByClassName("cell-" + i + "_5")[0].style.width = lastColumnWidth + "vw";
        }      
    }
    for(var i = 1; i < 8; i++){
        var grid =  "display:-ms-grid;";
            grid += "display:grid;";
            grid += "-ms-grid-rows:30vh 14vh 14vh 14vh 14vh 14vh 0vh;";
            grid += "-ms-grid-columns:25vw " + firstColumnWidth + "vw 25vw 25vw " + lastColumnWidth + "vw;";
            grid += "grid-template:";
            grid += "'1_1   1_2   1_3   1_4   1_5' 30vh";
            grid += "'2_1   2_2   2_3   2_4   2_5' 14vh";
            grid += "'3_1   3_2   3_3   3_4   3_5' 14vh";
            grid += "'4_1   4_2   4_3   4_4   4_5' 14vh";
            grid += "'5_1   5_2   5_3   5_4   5_5' 14vh";
            grid += "'6_1   6_2   6_3   6_4   6_5' 14vh";
            grid += "'7_1   7_2   7_3   7_4   7_5' 0vh /";
            grid += "25vw   " + firstColumnWidth + "vw   25vw   25vw   " + lastColumnWidth + "vw;";
        document.getElementsByClassName("grid")[0].style.cssText = grid;
        document.getElementsByClassName("cell-" + i + "_2")[0].style.width = firstColumnWidth + "vw";
        document.getElementsByClassName("cell-" + i + "_5")[0].style.width = lastColumnWidth + "vw";
    }
}