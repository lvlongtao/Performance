/*定义全局变量*/

/*所有js中使用到和路径相关的使用DASHBOARD_PATH*/
DASHBOARD_PATH = "/dashboard/";
//1-代表功能打开  0-关闭
WHETHERSHOWINIFRAME = 0;
document.domain = "baidu.com";

// zz 2012-10-23 增加
var hengbiaoDynType=0;

function SetCookie(name, value) {
	var expiryDate = new Date();
	expiryDate.setTime(expiryDate.getTime() + (24*60*60*1000));
	document.cookie = name + "=" + escape(value) + "; expires=" + expiryDate.toGMTString() + "; path=/";
}

function getClientState(){
	SetCookie("width", $(document).width());
	SetCookie("height", $(document).height());
}

function init_admin_tips(){
	$(".logoNameInput").attr("data-original-title", "Dashboard名/Logo名:");
	$(".logoNameInput").attr("data-content", '默认会显示在Dashboard的左上方，如图所示。<img src="'+DASHBOARD_PATH+'img/tip/logo.jpg" />');
	$(".logoNameInput").popover();
	
	$(".nickNameInput").attr("data-original-title", "URL别名:");
	$(".nickNameInput").attr("data-content", '在URL:<br />pingce.baidu.com/dashboard/<br />后加URL别名可以直接跳到该dashboard');
	$(".nickNameInput").popover();

	$(".db_auth_check").attr("data-original-title", "对外可见:");
	$(".db_auth_check").attr("data-content", "若勾上,则任何获得Dashboard地址并且通过百度统一验证的同学即可查看。");
	$(".db_auth_check").popover();

	$(".linkShowCheck").attr("data-original-title", "快速索引:");
    $(".linkShowCheck").attr("data-content", '若勾上，则在展示界面左侧节点下，建立锚点进行快速索引，如图所示。<img  src="'+DASHBOARD_PATH+'img/tip/maodian_tip.png" />');
    $(".linkShowCheck").popover();

    $(".isRadioBox").attr("data-original-title", "显示为radio:");
    $(".isRadioBox").attr("data-content", '若勾上，则顶端tab及其子项显示为radio形式，如图所示。<img  src="'+DASHBOARD_PATH+'img/tip/tab_radio.png" />');
    $(".isRadioBox").popover();

    $(".db_node_hide").attr("data-original-title", "隐藏节点:");
    $(".db_node_hide").attr("data-content", '若勾上，则该节点以及其子节点不会出现在Dashboard左侧菜单中。<br />适合场景：使用数据钻取时候，可以将二级图表配置在隐藏节点中。');
    $(".db_node_hide").popover();

}

function init_edit_tips() {
	$("#template").attr("data-original-title", "选择模板:");
	$("#template").attr("data-content", "<br><br>若有结构相似的图表模块，可以创建后拖动到左侧配置树的<b>模板</b>节点下，通过“选择模板”下拉框来进行相应的复制。");
	$("#template").popover();

	//通用配置
	$("#title").attr("data-original-title", "图表标题配置项:");
	$("#title").attr("data-content", "此标题会出现在各图表的左上方，总领全图表。");
	$("#title").popover();
	//数据源配置
	$("#DC_config").attr("data-original-title", "数据源配置项：");
	$("#DC_config").attr("data-content", "若需要反复调用一个数据源，请点击右侧链接“<b>配置数据源</b>”。");
	$("#DC_config").popover();

	$("#host").attr("data-original-title", "服务器配置项:");
	$("#host").attr("data-content", "待服务器、端口、用户名、密码输入完毕后，系统会获取一些数据表的相应信息进行配置初始化。");
	$("#host").popover();

	$("#login").attr("data-original-title", "用户名配置项:");
	$("#login").attr("data-content", "为了保障dashboard数据的安全性，当前不支持无用户名无密码的的mysql登陆模式。");
	$("#login").popover();

	$("#is_multi_table").attr("data-original-title", "是否跨表配置项:");
	$("#is_multi_table").attr("data-content", "若当前数据表是<b>按天</b>或<b>按月</b>分表，请勾上，系统为自动关联这一组表。");
	$("#is_multi_table").popover();

	//筛选项配置
	$("#has_search_btn").attr("data-original-title", "显示查询按钮配置项:");
	$("#has_search_btn").attr("data-content", "若不勾上，则任一筛选项的改变都会触发查询。");
	$("#has_search_btn").popover();

	$("#is_linkage").attr("data-original-title", "开启联动配置项:");
	$("#is_linkage").attr("data-content", "勾上，并在同一左侧tab项下的两个图表均配置了相同的过滤项，则在查询时会触发联动。");
	$("#is_linkage").popover();
}

