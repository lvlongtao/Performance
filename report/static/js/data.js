var rpmData={};
    rpmData.title1={
	titleName:"总平均响应",
	titleValue:"0.31"
};
	rpmData.title2={
	titleName:"50分位",
	titleValue:"0.32"
};
    rpmData.title3={
	titleName:"80分位",
	titleValue:"0.34"
};
   rpmData.title4={
	titleName:"95分位",
	titleValue:"0.35"
};
var getData={};
 $.post('get_history',
  function(data,status){
    console.log("Data: " + data + "\nStatus: " + status);
  });

var template = YayaTemplate(document.getElementById("template").innerHTML);  
document.getElementsByClassName("headInfo")[0].innerHTML = template.render({
    rpmData:rpmData
});
