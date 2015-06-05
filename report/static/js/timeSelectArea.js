Date.prototype.Format = function (fmt) {
    if (fmt == undefined) {
       fmt = "yyyy/MM/dd-hh:mm:ss";
       }
       var o = {
           "M+": this.getMonth() + 1,
           "d+": this.getDate(),
           "h+": this.getHours(),
           "m+": this.getMinutes(),
           "s+": this.getSeconds(),
           "q+": Math.floor((this.getMonth() + 3) / 3),
           "S": this.getMilliseconds()
       };
       if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
       for (var k in o)
       if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
       return fmt;
} 

function GetRelativeTime(offset, unit) {
    if (offset == undefined) {
        return new Date().Format()
    }
    var times = 1;
    offset = - offset;
    switch (unit) {
        case "m":
            times = 60;
            break;
        case "h":
            times = 3600;
            break;
        case "d":
            times = 86400;
            break;
        case "w":
            times = 604800;
            break;
    }
    return new Date(new Date() - offset * times * 1000).Format();
}

$(document).ready(function(){

    $("#fasttimeSelect li a").click(function(){
       var offset = parseInt($(this).attr("offset"));
       var unit = $(this).attr("unit");
       $("#startTime").val(GetRelativeTime(offset, unit));
       $(this).addClass("btn btn-primary btn-xs").parent().addClass("active").siblings().removeClass("active").children().removeClass("btn btn-primary btn-xs");
       $("#endTime").val(GetRelativeTime(undefined, unit));
       $("#submit_data").click();
    });
    
    $("#navlist a").click(function(){
       $(this).addClass("active").siblings().removeClass("active");
    });
    $("#startTime").focus(function() {
        WdatePicker({
            dateFmt:'yyyy/MM/dd-HH:mm:ss',
            onpicked: function() {
                console.log('hello');
               $("#submit_data").click();
            }
        });
    });

    $("#endTime").focus(function() {
        WdatePicker({
            dateFmt:'yyyy/MM/dd-HH:mm:ss',
            minDate:'#F{$dp.$D(\'startTime\')}',
            onpicked: function() {
               $("#submit_data").click();
            }
        });
    });
});