function init_chart_tips() {
	//图表配置
	$("#chartName").attr("data-original-title", "图表名配置项:");
	$("#chartName").attr("data-content", "会显示在趋势图、柱状图、饼图等FLASH插件的正上方。");
	$("#chartName").popover();

	$(".mysql_key").attr("data-original-title", "横坐标配置项:");
	$(".mysql_key").attr("data-content", "趋势图一般选择date或其他时间相关的字段，柱状图、饼图一般选择聚合字段，<b>之后默认会在sql中对此字段进行group by。</b>");
	$(".mysql_key").popover();

	$(".json_key").attr("data-original-title", "横坐标配置项:");
	$(".json_key").attr("data-content", "趋势图一般选择date或其他时间相关的字段，柱状图、饼图一般选择聚合字段，<b>JSON请手动填写横坐标。</b>");
	$(".json_key").popover();

	$("#primary_key_group").attr("data-original-title", "聚合时间粒度:");
	$("#primary_key_group").attr("data-content", "支持向上聚合横坐标的时间粒度，例如从分级别数据->小时级别数据。");
	$("#primary_key_group").popover();

	$("#is_show_groupby").attr("data-original-title", "粒度前端可调:");
	$("#is_show_groupby").attr("data-content", '支持在显示界面中，提供交互按钮，进行数据粒度的缩放筛选，如图所示。<img src="'+DASHBOARD_PATH+'img/tip/is_show_groupby.jpg" />');
	$("#is_show_groupby").popover();

	$("select[id*=radio]").attr("data-original-title", "聚合选项配置项:");
	$("select[id*=radio]").attr("data-content", "若选择sum/count/avg后会在sql中带上select <b>sum/count/avg</b> (`该字段`)进行查询。");
	$("select[id*=radio]").popover();

	$("input[id*=cal_column]").attr("data-original-title", "计算列字段配置项:");
	$("input[id*=cal_column]").attr("data-content", "可以填写类似sum(gain)/sum(click)作为计算列，之后会在sql中带上select填写内容进行查询。");
	$("input[id*=cal_column]").popover();

	$("input[id*=dis_name]").attr("data-original-title", "曲线名配置项:");
	$("input[id*=dis_name]").attr("data-content", "为该曲线命名，成为最终出现在图上的名字。若不填写，默认使用之前选择的字段进行命名。");
	$("input[id*=dis_name]").popover();

	$("input[id*=isShowColumnName]").attr("data-original-title", "曲线名为空:");
	$("input[id*=isShowColumnName]").attr("data-content", "选择后曲线名不会出现在图上。");
	$("input[id*=isShowColumnName]").popover();

	$("select[id*=group_columns]").attr("data-original-title", "聚合项配置项:");
	$("select[id*=group_columns]").attr("data-content", "继续添加额外的group by字段，之后会在sql中带上group by 填写内容进行查询。");
	$("select[id*=group_columns]").popover();

	$("input[id*=dictionary]").attr("data-original-title", "字典序:");
	$("input[id*=dictionary]").attr("data-content", "可以更改group by字段的名字,<br />例如：\"2:PT;4:QT\"");
	$("input[id*=dictionary]").popover();

	$("select[id*=selected]").attr("data-original-title", "选中/不选:");
	$("select[id*=selected]").attr("data-content", "初始状态下，趋势图曲线默认是否显示。");
	$("select[id*=selected]").popover();

	$("#digit").attr("data-original-title", "选保留小数位:");
	$("#digit").attr("data-content", "默认整张图保留的小数位数。");
	$("#digit").popover();

	$("#indexShowCheck").attr("data-original-title", "图显示:");
	$("#indexShowCheck").attr("data-content", '若勾上，则显示图例，如图所示。<img src="'+DASHBOARD_PATH+'img/tip/legend.jpg" />');
	$("#indexShowCheck").popover();

	$("#indexSelButtonShowCheck").attr("data-original-title", "全选按钮显示:");
	$("#indexSelButtonShowCheck").attr("data-content", '若勾上，则显示<b>全选按钮</b>，用于同时选中和取消所有的图例中的指标项。<img src="'+DASHBOARD_PATH+'img/tip/select_all.jpg" />');
	$("#indexSelButtonShowCheck").popover();

	$("#up_down_check").attr("data-original-title", "上下分离:");
	$("#up_down_check").attr("data-content", '若勾上，则系统默认会将数量级有较大差距的数据进行上下分轴。');
	$("#up_down_check").popover();

	$("#rowIndexNumInput").attr("data-original-title", "图例列数:");
	$("#rowIndexNumInput").attr("data-content", '指定图例中每行的列数。');
	$("#rowIndexNumInput").popover();

	//饼图
	$("#pullout_list").attr("data-original-title", "默认展开:");
	$("#pullout_list").attr("data-content", ';号分隔，如下图，要达到此效果，需要填写“<b>2;4</b>”，<img src="'+DASHBOARD_PATH+'img/tip/pullout_list.jpg" />');
	$("#pullout_list").popover();

}

function getFilterParams(){

      var params = new Object();

       //时间框,时间段,下拉框,单选框的用户选择参数
		$(".filter,.radiobox_filter:checked").each(function(idx){
			var name = $(this).attr("name");
			var value = $(this).val();
			if(typeof(value) != 'undefined' && value != '')
			{
				params[name] = value;
			}
		});

		//复选框的用户选择参数
     var checkboxColumnNames = [];
        var checkboxValues = [];
        $(".checkbox_filter:checked").each(function(){
            var column_name = $(this).attr("name");
            var index = jQuery.inArray(column_name, checkboxColumnNames);
            if(index==-1)//未找到
            {
                checkboxColumnNames.push(column_name);
                checkboxValues.push($(this).val());
            }
            else
            {
            	checkboxValues[index]=checkboxValues[index]+","+$(this).val();
            }
        });
		for(var i in checkboxColumnNames)
		{
			params[checkboxColumnNames[i]] = checkboxValues[i];
	    }

		//输入框的用户选择参数
        $(".input_filter").each(function(){
			name = $(this).attr("name");
			value = $(this).val();
			if(typeof(value) != 'undefined' && value != '')
			{
				//提取对应的操作符
				operator=$("[name='"+name+"_operator']").val();
				params[name] = operator+"_"+value;
			}
        });

        return params;
    }

    //获取日期框or时间框标志  zz 2012-09-27

    function getDateType(){
       var result=new Object();
       $(".filter,.radiobox_filter:checked").each(function(idx){
          var name = $(this).attr("name");
          var value = $(this).val();

          if(typeof(value) != 'undefined' && value != ''&&$(this).attr('filter_type')!=undefined)
          {
             result[name] = $(this).attr('filter_type');
          }
       });

       return result;
    }

