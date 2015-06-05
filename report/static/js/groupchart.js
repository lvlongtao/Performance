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

function drawchartbig(schart,metric,seriesdata,title,grepstr){  
   document.getElementById(schart).innerHTML = image_src;
   console.log(mydate); 
   $.post('/multiquery',
       {
           metric : metric,
           start : $('#startTime').val(),
           end : $('#endTime').val(),
           grep_str : grepstr,
           anticache : Math.floor(Math.random()*1000)
           //end : ''
       },
       function(data){
          /*$.each(data, function(i, series_data) {
            seriesdata[i] = {
              name: series_data['tag'],
              data: series_data['data']
            };
          });
          */
          var divId=schart
       document.getElementById(divId).innerHTML="";
       creategroupChartbig('',divId,data,title);
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }

function drawtablebig(schart,metric,seriesdata,title,grepstr){  
   document.getElementById(schart).innerHTML = image_src;
   $.get('/idxquery',
       {
           metric : metric,
           start : $('#startTime').val(),
           end : $('#endTime').val(),
           grep_str : grepstr,
           anticache : Math.floor(Math.random()*1000)
           //end : ''
       },
       function(data){
          /*$.each(data, function(i, series_data) {
            seriesdata[i] = {
              name: series_data['tag'],
              data: series_data['data']
            };
          });
          */
          var divId=schart
       document.getElementById(divId).innerHTML="";
       document.getElementById(divId).innerHTML=data;
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }
function drawchartpointnum(schart,metric,seriesdata,title,grepstr,start_time){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/get_pointnum',
       {
           metric : metric,
           start : start_time,
           anticache : Math.floor(Math.random()*1000)
           //end : ''
       },
       function(data){
          /*$.each(data, function(i, series_data) {
            seriesdata[i] = {
              name: series_data['tag'],
              data: series_data['data']
            };
          });
          */
          var divId=schart
       document.getElementById(divId).innerHTML="";
       creategroupChartbig('',divId,data,title);
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }




function drawchartbig_percent(schart,metric,seriesdata,title,grepstr){  
   document.getElementById(schart).innerHTML = image_src;
   $.post('/multiquery_percent',
       {
           metric : metric,
           start : $('#startTime').val(),
           end : $('#endTime').val(),
           grep_str : grepstr
           //end : ''
       },
       function(data){
           /*$.each(data, function(i, series_data) {
            seriesdata[i] = {
              name: series_data['tag'],
              data: series_data['data']
            };
          });*/
          var divId=schart
       document.getElementById(divId).innerHTML="";
       creategroupChartbig('',divId,data,title);
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
           plotOptions: {
              spline: {
                 marker: {
                  enabled: false
                 }
              },
              column: {
                  states: {
                      hover: {
                         color: 'red'
                     }
                  },
                  events: {
                      click: function(event) {
                          console.log('this: ', this.name);
                          console.log('event: ', event.point.x);
                          result = 'Time: '+ event.point.x + '<br />';
                          result += 'Value: ' + event.point.y + '<br />';
                          if (event.point.text != undefined) {
                               result += event.point.text + '<br />'
                          }
                          $("body").append("<div id=datalist style='background:#f5f5f5; position:absolute; height:400px; width:1040px; top:350px; left:90px; overflow-x:auto; overflow-y:scroll; border-bottom:1px;'>" + result + "</div>");
                      }
                  }
              },

           },
           title: {
              text: title  
           },
           tooltip:{
               useHTML: true,
               valueDecimals:2,
               share: true,
               formatter: function(){
                   result = 'Time: '+ Highcharts.dateFormat('%Y/%m/%d-%H:%M:%S', this.x) + '<br />';
                   result += 'Value: ' + this.y + '<br />';
                   if (this.point.text != undefined) {
                       result += this.point.text + '<br />'
                   }
                   return result + this.series.name;
               } 
           },
            xAxis:{ 
                 type: 'datetime'
             },
            yAxis: {
                title: {
                    text: yname
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
           series: seriesdata
          });
   }



function drawchartcapacityreport_line(schart,x_name,x_axis,y_name,y_axis,seriesdata,title){  
   document.getElementById(schart).innerHTML = image_src;
   //console.log("==================================groupchart before=========================");
   //alert("========groupchart before==========");
   $.post('/get_capacity_report',
       {	
		   x_name : x_name,
		   y_name : y_name,
	   	   y_axis : y_axis,
           start_time : $('#startTime').val(),
           end_time : $('#endTime').val(),
           //metric : metric,
           //start : start_time,
           //anticache : Math.floor(Math.random()*1000)
           //end : ''
       },
       function(data){
         
             var x_data = data[0]['x_data'];
             var y_data = data[0]['y_data'];

            var divId=schart;
            console.log(x_data);
            console.log(y_data);
       document.getElementById(divId).innerHTML="";
       creategroupChartbig_line('',x_axis,divId,x_data,y_data,title);
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }

 function creategroupChartbig_line(yname,x_axis,divId,x_data,y_data,title){

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
              },
              column: {
                  states: {
                      hover: {
                         color: 'red'
                     }
                  },
                  events: {
                      click: function(event) {
                          console.log('this: ', this.name);
                          console.log('event: ', event.point.x);
                         // result = 'Time: '+ event.point.x + '<br />';
                          result += 'Value: ' + event.point.y + '<br />';
                          if (event.point.text != undefined) {
                               result += event.point.text + '<br />'
                          }
                          $("body").append("<div id=datalist style='background:#f5f5f5; position:absolute; height:400px; width:1040px; top:350px; left:90px; overflow-x:auto; overflow-y:scroll; border-bottom:1px;'>" + result + "</div>");
                      }
                  }
              },

           },
           title: {
              text: title  
           },
           tooltip:{
               useHTML: true,
               valueDecimals:2,
               share: true,
               formatter: function(){
                   //result = 'Time: '+ Highcharts.dateFormat('%Y/%m/%d-%H:%M:%S', this.x) + '<br />';
                   //result = 'X: '+  this.x + '<br />';
                   //result += 'Value: ' + this.y + '<br />';
                   result =  'X: ' + this.x + '<br />';
                   result += this.series.name +': ' +this.y + '<br />';
                   if (this.point.text != undefined) {
                       result += this.point.text + '<br />'
                   }
                   //return result + this.series.name;
                   return result;
               } 
           },
            xAxis:{ 
                title: {
                    text: yname 
                },
                 categories: x_data,
				  labels:{
                       rotation: 60,
                       y:40
                 } 
             },
            yAxis: {
                title: {
                    text: yname
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
           series: y_data
          });
   }













function drawchartcapacityreport_histogram(schart,x_name,x_axis,y_name,y_axis,seriesdata,title){  
   document.getElementById(schart).innerHTML = image_src;
   //console.log("==================================groupchart before=========================");
   //alert("========groupchart before==========");
   $.post('/get_capacity_report',
       {	
		   x_name : x_name,
		   y_name : y_name,
	   	   y_axis : y_axis,
           //metric : metric,
           start_time : $('#startTime').val(),
           end_time : $('#endTime').val(),
           //start : start_time,
           //anticache : Math.floor(Math.random()*1000)
           //end : ''
       },
       function(data){
         
             var x_data = data[0]['x_data'];
             var y_data = data[0]['y_data'];

            var divId=schart;
            console.log(x_data);
            console.log(y_data);
       document.getElementById(divId).innerHTML="";
       creategroupChartbig__histogram('',x_axis,divId,x_data,y_data,title);
       flag=flag+1;
       seriesdata[0]=null;
       seriesdata[1]=null;
       seriesdata[2]=null;
   },"json");
  //jump(30);
  //setTimeout(function(){drawchartbig1(schart,metric,agg,seriesdata,title,yname)},settime);
       }

 function creategroupChartbig__histogram(yname,x_axis,divId,x_data,y_data,title){

        chart = new Highcharts.Chart({
           chart: {
            type: 'column',
            renderTo : divId,
                  plotShadow: true,
                 shadow:true  
            },
           plotOptions: {
              spline: {
                 marker: {
                  enabled: false
                 }
              },
              column: {
                  states: {
                      hover: {
                         color: 'red'
                     }
                  },
                  events: {
                      click: function(event) {
                          console.log('this: ', this.name);
                          console.log('event: ', event.point.x);
                         // result = 'Time: '+ event.point.x + '<br />';
                          result += 'Value: ' + event.point.y + '<br />';
                          if (event.point.text != undefined) {
                               result += event.point.text + '<br />'
                          }
                          $("body").append("<div id=datalist style='background:#f5f5f5; position:absolute; height:400px; width:1040px; top:350px; left:90px; overflow-x:auto; overflow-y:scroll; border-bottom:1px;'>" + result + "</div>");
                      }
                  }
              },

           },
           title: {
              text: title  
           },
           tooltip:{
               useHTML: true,
               valueDecimals:2,
               share: true,
               formatter: function(){
                   //result = 'Time: '+ Highcharts.dateFormat('%Y/%m/%d-%H:%M:%S', this.x) + '<br />';
                   //result = 'X: '+  this.x + '<br />';
                   //result += 'Value: ' + this.y + '<br />';
                   result =  'X: ' + this.x + '<br />';
                   result += this.series.name +': ' +this.y + '<br />';
                   if (this.point.text != undefined) {
                       result += this.point.text + '<br />'
                   }
                   //return result + this.series.name;
                   return result;
               } 
           },
            xAxis:{ 
                title: {
                    text: yname 
                },
                 categories: x_data,
				  labels:{
                       rotation: 60,
                       y:40
                 } 
             },
            yAxis: {
                title: {
                    text: yname
                },
				 tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
           series: y_data
          });
   }
