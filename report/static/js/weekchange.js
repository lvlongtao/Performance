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
        var mydate1 = yy+"/"+MM+"/"+(dd-8)+"-"+hh+":"+mm+":"+ss;
    }else{
        var mydate = yy+"/"+(MM-1)+"/"+(dd+days_number)+"-"+hh+":"+mm+":"+ss
        var mydate1 = yy+"/"+(MM-1)+"/"+(dd+days_number-8)+"-"+hh+":"+mm+":"+ss
    }

    $("#startTime").val(GetRelativeTime(-8,'d'));
    $("#endTime").val(GetRelativeTime());

    function creategroupChartbig(data){
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
            },  
            mouseOut: function() {
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
               spline: {
                   marker: {
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

            xAxis: {
                type: 'datetime',
            },
            yAxis: [{
                title: {
                    text: '响应时间 (ms)'
                }
            },{
                endOnTick:true,
                min:0,
                max:2,
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
                {name:"module",data:dataFive.data},
                onlinechanges,
               ]
        });
    }

      
    function CreateRequest(module_name,metric){
        $.post('/get_history',
        {
            metric : "online.pr-nginx.statistics.tm,online.pr-nginx.statistics.tm.50,online.pr-nginx.statistics.tm.80,online.pr-nginx.statistics.tm.95,"+ metric,
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
            creategroupChartbig(data);
            }, "json");
        
        /*
        $.get('/onlinechange', {
            start : $('#startTime').val(),
            end : $('#endTime').val()
       }, function(data){
           $("#txt").empty();
           $("#txt").append(data);
       },"html");
       */
    }
    
    $("#moduleQ li a").click(function(){
    module = $(this).attr('value');
    metric = $(this).attr('module');
    CreateRequest(module,metric);
    });
    
    CreateRequest("bws","online.bws.statistics.tm");

    $("#submit_data").click(function() {
    CreateRequest(module,metric);
    });

});