//显示后台隐藏的数据
	function showFulldata(_this){
		if($(_this).attr("checked") == "checked"){
			var url = window.location.href;
			if(url.indexOf("fulldata") == -1){
				url += "&fulldata";
			}
			window.location.href = url;
		}else{
			var url = window.location.href;
			url = url.replace("&fulldata", "");
			window.location.href = url;
		}
	}


	function formatUrl(name, tmp) {
		if(typeof(tmp) == 'undefined' || tmp == '')
			return '';
		return name+"="+tmp+"&";

	}
	
	function openDialogbox(object)
    {
        var id = $(object).attr('id');
        var index = id.substr(id.indexOf("_")+1);
        $('#checkboxPanel_'+index).dialog({ height: 300});
        $('#checkboxPanel_'+index).dialog('open');
    }

	
	/**
	 *@brief Parse link contents for select box
	 *@author chengjian
	 *@date 2014-04-02
	 *@modified 2014-04-10
	 */
	function linkage(name){
		var selected_value = $("[name="+name+"]").val();
		var url = "/dashboard/newchart/linkage/"+$node_id+"/"+name+"/'"+selected_value+"'";
		var all_params = getFilterParams();
		
		$.getJSON(url, function(return_object){
			$.each(return_object, function(idx, item){
				var selectbox = $("[name="+item.column_name+"]");
				var selectbox_val=selectbox.val();
				selectbox.empty();
				
				var selectbox_str="";
				for(var i=0; i<item.values.length; i++) {
		
					if(typeof(item.values[i]) == 'string'){//if item is a string
						if(item.keys[i] != selectbox_val){
							selectbox_str +="<option value="+item.keys[i]+">"+item.values[i]+"</option>";
						}
						else{ //this item is selected
							selectbox_str +="<option selected='selected' value="+item.keys[i]+">"+item.values[i]+"</option>";
						}
					}
					else{ //or if item is a object, parse sub items
						var temp_item = item.values[i];
						var sub_value = temp_item["value"];
						var sub_item = temp_item["children"];
						var sub_index = temp_item["index"]; //get the key for the sub_item
						selectbox_str += "<optgroup value="+sub_value+" label="+sub_value+">";

						for(var index in sub_index){
						
							var sub_key = sub_index[index]; //get the sub_key
							var sel = false;
							
							for(var flag in all_params){//check the selected value
								if(sub_key == all_params[flag]){
									selectbox_str +="<option selected='selected' value="+sub_key+">"+sub_item[sub_key]+"</option>";
									sel = true;
								}
							}
							if(!sel){
								selectbox_str +="<option value="+sub_key+">"+sub_item[sub_key]+"</option>";
							}
						}
						selectbox_str +="</optgroup>";
					}					
				}
				//update select element
				selectbox.html(selectbox_str);
			});
		});		
	}
	/*
	每当checkbox联动的时候，会调用此函数
	obj为当前改变的元素
	*/
	function linkage_checkbox(obj) {
		var name = $(obj).attr('name');
		//获得现在已选的checkbox,用逗号分割组合
		var selected_value='';
		var selected_array=new Array();
		$('[name='+name+']:checked').each(function(){
			selected_array.push("'"+$(this).val()+"'");
		});
		selected_value=selected_array.join(',');
		//URL这里要改
		var url = "/dashboard/newchart/linkage/"+$node_id+"/"+name+"/"+selected_value;
		$.getJSON(url, function(return_object){
			$.each(return_object, function(idx, item){
				//获得需要变动的checkbox
				var checkbox = $("[name="+item.column_name+"]");
				var show_checkboxs = item.keys;//需要显示的值
				//console.log(show_checkboxs)
				checkbox.show();//显示所有checkbox
				checkbox.next().show();//显示所有checkbox后的label
				checkbox.each(function(){
					if($.inArray($(this).val(),show_checkboxs)==-1)
					{
						//隐藏所有不需要显示的项
						$(this).hide();
						$(this).next().hide();
						$(this).removeAttr("checked");
					}
				});
			});
		});
	}

	
	/*
	每当radiobox联动的时候，会调用此函数
	obj为当前改变的元素
	*/
	function linkage_radiobox(obj) {
		var name = $(obj).attr('name');
		//获得现在已选的radiobox
		var selected_value="'"+$('[name='+name+']:checked').val()+"'";

		//URL这里要改
		var url = "/dashboard/newchart/linkage/"+$node_id+"/"+name+"/"+selected_value;
		$.getJSON(url, function(return_object){
			$.each(return_object, function(idx, item){
				//获得需要变动的radiobox
				var radiobox = $("[name="+item.column_name+"]");
				var show_radioboxs = item.keys;//需要显示的值
				radiobox.show();//显示所有radiobox
				radiobox.next().show();//显示所有radiobox后的label
				radiobox.each(function(){
					if($.inArray($(this).val(),show_radioboxs)==-1)
					{
						//隐藏所有不需要显示的项
						$(this).hide();
						$(this).next().hide();
					}
				});
			});
		});
	}

	//日期框 上一天 下一天
	function changeDate(another_date){

	   $('.riqikuang:first').val(another_date);
	   produceChart('true');
	}
	//复选框全选
	function all_yes(){
		$(".checkbox_filter").attr("checked",true);
	}
	//复选框全不选
	function all_no(){
		$(".checkbox_filter").attr("checked",false);
	}
	//复选框分层选择
	function multiChoose(_this){
		var _div = $(_this).nextAll("div:first");
		if($(_this).attr("checked")){
			$(_div).find(".checkbox_filter").attr("checked",true);
		}else{
			$(_div).find(".checkbox_filter").attr("checked",false);
		}
	}
	//复选框过滤
	function reFilter(){
		var val = $("#reFilterVal").val();
		var all = $(".isFilter");
		if(val==""){
			$(all).show();
		}else{
			$(all).hide();
			$.each(all, function(){
				if(this.id.indexOf(val)!=-1)$(this).show();
			});
		}
	}
	//下载URL
	function getDownloadUrl(DASHBOARD_PATH,NODE_ID){
		var url = DASHBOARD_PATH + "newchart/newDownload/" + NODE_ID + "/?";
		var all_params = getFilterParams();
		for(var prop in all_params){
			url += formatUrl(prop, all_params[prop]);
        }
		
		if ( $('#groupby_adjust').length ) {
			var group_adjust = $('#groupby_adjust');
			var length = group_adjust.children('span').length
			for ( var i=0; i<length; ++i ) {
				if ( group_adjust.children('span').eq(i).attr('style').match("rgb") ) {
					url += 'date_show_format='+group_adjust.children('span').eq(i).attr('id').slice(13)+'&';
					break;
				}
			}
			
		}
		
		window.location.href = url;
	}
	
	function navButtonClick(type,subProLineNodeId,urls,otype){

   //获得他的第一个子结点
   //var node_id=subProLineNodeId;

	if(type == 0){
	   var node_id=$('.bar li[sub_pro="'+subProLineNodeId+'"]:first').attr('node_id');  //选中一级分类下第一个结点
	   /*
	   while($('.bar li[p_id="'+node_id+'"]').size()>0){
	       node_id=$('li[p_id="'+node_id+'"]:first').attr('node_id');
	   }
	   */
	//	alert(node_id);
		if(node_id==undefined){
	    		var n = noty({
					text: '此TAB您没有权限，如需查看，请<a href="http://work.baidu.com/process/directStart/337" target="_blank">点此申请</a>！',
					layout: 'center',
					modal: true,
					callback: {
								onShow: function(){
									$('html').click(function(){
										$.noty.closeAll();
									});
								}
							}
					});
	   		}
			

	   $('.bar li[sub_pro!="-1"]').css('display','none');
	   $('.bar li[sub_pro="'+subProLineNodeId+'"]').css('display','');

	   //nav样式改变
	   $(' a[id^="nav_"]').attr("class","");
	   $(' a[id^="nav_"]').addClass("navButtonNotSelected");
	   $('#nav_'+subProLineNodeId).removeClass("navButtonNotSelected");
	   $('#nav_'+subProLineNodeId).addClass("navButtonSelected");
	   //更新subProLineNodeId
	   $('#currentSubProInput').val(subProLineNodeId);
	   //alert(node_id);
	   zbclick(node_id,0);
	   childclick(node_id);
	}else{
		if(otype==0){
			window.open(urls);

		}else{
			window.location.href = urls;
		}
	}
	//$(".bar li[class!=first_b]").hide();
}

	function childclick(node_id){
		var val = $("li[p_id =" + node_id + "]:first > a");
		val.click();
	}
	
	
	var click_times=0;
