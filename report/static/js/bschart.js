var yy = new Date().getFullYear()
var MM = new Date().getMonth()+1
var dd = new Date().getDate()-1
var hh = new Date().getHours()
var mm = new Date().getMinutes()
var ss = new Date().getSeconds()    
var days_number = new Date(yy,MM-1,0).getDate();
if(dd>0){
var mydate = yy+"/"+MM+"/"+dd+"-"+hh+":"+mm+":"+ss;
}else{
var mydate = yy+"/"+(MM-1)+"/"+(dd+days_number)+"-"+hh+":"+mm+":"+ss
}


//var mydate1 = yy+"/"+MM+"/"+(dd+7)+"-"+(hh-3)+":"+mm+":"+ss

function jump(count) {  
   window.setTimeout(function(){
   location.href="/ac.html";  
   }, count * 1000);
}

var flag=0
var image_src="<img style=\"width:50px;height:50px;position:relative;left:50%;top:50%;\" src=\"/static/img/loading40.gif\"/>"
function Objectsize(obj){
     var size = 0, key;
     for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
                      }
    return size;
        }
function drawchartbig1(schart,metric,agg,seriesdata,title,yname,tag){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/multibsquery',
       {
           metric : metric,
           tag: tag,
           start : mydate,
           aggregator:agg,
           anticache : Math.floor(Math.random()*1000),
           end : ''
       },
       function(data){
           $.each(data, function(i, series_data) {
            seriesdata[i] = {
              name: ' ×î½üÆßÌì',
              data: series_data['data']
            };
          });
          var divId=schart
       document.getElementById(divId).innerHTML="";
       creategroupChartbig(yname,divId,seriesdata,title);
       flag=flag+1;
       seriesdata[0]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }

function drawchartbig2(schart,metric,agg,seriesdata,title,yname,tag){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/multibsmassquery',
       {
           metric : metric,
           tag: tag,
           start : mydate,
           aggregator:agg,
           end : ''
       },
       function(data){
           $.each(data, function(i, series_data) {
            seriesdata[i] = {
              name: series_data['tag'],
              data: series_data['data']
            };
          });
          var divId=schart
       document.getElementById(divId).innerHTML="";
       creategroupChartbig2(yname,divId,seriesdata,title);
       flag=flag+1;
       seriesdata[0]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }

   

function creategroupChartbig(yname,divId,seriesdata,title){

        chart = new Highcharts.Chart({
           chart: {
            type: 'spline',
            renderTo : divId,
                  plotShadow: true,
                 shadow:true  
            },
           plotOptions: {
              spline: {
                 marker: {
                  enabled: false
                         }
                      }
                        },     
           title: {
              text: title  
           },
           tooltip:{
               valueDecimals:2
           },
            xAxis:{ 
                 type: 'datetime'
             },
           yAxis: {
               title:{
                   text : yname
                   }
           },
           series: seriesdata
          });
   }
function creategroupChartbig2(yname,divId,seriesdata,title){

        chart = new Highcharts.Chart({
           chart: {
            type: 'spline',
            renderTo : divId,
                  plotShadow: true,
                 shadow:true  
            },
           plotOptions: {
              spline: {
                 marker: {
                  enabled: false
                         }
                      }
                        },     
           title: {
              text: title  
           },
           tooltip:{
               valueDecimals:2
           },
            xAxis:{ 
                 type: 'datetime'
             },
           yAxis: {
               title:{
                   text : yname
                   }
           },
           series: seriesdata
          });
   }
