$(document).ready(function(){
    var yy = new Date().getFullYear()
    var MM = new Date().getMonth()+1
    var dd = new Date().getDate()
    var hh = new Date().getHours()
    var mm = new Date().getMinutes()
    var ss = new Date().getSeconds()    
    var days_number = new Date(yy,MM-1,0).getDate();
    if(dd>0){
    var mydate = yy+"/"+MM+"/"+dd+"-"+hh+":"+mm+":"+ss;
    }else{
    var mydate = yy+"/"+(MM-1)+"/"+(dd+days_number)+"-"+hh+":"+mm+":"+ss
    }

    function formatDate(now)   {    
                  var   year=now.getYear();     
                  var   month=now.getMonth()+1;     
                  var   date=now.getDate();     
                  var   hour=now.getHours();     
                  var   minute=now.getMinutes();     
                  var   second=now.getSeconds();     
                  return  date+"."+hour;     
    }  

    function getTime(timer){
      var d=new Date(timer);     
      return formatDate(d);
    }
 
    function getRate(obj) {
        var num = (obj[obj.length - 1] - obj[0]) / obj[0]*100;
        var numResult;
        if(num>0){
            numResult="+"+Math.round(num * 100)/100;
        }else{
            numResult=Math.round(num * 100)/100;
        }
        return numResult;
    }
    
    function creategroupChartbig(yname,seriesdata,divId){
    
        var chart3;
        chart3 = new Highcharts.Chart({
            chart: {
                renderTo: divId,
                defaultSeriesType: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
           plotOptions: {
              series: {
                 marker: {
                    enable:false,
                    radius: 2.5
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
            xAxis: {
                type: 'datetime',
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
           /*
            * tooltip: {
                formatter: function() {
                console.log(this);
           var result = 'Time: '+ Highcharts.dateFormat('%Y/%m/%d-%H:%M:%S', this.x) + '<br />';
           result += ' Value: ' + this.y + '<br />  ';              
           return result + this.series.name; 
                }
            },
            */
            tooltip: {
                useHTML: true,
                valueDecimals:2,
                formatter: function() {
                    var result = 'Time: '+ Highcharts.dateFormat('%Y/%m/%d-%H:%M:%S', this.x) + '<br />';
                    result += ' Value: ' + this.y + '<br />';              
                    if (this.point.text != undefined) {
                        result += this.point.text + '<br />'
                    }
                    return result+'<br />  '+this.series.name; 
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
                    },
            series: seriesdata,
            Credits: {
                //name:"false"
            }

        });
    }


    function creategroupChartchange(data,module_name){
        var dataValue = data;
        var dataOne = dataValue[0];
        var temptOne = [];
        var valueOne = [];
        for (var i = 0; i < dataOne.data.length; i++) {
            valueOne.push(dataOne.data[i][1]);
            temptOne.push(dataOne.data[i][0]);
        };
       
        var dataTwo = dataValue[2];
        var valueTwo = [];
        for (var i = 0; i < dataTwo.data.length; i++) {
            valueTwo.push(dataTwo.data[i][1]);
        };


        var dataThree = dataValue[4];
        var valueThree = [];
        for (var i = 0; i < dataThree.data.length; i++) {
            valueThree.push(dataThree.data[i][1]);
        };


        var dataFour = dataValue[6];
        var valueFour = [];
        for (var i = 0; i < dataFour.data.length; i++) {
            valueFour.push(dataFour.data[i][1]);
        };

        var dataFive = dataValue[8];
        var valueFive = [];
        for (var i = 0; i < dataFive.data.length; i++) {
            valueFive.push(dataFive.data[i][1]);
        };
        var onlinechanges = dataValue[1];
        onlinechanges.events = { 
            mouseOver: function() {
                console.log(this);
                this.options.color = 'red';
                this.type = 'column';
            },  
            mouseOut: function() {
                this.type = " scatter ";
                this.options.color = 'green';
                this.color = 'green';
            }   
        }
        var chart1;
        chart1 = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: '',
                x: -20 //center
            },
           plotOptions: {
              series: {
                 marker: {
                    enable:false,
                    radius: 2.5
                    }
                }
           },

            xAxis: {
                type: 'datetime',
            },
            yAxis: [{
                title: {
                    text: '响应时间(ms)'
                }
            },{
                endOnTick:true,
                min:0,
                max:1,
                labels:{
                    enabled: false,
                },
                title :{
                    text: null,
                },
            }],
                
            tooltip: {
                useHTML: true,
                valueDecimals:2,
                formatter: function() {
                    var result = 'Time: '+ Highcharts.dateFormat('%Y/%m/%d-%H:%M:%S', this.x) + '<br />';
                    result += ' Value: ' + this.y + '<br />';              
                    if (this.point.text != undefined) {
                        result += this.point.text + '<br />'
                    }
                    return result+'<br />  '+this.series.name; 
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
        series:[{name:"avg tm",data:dataOne.data},
                {name:"50分位",data:dataTwo.data},
                {name:"80分位",data:dataThree.data},
                {name:"95分位",data:dataFour.data},
                {name:module_name,data:dataFive.data},
                onlinechanges,
               ]
        });
    }

function SendRequest_change(module_name,metric){

    $.post('/get_history',
    {
        metric : "online.pr-nginx.statistics.tm,online.pr-nginx.statistics.tm.50,online.pr-nginx.statistics.tm.80,online.pr-nginx.statistics.tm.95,"+metric,
        start : $('#startTime').val(),
        time : null,
        aggregator : 'avg',
        tag : "account=baidu,lidc=*",
        end : $('#endTime').val(),
        module : module_name,
        base_metric : "online.pr-nginx.statistics.flow,online.pr-nginx.statistics.flow,online.pr-nginx.statistics.flow,online.pr-nginx.statistics.flow,online.pr-nginx.statistics.flow",
        anticache : Math.floor(Math.random()*1000)
    },
    function(data){
        var seriesdata = new Array(); 
        var dataValue = data;
        var dataOne = dataValue[0];
        dataOne.name = "tm_avg";
        seriesdata.push(dataOne);
        var temptOne = [];
        var valueOne = [];
        for (var i = 0; i < dataOne.data.length; i++) {
            valueOne.push(dataOne.data[i][1]);
            temptOne.push(dataOne.data[i][0]);
        };
        
        var dataTwo = dataValue[2];
        var valueTwo = [];
        for (var i = 0; i < dataTwo.data.length; i++) {
            valueTwo.push(dataTwo.data[i][1]);
        };
        dataTwo.name = "50分位"
        seriesdata.push(dataTwo);


        var dataThree = dataValue[4];
        var valueThree = [];
        for (var i = 0; i < dataThree.data.length; i++) {
            valueThree.push(dataThree.data[i][1]);
        };
        dataThree.name = "80分位"
        seriesdata.push(dataThree);


        var dataFour = dataValue[6];
        var valueFour = [];
        for (var i = 0; i < dataFour.data.length; i++) {
            valueFour.push(dataFour.data[i][1]);
        };
        dataFour.name = "95分位";
        seriesdata.push(dataFour);

        var dataFive = dataValue[8];
        var valueFive = [];
        for (var i = 0; i < dataFive.data.length; i++) {
            valueFive.push(dataFive.data[i][1]);
        };
        dataFive.name = module_name;
        seriesdata.push(dataFive);
 

        document.getElementById("tmvalue").innerHTML=valueOne[valueOne.length-1];
        document.getElementById("tmrate").innerHTML=getRate(valueOne)+"%";
        if ((getRate(valueOne))>0) {
            document.getElementById("tmrate").style.color="#ff0000";
            document.getElementById("tmvalue").style.color="#ff0000";
            document.getElementById("tmImg").style.backgroundImage="url(../static/images/icon.png)";

        }else{
            document.getElementById("tmrate").style.color="green";
            document.getElementById("tmvalue").style.color="green";
            document.getElementById("tmImg").style.backgroundImage="url(../static/images/down.png)";
        }

        document.getElementById("tmFiveValue").innerHTML=valueTwo[valueTwo.length-1];
        document.getElementById("tmFiverate").innerHTML=getRate(valueTwo)+"%";
         if ((getRate(valueTwo))>0) {
            document.getElementById("tmFiverate").style.color="#ff0000";
            document.getElementById("tmFiveValue").style.color="#ff0000";
            document.getElementById("tmFiveImg").style.backgroundImage="url(../static/images/icon.png)";
        }else{
            document.getElementById("tmFiverate").style.color="green";
            document.getElementById("tmFiveValue").style.color="green";
            document.getElementById("tmFiveImg").style.backgroundImage="url(../static/images/down.png)";
        }
        document.getElementById("tmEightValue").innerHTML=valueThree[valueThree.length-1];
        document.getElementById("tmEightrate").innerHTML=getRate(valueThree)+"%";
        if ((getRate(valueThree))>0) {
            document.getElementById("tmEightrate").style.color="#ff0000";
            document.getElementById("tmEightValue").style.color="#ff0000";
            document.getElementById("tmEightImg").style.backgroundImage="url(../static/images/icon.png)";
        }else{
            document.getElementById("tmEightrate").style.color="green";
            document.getElementById("tmEightValue").style.color="green";
            document.getElementById("tmEightImg").style.backgroundImage="url(../static/images/down.png)";
        }
        document.getElementById("tmNineValue").innerHTML=valueFour[valueFour.length-1];
        document.getElementById("tmNinerate").innerHTML=getRate(valueFour)+"%";
        if ((getRate(valueFour))>0) {
            document.getElementById("tmNinerate").style.color="#ff0000";
            document.getElementById("tmNineValue").style.color="#ff0000";
            document.getElementById("tmNineImg").style.backgroundImage="url(../static/images/icon.png)";
        }else{
            document.getElementById("tmNinerate").style.color="green";
            document.getElementById("tmNineValue").style.color="green";
            document.getElementById("tmNineImg").style.backgroundImage="url(../static/images/down.png)";
        }
        //creategroupChartbig("响应时间(ms)", seriesdata, "container");
        if (module_name == 'bws'){
            module_name = 'all';
        }
        creategroupChartchange(data,module_name);

    }, "json");


        $.get('/onlinechange', {
            start : $('#startTime').val(),
            end : $('#endTime').val(),
            module : module_name
       }, function(data){
           $("#txt").empty();
           $("#txt").append(data);
       },"html");


}    

function SendRequest(){

    $.post('/get_history',
    {
        metric : "online.vui.statistics.tm.vui,online.us.statistics.tm.us,online.ac.statistics.tm.ranktm,online.ac.statistics.tm",
        start : $('#startTime').val(),
        time : null,
        aggregator : 'avg',
        tag : 'account=baidu,lidc=*',
        end : $('#endTime').val(),
        base_metric : "sum:online.vui.statistics.flow,sum:online.us.statistics.flow,sum:online.ac.statistics.flow,sum:online.ac.statistics.flow",
        anticache : Math.floor(Math.random()*1000)
    },
    function(data){
    
        var seriesdata = new Array(); 
        var dataValue = data;
        var tmpData = dataValue[0];
        tmpData.name = "vui自身";
        seriesdata.push(tmpData); 
       
        tmpData = dataValue[2];
        tmpData.name = "us自身";
        seriesdata.push(tmpData); 
        
        tmpData = dataValue[4];
        tmpData.name = "ac自身";
        seriesdata.push(tmpData); 
        
        tmpData = dataValue[6];
        tmpData.name = "后端";
        seriesdata.push(tmpData); 

        creategroupChartbig("响应时间(ms)", seriesdata, "container2");
    }, "json");


    $.post('/get_history',
    {
        metric : "online.us.statistics.tm.da,online.us.statistics.tm.ecom,online.ac.statistics.tm.da,online.ac.statistics.tm.bc,online.ac.statistics.tm.attr,online.ac.statistics.tm.disp",
        start : $('#startTime').val(), 
        time : null,
        aggregator : 'avg',
        tag : "account=baidu,lidc=*",
        end : $('#endTime').val(),
        base_metric : "sum:online.us.statistics.flow,sum:online.us.statistics.flow,sum:online.ac.statistics.flow,sum:online.ac.statistics.flow,sum:online.ac.statistics.flow,sum:online.ac.statistics.flow",
        anticache : Math.floor(Math.random()*1000)
    },
    function(data){

        var seriesdata = new Array(); 
        var dataValue = data;
        var tmpData = dataValue[0];
        tmpData.name = "DA1";
        seriesdata.push(tmpData); 
       
        tmpData = dataValue[2];
        tmpData.name = "Ecom";
        seriesdata.push(tmpData); 
        
        tmpData = dataValue[4];
        tmpData.name = "DA2";
        seriesdata.push(tmpData); 
        
        tmpData = dataValue[6];
        tmpData.name = "BC";
        seriesdata.push(tmpData); 

        tmpData = dataValue[8];
        tmpData.name = "ATTR";
        seriesdata.push(tmpData); 

        tmpData = dataValue[10];
        tmpData.name = "DISP";
        seriesdata.push(tmpData);
        
        var appendArray = new Array();
        for(var i=0 ;i<=dataValue[6]["data"].length-1;i++){
        value = (dataValue[6]["data"][i][1] + dataValue[8]["data"][i][1] + dataValue[10]["data"][i][1]);
        time  = dataValue[6]["data"][i][0];
        appendArray.push([time,value]);
        }

        tmpData = {"data":appendArray,"name":"BC+ATTR+DISP"};
        seriesdata.push(tmpData);

       creategroupChartbig("响应时间 (ms)", seriesdata, "container3");
   });
}   
    var module = "pr-nginx";
    var metric = "online.pr-nginx.statistics.tm"
    $("#startTime").val(GetRelativeTime(-8,'d'));
    $("#endTime").val(GetRelativeTime());
    SendRequest_change("pr-nginx","online.pr-nginx.statistics.tm");
    SendRequest();
    $("#submit_data").click(function() {
        SendRequest_change(module,metric);
        SendRequest();
    });

    $("#moduleQ li a").click(function(){
    module = $(this).attr('value');
    metric = $(this).attr('module');
    document.getElementById("chart2").style.display = "none";
    document.getElementById("chart3").style.display = "none";
    document.getElementById("txt").style.display = "";
    SendRequest_change(module,metric);
    });


});