var current_tab=-1;  //现在的tab 如果是-1则没有
var sel_id=-1;
var firstin =0;

var indexArray=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];//存储每一级中被选中的index,默认-1
	
	
function URLDecode (encodedString) {
	  var output = decodeURI(encodedString);
	   output=output.replace(/\+/g," ");
	  output=output.replace(/\%3D/g,"=");
	  output=output.replace(/\%2C/g,",");
	   output=output.replace(/\%3B/g,";");
	    output=output.replace(/\%3A/g,":");

		output=output.replace(/\%20/g," ");
	  output=output.replace(/\%21/g,"!");
	   output=output.replace(/\%22/g,'"');
	    output=output.replace(/\%23/g,"#");

		output=output.replace(/\%24/g,"$");
	  output=output.replace(/\%25/g,"%");
	   output=output.replace(/\%26/g,'&');
	    output=output.replace(/\%27/g,"'");

		output=output.replace(/\%28/g,"(");
	  output=output.replace(/\%29/g,")");
	   output=output.replace(/\%2A/g,'*');
	    output=output.replace(/\%2B/g,"+");

		output=output.replace(/\%2D/g,"-");
	  output=output.replace(/\%2E/g,".");
	   output=output.replace(/\%2F/g,'/');
	    output=output.replace(/\%2B/g,"+");

			output=output.replace(/\%3C/g,"<");
	  output=output.replace(/\%3D/g,"=");
	   output=output.replace(/\%3E/g,'>');
	    output=output.replace(/\%3F/g,"?");

			output=output.replace(/\%40/g,"@");
	  output=output.replace(/\%7D/g,"}");
	  //output=output.replace(/\%7B/g,'{');
	    output=output.replace(/\%7E/g,"~");


			output=output.replace(/\%5B/g,"[");

	   output=output.replace(/\%5D/g,']');
	    output=output.replace(/\%5E/g,"^");

		output=output.replace(/\%5F/g,"_");
	  return output;
	}

