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

function GetRelativeTime(offset) {
	var myDate = new Date();
    if (myDate.getDay() == 0) {
	var lastweek_end = myDate.getTime()/1000-6*86400-myDate.getHours()*3600-myDate.getMinutes()*60;
    }else {
	var lastweek_end = myDate.getTime()/1000-(myDate.getDay()-1)*86400-myDate.getHours()*3600-myDate.getMinutes()*60;
    }
	if (offset == undefined) {
		return lastweek_end;
    }
	offset = -offset;
    var times = 604800;
    return lastweek_end - offset * times;
}

$(document).ready(function(){

    $("#fasttimeSelect li a").click(function(){
       var offset = parseInt($(this).attr("offset"));
       var unit = $(this).attr("unit");
       $("#startTime").val(GetRelativeTime(offset, unit));
       $(this).addClass("btn btn-primary btn-xs").parent().addClass("active").siblings().removeClass("active").children().removeClass("btn btn-primary btn-xs");
       $("#endTime").val(GetRelativeTime(offset+1, unit));
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
