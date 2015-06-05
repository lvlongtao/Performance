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


function jump(count) {  
   window.setTimeout(function(){
   location.href="/ac.html";  
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
function drawchartbig(schart,metric,seriesdata,title,grepstr,start_time){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/multiquery',
       {
           metric : metric,
           start : start_time,
           grep_str : grepstr,
           anticache : Math.floor(Math.random()*1000)
           //end : ''
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
       creategroupChartbig('',divId,seriesdata,title);
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }
function drawchartbig_percent(schart,metric,seriesdata,title,grepstr,start_time){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/multiquery_percent',
       {
           metric : metric,
           start : start_time,
           grep_str : grepstr
           //end : ''
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
       creategroupChartbig('',divId,seriesdata,title);
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }
function drawchartbig_percent_his(schart,metric,seriesdata,grepstr,start_time,end_time){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/multiquery_percent',
       {
           metric : metric,
           start : start_time,
           grep_str : grepstr,
           end : end_time
       },
       function(data){
           $.each(data, function(i, series_data) {
            seriesdata[i] = {
              name: series_data['name'],
              data: series_data['data']
            };
          });
          var divId=schart
       document.getElementById(divId).innerHTML="";
       creategroupChartbig('',divId,seriesdata,"Us_hit_cache");
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
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
           legend : {
               maxHeight: 50       
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