var  httpRequest;
var  httpRequest1;
function zbclick(node_id,hasChildren,username) {   //结点id,是否有儿子
    //alert("11");
	if (httpRequest && httpRequest.readyState != 4){
		httpRequest.abort();
	}
	if (httpRequest1){
		httpRequest1.abort();
	}
        
    sel_id=node_id;
    checktype(node_id,'');
    if(node_id<0) //权限管理下面逻辑不走
       return ;
    
	document.domain = "baidu.com";
	
	if(sel_id == 11398 || sel_id == 11802 || sel_id == 14343 || sel_id == 12319 || sel_id == 11703 || sel_id == 14931 || sel_id == 14940){
		var result = 0;
		httpRequest1 = $.ajax({ 
			url: DASHBOARD_PATH+'show/check_asea_user/' + username, 
			dataType: "json", 
			success: function(data){
				console.log("success");
	        	result = data;
	        	console.log(result);
	        	if(result == 0){
					var n = noty({
							text: '抱歉，您没有权限查看该页数据。该权限与asea.baidu.com保持同步，请发邮件给yangliu@baidu.com申请!',
							layout: 'center',
							modal: true,
							callback: {
								onShow: function(){
									$('html').click(function(){
										$.noty.closeAll();
									});
								}
							}
							});
					return;
				}else{
					var level= ($('li[node_id="'+node_id+'"]').size()!=0)?$('li[node_id="'+node_id+'"]').attr('level') :0;

    //全部选为空
	  $('.bar a').removeClass('selected_bar');
	  var the_li=$('li[node_id="'+node_id+'"]');
    var the_link=$('#link_'+node_id);
    //alert(click_times);


    if(click_times!=0) {
        if(the_link.attr("openFlag")=="y") {
            //现在要关
            closeAllChildren(node_id);
        } else {
            openAllChildren(node_id);
        }
        //加减符号变换
        if((level==2||level==3)&&hasChildren)
            changePlusMinus(the_li,the_link,node_id,level);
        //修改开关标志
        the_link.attr("openFlag", (the_link.attr("openFlag")=="y"?"n":"y"));
    }

    //选中
    the_link.addClass('selected_bar');

    //打开右边东西
    if(click_times>0)
       current_tab=-1;
    click_times++;

    //如果有子节点，右边页面不现实
    //alert($('li[p_id="'+node_id+'"]').size());

    if($('li[p_id="'+node_id+'"]').size()>0)
         return ;

    $('.contenthead').hide();
    $('#datadiv').html('');
    $.getJSON(DASHBOARD_PATH+'show/treeNode/' + node_id,function(result){
         //alert(result.length);
         //alert(result.current_tab);

         //走tab 点击

    	   if(result.current_tab!=undefined) {
               $('.contenthead[p_id='+node_id+']').show();
               if(current_tab==-1)
                 current_tab=result.current_tab;

               //alert(current_tab);
               $('.contenthead a[node_id="'+current_tab+'"]').trigger('click');
               $('.radio input[node_id="'+current_tab+'"]').trigger('click');
           }
           else {
               showleafs(result,true);
               getQuyuAndModule(node_id);
           }
     });
				    //if(current_tab==-1)
				}
	        }
		});
		
	}else{
		var level= ($('li[node_id="'+node_id+'"]').size()!=0)?$('li[node_id="'+node_id+'"]').attr('level') :0;
		
	    //全部选为空
		  $('.bar a').removeClass('selected_bar');
		  var the_li=$('li[node_id="'+node_id+'"]');
	    var the_link=$('#link_'+node_id);
	    //alert(click_times);
	
	
	    if(click_times!=0) {
	        if(the_link.attr("openFlag")=="y") {
	            //现在要关
	            closeAllChildren(node_id);
	        } else {
	            openAllChildren(node_id);
	        }
	        //加减符号变换
	        if((level==2||level==3)&&hasChildren)
	            changePlusMinus(the_li,the_link,node_id,level);
	        //修改开关标志
	        the_link.attr("openFlag", (the_link.attr("openFlag")=="y"?"n":"y"));
	    }
	
	    //选中
	    the_link.addClass('selected_bar');
	
	    //打开右边东西
	    if(click_times>0)
	       current_tab=-1;
	    click_times++;
	
	    //如果有子节点，右边页面不现实
	    //alert($('li[p_id="'+node_id+'"]').size());
	
	    if($('li[p_id="'+node_id+'"]').size()>0)
	         return ;
	
	    $('.contenthead').hide();
	    $('#datadiv').html('');
	    httpRequest =  $.getJSON(DASHBOARD_PATH+'show/treeNode/' + node_id,function(result){
	         //alert(result.length);
	         //alert(result.current_tab);
	
	         //走tab 点击
	
	    	   if(result.current_tab!=undefined) {
	               $('.contenthead[p_id='+node_id+']').show();
	               if(current_tab==-1)
	                 current_tab=result.current_tab;
	
	               //alert(current_tab);
	               $('.contenthead a[node_id="'+current_tab+'"]').trigger('click');
	               $('.radio input[node_id="'+current_tab+'"]').trigger('click');
	
	           }
	           else {
	               showleafs(result,true);
	               getQuyuAndModule(node_id);
	           }
			   
			   if ( $('div.contenthead[p_id="'+node_id+'"]').length==0 )
					$('#datadiv fieldset').attr('style', $('#datadiv fieldset').attr('style')+'; margin-top:-30px;');
				else
					$('#datadiv fieldset').attr('style', $('#datadiv fieldset').attr('style').replace("margin-top:-30px;", ''));
	     });
	    //if(current_tab==-1)
	}
}

