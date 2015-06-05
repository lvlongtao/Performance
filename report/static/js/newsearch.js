var yy = new Date().getFullYear()
var MM = new Date().getMonth()+1
var dd = new Date().getDate()
var hh = new Date().getHours()-1
var mm = new Date().getMinutes()
var ss = new Date().getSeconds()    
if(hh>=0){
var mydate = yy+"/"+MM+"/"+dd+"-"+hh+":"+mm+":"+ss;
}else{
var mydate = yy+"/"+MM+"/"+(dd-1)+"-"+(24+hh)+":"+mm+":"+ss
}

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
};

function jump(count) {  
   window.setTimeout(function(){
   console.log(count);
   }, count * 1000);
}
function Objectsize(obj){
     var size = 0, key;
     for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
                      }
    return size;
        }
var flag=0
var image_src="<img style=\"width:50px;height:50px;position:relative;left:50%;top:50%;\" src=\"/static/img/loading40.gif\"/>"



function createChartDiv(divId){  
 var createDiv=document.createElement("div");  
 createDiv.id= divId;
 createDiv.style.width="900px";  
 createDiv.style.height="400px";  
 document.getElementsByTagName('p')[0].appendChild(createDiv);
 //createDiv.appendChild(creareDiv);  
} 

function addRow(index){
        var newTr = document.getElementById('tabledynamic').insertRow(index);
        newTr.id = "tr"+index
        //
        var newTd0 = newTr.insertCell();
        //设置列内容和属性
        newTd0.innerHTML = '<input type="button" id="tag'+index+'" onclick="remove_tag('+ index +')" class="btn btn-default" style="width: auto;margin-left:90px" value="'+$("#tagk1").val()+'='+$("#tagv1").val()+'">&nbsp&nbsp&nbsp <a onclick="remove_tag('+ index +')" href="##">x</a>'; 
}

function addRowmetric(indexmetric){
        var newTr = document.getElementById('Mtabledynamic').insertRow(indexmetric);
        newTr.id = "Mtr"+indexmetric
        //
        var newTd0 = newTr.insertCell();
        //设置列内容和属性
        newTd0.innerHTML = '<input type="button" style="width: auto;margin-left:90px" id="metric'+indexmetric+'" onclick="remove_metric('+indexmetric+');" class="btn btn-default"  value="'+$("#metric").val()+'">&nbsp&nbsp&nbsp <a onclick="remove_metric('+indexmetric+')" href="##">x</a>'; 
}


function randomChar(l) {
 var x="123456789poiuytrewqasdfghjklmnbvcxzQWERTYUIPLKJHGFDSAZXCVBNM";
 var tmp="";
 for(var i=0;i< l;i++) {
 tmp += x.charAt(Math.ceil(Math.random()*100000000)%x.length);
 }
 return tmp;
}

var index = 1
var indexmetric = 1

$("#nowtime").live("click",function(){
    date_now = new Date().Format();

    $("#endTime").val(date_now);

})

//add button
$("#addmetric").live("click",function(){
    
    if ($("#metric").val()){
    addRowmetric(indexmetric);
    indexmetric = indexmetric+ 1;
    $("#metric").val(null);
    }else{
    alert("please input metric name.");
    }

})

$("#add").live("click",function(){

    if ($("#tagk1").val() && $("#tagv1").val())
    {
     if ($("#tagk1").val()=="host"){  
        alert("you should not use this tagk.");
     }else{
        addRow(index);
        index = index + 1;
        $("#tagk1").val(null) 
        $("#tagv1").val(null)
        }
    }else if (!$("#tagk1").val()){  
    alert("please input tagk.");
    }else if (!$("#tagv1").val()){  
    alert("please input tagv.");
    };

})

//cancel button

function remove_metric(indexitem){
        $("#Mtr"+indexitem.toString()).remove(); 
        indexmetric = indexitem
}

function remove_tag(indexitem){
        $("#tr"+indexitem.toString()).remove(); 
        index = indexitem
}


