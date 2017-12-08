$(function () {
    $(".button").click(function () {
        if($(".prompt").hasClass("hide")){
            $(".prompt").removeClass("hide");
            $(this).val("点击关闭");
        }else{
            $(".prompt").addClass("hide");
            $(this).val("点击打开");
        }
    });

    $(".newProvince").click(function () {
        $(".box").eq(0).clone(true).appendTo("body").children(".deleteProvince").addClass("show");
    });
    $(".newWeight").click(function () {
        var boxNW = $(this).parent().parent();
        $(".box_n").eq(0).clone(true).appendTo(boxNW).children(".deleteWeight").addClass("show");
    });
    $(".deleteProvince").click(function () {
        $(this).parent().remove();
    });
    $(".deleteWeight").click(function () {
        $(this).parent().remove();
    });
    $(".deleteWeight").eq(0).css({
        display:"none"
    });
    $(".deleteProvince").eq(0).css({
        display:"none"
    });
    var arr = [];
    var arr1 = [];

    $(".sure").click(function () {
        var lenProvince=$(".province").length;
        var address = $(".address").val();
        var moneyAdd=$(".moneyAdd").val();
        for(var i=0;i<lenProvince;i++){
            console.log($(".province").eq(i).val());
            var arrPreovince = $(".province").eq(i).val().replace(/，/g,",").split(",");
            console.log(arrPreovince);
            arr[i] = arrPreovince;
            var lenWeight=$(".province").eq(i).parent().find(".box_weight").length;
            var arr2=[];
            for(var j=0;j<lenWeight;j++){
                var arrAll = [];
                arrAll[0]= $(".province").eq(i).parent().find(".box_weight").eq(j).val();
                arrAll[1]= $(".province").eq(i).parent().find(".box_money").eq(j).val();
               arr2[j]=arrAll;
            }
            arr1[i]=arr2;
        }
        console.log(address);
        console.log(moneyAdd);
        console.log(arr);
        console.log(arr1);
        var string="=";
            for(var i=0;i<arr.length;i++){
               if(i==arr.length-1){
                   string+= "IF(OR(";
                   for(var j=0;j<arr[i].length;j++){

                       if(j == arr[i].length-1){
                           string += address + "=\"" +arr[i][j]+"\"\)";
                           console.log(string);
                       }
                       else{
                           string += address + "=\"" +arr[i][j]+"\"\,";
                           console.log(string);
                       }
                   }
                   for(var k=0;k<arr1[i].length;k++){
                       console.log(k);
                       string += "\,if\("+moneyAdd+ "\<\=" +arr1[i][k][0]+"\,"+arr1[i][k][1];
                   }
                   for(var l=0;l<arr1[i].length;l++){
                       string+=")";
                   }
                   for(var n=0;n<=arr.length-1;n++){
                       string+=")";
                   }
                   console.log(string);
               }
               else{
                string+= "IF(OR(";
                for(var j=0;j<arr[i].length;j++){

                    if(j == arr[i].length-1){
                        string += address + "=\"" +arr[i][j]+"\"\)";
                        console.log(string);
                    }
                    else{
                        string += address + "=\"" +arr[i][j]+"\"\,";
                        console.log(string);
                    }
                }
                console.log(arr1);
                for(var k=0;k<arr1[i].length;k++){
                    console.log(string);
                   string += "\,if\("+moneyAdd+ "\<\=" +arr1[i][k][0]+"\,"+arr1[i][k][1];
                   console.log(arr1[i][k]);
                }

                for(var l=0;l<arr1[i].length;l++){
                    string+=")";
                }
                string+=",";
                console.log(string);
               }
            }
        $(".formula").val(string);

    })













});