var  httpRequest2;
function getQuyuAndModule(node_id){
    //$('#datadiv').html('');
    if (httpRequest2 && httpRequest2.readyState != 4){
		httpRequest2.abort();
	}
	
	document.domain = "baidu.com";
	
    httpRequest2 = $.post(DASHBOARD_PATH+'show/getQuyuAndModule/' + node_id, {} , function(result) {

            $('li[name="pageLink"]').remove();  //删掉左侧所有锚点
            var data=eval(result);
            var html='';
            var i=0;
            $.each(data,function(key,value){
                 //alert(data[key]['node_name']);
                 var node_name=data[key]['node_name'];
                 var show_node_name=data[key]['show_node_name'];
                 var node_type=data[key]['node_type'];
                 var node_id=data[key]['id'];
                 var parent_id=data[key]['parent_id'];
                 var tempName= ((node_type==4)?'quyu':'mokuai');
                 var linkShow=data[key]['link_show'];
                 //alert(linkShow);

                  html+='<li name="pageLink" ';

                  if(linkShow==0)
                    html+=' style="display:none" ';

                  html+=' node_id="'+node_id+'" openFlag="y"  class="'+tempName+'Class"  node_type="'+node_type+'" parent_id="'+parent_id+'"><a title="'+node_name+'"  style="cursor:pointer;"  onclick=maodianClick(this,"'+tempName+'_'+node_id+'") >'+show_node_name;
                  if(i==0)
                    html+='<span class="starplus">*</span>';
                  html+='</a></li>';

                 i++;
            });
            var sel_li=$('li[node_id="'+sel_id+'"]');
            sel_li.after(html);
    });

}

function maodianClick(theLink,linkName){
   //alert(linkName);
   window.location.href="#"+linkName;


   $('.starplus').remove();
   theLink.innerHTML=theLink.innerHTML+'<span class="starplus"> *</span>';


  var node_type=$(theLink).parent().attr('node_type');
   var node_id=$(theLink).parent().attr('node_id');
   var open=$(theLink).parent().attr('openFlag');
   if(node_type==4){

      if(open=="y"){
         //关掉
         $('li[parent_id="'+node_id+'"]').fadeOut();
      }
      else{
         $('li[parent_id="'+node_id+'"]').fadeIn();
      }
      open= ((open=="y")?"n":"y") ;

      $(theLink).parent().attr('openFlag',open);
   }

  if(Math.abs(document.body.clientHeight - document.documentElement.clientHeight) <= (document.documentElement.scrollTop || document.body.scrollTop)){
       //alert("~~");
       return false;
  }
  else {
       var scrolltop=(document.documentElement.scrollTop || document.body.scrollTop);

       window.scrollTo(0,scrolltop-100);
   }

}

//修改加减号
function changePlusMinus(the_li,the_link,node_id,level) {
    if(the_link.attr("openFlag")=="y") {
        //减号变加好
        if(level==2) {
            the_li.removeClass("second_minus");
            the_li.addClass("second_add");
        }
        if(level==3) {
            the_li.removeClass("third_minus");
            the_li.addClass("third_add");
        }
    } else {
        if(level==2) {
            the_li.removeClass("second_add");
            the_li.addClass("second_minus");
        }
        if(level==3) {
            the_li.removeClass("third_add");
            the_li.addClass("third_minus");
        }

    }
}

//把所有子节点关掉
function closeAllChildren(node_id) {
    var childrenNodes=$('li[p_id="'+node_id+'"]');
    childrenNodes.each( function() {
        var temp_node_id=$(this).attr('node_id');
        $(this).fadeOut('normal');
        closeAllChildren(temp_node_id);
    });
}

//把所有子节点打开
function openAllChildren(node_id) {
    var childrenNodes=$('li[p_id="'+node_id+'"]');
    childrenNodes.each( function() {
        var temp_node_id=$(this).attr('node_id');
        $(this).fadeIn('normal');
        if($('#link_'+temp_node_id).attr("openFlag")=="y")
            openAllChildren(temp_node_id);
    });
}