//
$("#push_data").live("click",function() {
    if (!$("#metric").val()){
    alert("please input the metric");
    
    }else{

    document.getElementById("chart_area").innerHTML = "";
    document.getElementById("navgator").style.display = "";
    metric = new Array();
    //chose multy chart or metric
    if (document.getElementById("multychart").className == "active"){
    
        if ($("#metric3").val()){
        metric = [$("#metric3").val(),$("#metric2").val(),$("#metric1").val(),$("#metric").val()]
        }else if ($("#metric2").val()){
        metric = [$("#metric2").val(),$("#metric1").val(),$("#metric").val()]
        }else if ($("#metric1").val()){
        metric = [$("#metric1").val(),$("#metric").val()]
        }else if ($("#metric").val()){
        metric = [$("#metric").val()]
        }else{
        alert("please input metric info..");
        }
        flag = 0
    }else if(document.getElementById("multymetric").className == "active"){
        if ($("#metric3").val()){
        metric = [$("#metric3").val() + "|" + $("#metric2").val() + "|" + $("#metric1").val() + "|" + $("#metric").val()]
        }else if ($("#metric2").val()){
        metric = [$("#metric2").val() + "|" + $("#metric1").val() + "|" + $("#metric").val()]
        }else if ($("#metric1").val()){
        metric = [$("#metric1").val() + "|" + $("#metric").val()]
        }else if ($("#metric").val()){
        metric = [$("#metric").val()]
        }else{
        alert("please input metric info..");
        }
        flag = 1
    }

    //get chart
    for(i in metric){
        var title=metric[i];
        if ($("#tag3").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val() +","+$("#tag1").val() +"," + $("#tag2").val()  + "," +$("#tag3").val() ;
        }else if ($("#tag2").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val() +","+$("#tag1").val() +"," + $("#tag2").val() ;
        }else if ($("#tag1").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val() +","+$("#tag1").val()  ;
        }else if ($("#tagk1").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val();
        }else{
            var tag = "";
        }
        if (document.getElementById("downsample").checked){
        var agg = $('#agg').val() + ":" + $("#downvalue").val() + "-" + $("#downagg").val();
        }else{
        var agg = $('#agg').val();
        }
        var start = $('#startTime').val();
        var end = $('#endTime').val();
        if (!document.getElementById(title)){
            createChartDiv(title);
        };
        document.getElementById(title).innerHTML = image_src;
        $.ajax({
            type : 'POST',
            url: '/search',
            data:
           {
               metric : title,
               tag: "{" + tag + "}",
               agg: agg,
               start : start,
               flag : flag,
               end : end
           },
            async:false,  
            success:function(data){
           console.log(title);
           creategroupChartbig('',title,data,title);
           },
            dataType: "json"
        });
    }//end for
  }//end if

});
//
$("#multy_push_data").live("click",function() {
    document.getElementById("chart_area").innerHTML = "";
    document.getElementById("navgator").style.display = "";
    metric = new Array();
    
    
    var flag = 0
    if ($("#metric3").val()){
    metric = [$("#metric3").val() + "|" + $("#metric2").val() + "|" + $("#metric1").val() + "|" + $("#metric").val()]
    flag = 1
    }else if ($("#metric2").val()){
    metric = [$("#metric2").val() + "|" + $("#metric1").val() + "|" + $("#metric").val()]
    flag = 1
    }else if ($("#metric1").val()){
    metric = [$("#metric1").val() + "|" + $("#metric").val()]
    flag = 1
    }else if ($("#metric").val()){
    metric = [$("#metric").val()]
    flag = 1
    }else{
    alert("please input metric info..");
    }
    for(i in metric){
        var title=metric[i];
        if ($("#tag3").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val() +","+$("#tag1").val() +"," + $("#tag2").val()  + "," +$("#tag3").val() ;
        }else if ($("#tag2").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val() +","+$("#tag1").val() +"," + $("#tag2").val() ;
        }else if ($("#tag1").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val() +","+$("#tag1").val()  ;
        }else if ($("#tagk1").val()){
            var tag = $("#tagk1").val() + "=" + $("#tagv1").val();
        }else{
            var tag = "";
        }
        if (document.getElementById("downsample").checked){
        var agg = $('#agg').val() + ":" + $("#downvalue").val() + "-" + $("#downagg").val();
        }else{
        var agg = $('#agg').val();
        }
        var start = $('#startTime').val();
        var end = $('#endTime').val();
        if (!document.getElementById(title)){
            createChartDiv(title);
        };
        document.getElementById(title).innerHTML = image_src;
        $.ajax({
            type : 'POST',
            url: '/search',
            data:
           {
               metric : title,
               tag: "{" + tag + "}",
               agg: agg,
               start : start,
               flag : flag,
               end : end
           },
            async:false,  
            success:function(data){
            
           console.log(title);
           creategroupChartbig('',title,data,title);
           },
            dataType: "json"
        });
    }   
});




//
   function creategroupChartbig(yname,divId,seriesdata,title){
        onlinechanges = seriesdata.pop();
        onlinechanges.events = {
            mouseOver: function() {
                console.log(this);
            },
            mouseOut: function() {
                this.options.color = 'green';
                this.color = 'green';
            }
        }
        seriesdata.push(onlinechanges);

        chart = new Highcharts.Chart({
           chart: {
            type: 'spline',
            renderTo : divId
            },
           title: {
              text: title  
           },
           plotOptions: {
              spline: {
                 marker: {
                    enable:false,
                    radius: 0
                    }
                },
                column: {
                    states: {
                        hover: {
                            color: 'red'
                        }
                    }
                }
           },
           tooltip:{
               useHTML: true,
               valueDecimals:2,
               formatter: function() {
                    result = 'Time: '+ Highcharts.dateFormat('%Y/%m/%d-%H:%M:%S', this.x) + '<br />';
                    result += 'Value: ' + this.y + '<br />';
                    if (this.point.text != undefined) {
                        result += this.point.text + '<br />'
                    }
                    return result + this.series.name;
                }
           },
           xAxis:{ 
               type: 'datetime',
             },
           yAxis: [{
               title:{
                   text : yname
                   }
               },{
               endOnTick:true,
               min:0,
               max:2,
           }],
           series: seriesdata
          });
   }
