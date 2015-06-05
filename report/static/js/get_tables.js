    function get_tables(num){
        $.get(window.location.href,{
            get_type : 'tables',
            start : $('#startTime').val(),
            end : $('#endTime').val(),
            tab_num : num
        },function(data){
            $("#tables").empty();
            $("#tables").append(data);
        },"html");
    }