//old
var  httpRequest3;
function sclick(node_id) {
	if (httpRequest3 && httpRequest3.readyState != 4){
		httpRequest3.abort();
	}


	document.domain = "baidu.com";

	//点击自己
	var first_tab_id = node_id;
	//多级tab，其中非一级tab是radio模式
	if($("a[node_id="+first_tab_id+"]").attr("topid")==undefined){
		first_tab_id = $("input[node_id="+node_id+"]").attr("root");
	}

	$('.contenthead *').removeClass('selected_tab');
	$('.contenthead *').removeClass('selected_li');

	$('a[node_id="'+first_tab_id+'"]').addClass('selected_tab');//位置很重要
	$(".selected_tab").parent().addClass('selected_li');

	if($("input[parent_id="+node_id+"]").attr("node_id")!=null){
		nodeid = $("input[parent_id="+node_id+"]").attr("node_id");

		//alert("root"+nodeid);
		somethingChange(nodeid,firstin);
		return;
    }

   //eason-7-26 获得该节点的内容和父id 然后更新父节点的现实内容
      var parent_id = $('a[node_id="'+node_id+'"]').attr("parent_id");
      var child_value =$('a[node_id="'+node_id+'"]').html();
      var top_value = $('a[node_id="'+parent_id+'"]').attr("name");

    var root =$("[node_id="+node_id+"]").attr("root");

   //清掉所有的radio，然后找到要显示的区域
   // $(".radio").addClass(" hide");
   //  $("div[id=radioArea_"+root+"]").removeClass("hide");

   $(".radio").css("display","none");
   $("div[id=radioArea_"+root+"]").css("display","");
	//还原父TAB名字
	$('.menu > li > a').each(function(){
		//alert($(this).text());
		var name = $(this).attr("name");
		$(this).html(name);
	});
	//增加子TAB名字
	$('a[node_id="'+parent_id+'"]').html(top_value+"/"+child_value);


      //$('.contenthead a').css('color','#333');

      $('a[node_id="'+parent_id+'"]').addClass('selected_tab');//位置很重要
      $(".selected_tab").parent().addClass('selected_li');


      $('.contenthead a').css('font-weight','');

      $('a[node_id="'+node_id+'"]').addClass('selected_tab');


      //eason-8-2 注掉加粗
      //$('a[node_id="'+node_id+'"]').css('font-weight','400');

      checktype(node_id,'');
      //改为json
	httpRequest3 = $.getJSON(DASHBOARD_PATH+'show/treeNode/' + node_id,function(result){

          showleafs(result,true);

          current_tab=node_id;

          //alert(node_id);
          //getQuyuAndModule(node_id);

      });
      getQuyuAndModule(node_id);

}
//该函数可以执行同级不变的效果
function upRadioDeal(nodeId){

	//上行数组
	var memoryArray= new Array();
	var s;
	var root = $("input[node_id="+nodeId+"]").attr("root");
	var prenodeID = $("#radioArea_"+root+" input[node_id="+nodeId+"]").attr("parent_id");
	var number = $("input[node_id="+nodeId+"]").attr("number");
	//处理自己这一级
	$("#radioArea_"+root+" input[number="+number+"][parent_id!="+prenodeID+"]").addClass("hide");
	$("#radioArea_"+root+" label[number="+number+"][parent_id!="+prenodeID+"]").addClass("hide");
	number--;
	//向上的显示策略
	//alert("向上 root:"+root+" name: "+$("#radioArea_"+root+" input[node_id="+prenodeID+"]").attr("name"));

	memoryArray.push(nodeId);

	while($("#radioArea_"+root+" input[node_id="+prenodeID+"]").attr("name") != null){
		//alert("向上："+prenodeID+" number:"+number);
		if(number == 2){

			//上行数组
			memoryArray.push(prenodeID);
		//	alert("prenodeID2:"+prenodeID);
			//alert("=2 :"+prenodeID);
			s =prenodeID;number--;
			}
		if(number > 2){
			//上行数组
			memoryArray.push(prenodeID);
			//alert(">2 :"+prenodeID);

		//它的父节点应该显示
		$("#radioArea_"+root+" input[number="+number+"][node_id="+prenodeID+"]").removeClass("hide");
		$("#radioArea_"+root+" label[number="+number+"][node_id="+prenodeID+"]").removeClass("hide");
		$("input[node_id="+prenodeID+"]").attr("checked",true);
		//它的非父节点应该隐藏
		$("#radioArea_"+root+" input[number="+number+"][node_id!="+prenodeID+"]").addClass("hide");
		$("#radioArea_"+root+" label[number="+number+"][node_id!="+prenodeID+"]").addClass("hide");
		number--;
		}
	//	alert("prenodeID1:"+prenodeID);
		prenodeID =$("#radioArea_"+root+" input[node_id="+prenodeID+"]").attr("parent_id");


		//alert(s);
	}
	//s点击节点的父
	$("#radioArea_"+root+" input[node_id="+s+"]").attr("checked",true);
//	alert("length :"+memoryArray.length);

	return memoryArray;
}


