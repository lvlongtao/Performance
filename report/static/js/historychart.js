var image_src="<img style=\"width:50px;height:50px;position:relative;left:50%;top:50%;\" src=\"/static/img/loading40.gif\"/>"
function drawchartbig(schart,metric,seriesdata,title,agg,tag,start_time,end,base_metric){  
   console.log("start:",start_time,"end:",end);
   document.getElementById(schart).innerHTML = image_src;
   $.post('/get_history',
       {
           metric : metric,
           time : start_time,
           aggregator : agg,
           tag : tag,
           end : end,
           base_metric : base_metric,
           anticache : Math.floor(Math.random()*1000)
       },
       function(data){
          var divId=schart;
          creategroupChartbig('',divId,data,title);
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
                  enabled: true
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
           yAxis: [{
               title:{
                   text : yname
                   }
               },{
               endOnTick:true,
               min:0,
               max:1
           }],
           series: seriesdata
          });
   }
