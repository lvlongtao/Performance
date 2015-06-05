var yy = new Date().getFullYear()
var MM = new Date().getMonth()+1
var dd = new Date().getDate()-7
var hh = new Date().getHours()
var mm = new Date().getMinutes()
var ss = new Date().getSeconds()    
var days_number = new Date(yy,MM-1,0).getDate();
if(dd>0){
var mydate = yy+"/"+MM+"/"+dd+"-"+hh+":"+mm+":"+ss;
}else{
var mydate = yy+"/"+(MM-1)+"/"+(dd+days_number)+"-"+hh+":"+mm+":"+ss
}


var mydate1 = yy+"/"+MM+"/"+(dd+7)+"-"+(hh-3)+":"+mm+":"+ss

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
function drawchartbig(schart,module,metric,seriesdata,title,grepstr,start_time){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/vchange',
       {
           module : module,
           metric : metric,
           start : $('#startTime').val(),
           end : $('#endTime').val(),
           anticache : Math.floor(Math.random()*1000)
       },
       function(data){
           $.each(data[0], function(i, series_data) {
            seriesdata[i] = {
              name: series_data['tag'],
              data: series_data['data']
            };
          });
          var divId=schart
          var xrow = data[1];
       document.getElementById(divId).innerHTML="";
       creategroupChartbig('',divId,seriesdata,title,xrow);
       seriesdata[0]=null;
       seriesdata[1]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }

function drawchartbig2(schart,metric,agg,seriesdata,title,yname){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/multibsmassquery',
       {
           metric : metric,
           tag: '{'+'index_name=*'+'}',
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

   

function creategroupChartbig(yname,divId,seriesdata,title,xrow){

        chart = new Highcharts.Chart({
           chart: {
            type: 'spline',
            renderTo : divId,
                  plotShadow: true,
                 shadow:true  
            },
           /*plotOptions: {
              spline: {
                 marker: {
                  enabled: false
                         }
                      }
                        },*/     
           title: {
              text: title  
           },
           plotOptions : {
                series:{
                           connectNulls :true
                       }
                         },
           tooltip:{
               valueDecimals:2
           },
            xAxis:{ 
                 categories : xrow,
                 //type: 'category',
                 labels:{
                       rotation: 90,
                       y:70
                 }    
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
                 type: 'category'
             },
           yAxis: {
               title:{
                   text : yname
                   }
           },
           series: {
                       data : seriesdata,

                   }
          });
   }