function downRadioDeal(nodeId,memoryArray){

	//alert("数组:"+memoryArray);

	var arrayIndex =memoryArray.length -1;
	var subnodeID = memoryArray[arrayIndex--];

	var root = $("input[node_id="+subnodeID+"]").attr("root");
	var number = $("input[node_id="+subnodeID+"]").attr("number");

	var sinkpid = $("input[node_id="+subnodeID+"]").attr("parent_id");
	var nodeindex = 0;
	$("#radioArea_"+root+" input[number="+number+"][parent_id="+sinkpid+"]").each(function(){
		if($(this).attr("node_id")== subnodeID){
			//alert("sink:"+nodeindex);
			indexArray[number] = nodeindex;
			}
		nodeindex++;
		});
	nodeindex =0;
	//var nodeindex =$("#radioArea_"+root+" input[number="+number+"][node_id="+subnodeID+"]").index();
	//alert("sink:"+nodeindex);

	number++;

	while($("#radioArea_"+root+" input[parent_id="+subnodeID+"]").attr("name") != null){
		//alert("向下："+subnodeID+"number:"+number);
		//以subnodeID为父的节点显示
		$("#radioArea_"+root+" input[number="+number+"][parent_id="+subnodeID+"]").removeClass("hide");
		$("#radioArea_"+root+" label[number="+number+"][parent_id="+subnodeID+"]").removeClass("hide");




		//不以subnodeID为父的接待你隐藏
		$("#radioArea_"+root+" input[number="+number+"][parent_id!="+subnodeID+"]").addClass("hide");
		$("#radioArea_"+root+" label[number="+number+"][parent_id!="+subnodeID+"]").addClass("hide");

		//把每一层比对
		if(arrayIndex >=0){
		//if(memoryArray[arrayIndex--] == subnodeID)
		//alert(memoryArray[arrayIndex]);
		$("#radioArea_"+root+" input[number="+number+"][node_id="+memoryArray[arrayIndex]+"]").attr("checked",true);


		$("#radioArea_"+root+" input[number="+number+"][parent_id="+subnodeID+"]").each(function(){
			if($(this).attr("node_id")== memoryArray[arrayIndex]){
				//alert("node:"+nodeindex);
				indexArray[number] = nodeindex;
				}
			nodeindex++;
			});
		nodeindex=0;


		//alert("arrayIndex:"+arrayIndex+" memoryArray[arrayIndex]:"+memoryArray[arrayIndex]);
		subnodeID =memoryArray[arrayIndex];
		arrayIndex--;
		}else{
			//开始--该段代码实现上同一级别index号选中
			var tempsubnodeID;
			var selectedFlag = false;
			//alert("1"+subnodeID);
			//$("#radioArea_"+root+" input[number="+number+"][parent_id="+subnodeID+"]").attr("checked",true);
			var index =0;
			$("#radioArea_"+root+" input[parent_id="+subnodeID+"]").each(function(){

				if(index == indexArray[number]){//如果是记录中选中的index
					tempsubnodeID = $(this).attr("node_id");
					selectedFlag =true;
					}
				index++;
				});

			if(!selectedFlag){
			$("#radioArea_"+root+" input[node_id="+subnodeID+"]").attr("checked",true);
			sD =$("#radioArea_"+root+" input[parent_id="+subnodeID+"]").attr("node_id");

			$("#radioArea_"+root+" input[number="+number+"][parent_id="+subnodeID+"]").each(function(){
				if($(this).attr("node_id")== sD){
					//alert("node:"+nodeindex);
					indexArray[number] = nodeindex;
					}
				nodeindex++;
				});
			nodeindex=0;


			subnodeID=sD;


			}else{


				$("#radioArea_"+root+" input[number="+number+"][parent_id="+subnodeID+"]").each(function(){
					if($(this).attr("node_id")== tempsubnodeID){
						//alert("node:"+nodeindex);
						indexArray[number] = nodeindex;
						}
					nodeindex++;
					});
				nodeindex=0;


				$("#radioArea_"+root+" input[node_id="+subnodeID+"]").attr("checked",true);
				subnodeID =tempsubnodeID;
				}
			//alert("2"+subnodeID);

			//结束
		}


		number++;
	}

	//alert("subnodeID:"+subnodeID);
	$("#radioArea_"+root+" input[number="+number+"][node_id="+subnodeID+"]").removeClass("hide");
	$("#radioArea_"+root+" label[number="+number+"][node_id="+subnodeID+"]").removeClass("hide");
	//
	$("#radioArea_"+root+" input[number="+number+"][node_id!="+subnodeID+"]").addClass("hide");
	$("#radioArea_"+root+" label[number="+number+"][node_id!="+subnodeID+"]").addClass("hide");


	//如果出现这样的情形
	for(number++;number<20;number++){
	$("#radioArea_"+root+" input[number="+number+"]").addClass("hide");
	$("#radioArea_"+root+" label[number="+number+"]").addClass("hide");
	}
	return  subnodeID ;

}

function somethingChange(nodeId,cla){

	var memoryArray =upRadioDeal(nodeId);

	var NODEID = downRadioDeal(nodeId,memoryArray);

	$("input[node_id="+NODEID+"]").attr("checked",true);
	for(var x =memoryArray.length-1;x >=0;x-- ){
		//alert("xxxx"+memoryArray[x]);
	$("input[node_id="+memoryArray[x]+"]").attr("checked",true);
	}
	sclick(NODEID);
	//alert(indexArray);//[number] = nodeindex;
}
