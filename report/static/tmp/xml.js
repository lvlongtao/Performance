
var currentnode_id=0;
var old_intro_imgsrc='';  //��һ��չʾ��ͼƬsrc;   zz 2012-11-06


var setting = {
		view: {
			selectedMulti: false
		},
		edit: {
			enable: true,
			showRemoveBtn: true,
			showRenameBtn: true
		},
		data: {
			keep: {
				parent:true,
				leaf:true
			},
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: leftt_beforeDrag,
			beforeDrop : leftt_beforeDrop,
			onDrop: leftt_onDrop,
			beforeEditName: leftt_beforeEditName,
			beforeRemove: leftt_beforeRemove,
			beforeRename: leftt_beforeRename,
			onRemove: leftt_onRemove,
			onRename: leftt_onRename,
			onClick: leftt_onClick,
			beforeExpand: leftt_BeforeExpand
		}
	};

	var zNodes =[{id:-1,pId:0,name:"Ȩ�޹���", icon:"/dashboard/img/diy/root.png" },{id:-3,pId:-1,name:"Ȩ������" },{id:-4,pId:-1,name:"Ȩ�޲鿴���޸�" },{id:19357,pId:0,name:"���������ݼ��ƽ̨" , isParent:true,type:"normal",icon:"/dashboard/img/diy/root.png", linkShow:"1"},{id:-100,pId:19357,name:"��ع���" , isParent:false,type:"template",icon:"/dashboard/img/diy/template.png", linkShow:"0"},{id:19358,pId:19357,name:"AC" , isParent:true,type:"subPro",icon:"/dashboard//img/diy/subProIcon.png", linkShow:"0"},{id:19438,pId:19357,name:"US" , isParent:true,type:"subPro",icon:"/dashboard//img/diy/subProIcon.png", linkShow:"0"},{id:19520,pId:19357,name:"VUI" , isParent:true,type:"subPro",icon:"/dashboard//img/diy/subProIcon.png", linkShow:"0"},{id:19521,pId:19520,name:"vui" , isParent:true,type:"normal", linkShow:"0"},{id:19554,pId:19521,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19555,pId:19521,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19556,pId:19521,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19597,pId:19556,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19596,pId:19555,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19595,pId:19554,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19439,pId:19438,name:"da" , isParent:true,type:"normal", linkShow:"0"},{id:19517,pId:19438,name:"us ����" , isParent:true,type:"normal", linkShow:"0"},{id:19518,pId:19438,name:"ecom" , isParent:true,type:"normal", linkShow:"0"},{id:19519,pId:19438,name:"cache" , isParent:true,type:"normal", linkShow:"0"},{id:19550,pId:19519,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19552,pId:19519,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19553,pId:19519,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19594,pId:19553,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19593,pId:19552,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19592,pId:19550,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19547,pId:19518,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19548,pId:19518,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19549,pId:19518,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19591,pId:19549,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19590,pId:19548,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19589,pId:19547,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19544,pId:19517,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19545,pId:19517,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19546,pId:19517,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19588,pId:19546,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19587,pId:19545,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19586,pId:19544,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19541,pId:19439,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19542,pId:19439,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19543,pId:19439,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19585,pId:19543,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19584,pId:19542,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19583,pId:19541,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19399,pId:19358,name:"�������" , isParent:true,type:"normal", linkShow:"0"},{id:19395,pId:19358,name:"tm" , isParent:true,type:"normal", linkShow:"0"},{id:19509,pId:19358,name:"disp" , isParent:true,type:"normal", linkShow:"0"},{id:19510,pId:19358,name:"attr" , isParent:true,type:"normal", linkShow:"0"},{id:19511,pId:19358,name:"bc" , isParent:true,type:"normal", linkShow:"0"},{id:19513,pId:19358,name:"da" , isParent:true,type:"normal", linkShow:"0"},{id:19515,pId:19358,name:"KT" , isParent:true,type:"normal", linkShow:"0"},{id:19516,pId:19358,name:"ranktm" , isParent:true,type:"normal", linkShow:"0"},{id:19387,pId:19358,name:"������ϸ" , isParent:true,type:"normal", linkShow:"0"},{id:19388,pId:19387,name:"PV����" , isParent:false,type:"normal", linkShow:"0"},{id:19392,pId:19387,name:"���ʼ�¼" , isParent:false,type:"normal", linkShow:"0"},{id:19538,pId:19516,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19539,pId:19516,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19540,pId:19516,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19582,pId:19540,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19581,pId:19539,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19580,pId:19538,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19535,pId:19515,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19536,pId:19515,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19537,pId:19515,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19579,pId:19537,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19578,pId:19536,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19577,pId:19535,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19532,pId:19513,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19533,pId:19513,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19534,pId:19513,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19575,pId:19534,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19574,pId:19533,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19573,pId:19532,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19529,pId:19511,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19530,pId:19511,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19531,pId:19511,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19572,pId:19531,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19571,pId:19530,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19570,pId:19529,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19526,pId:19510,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19527,pId:19510,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19528,pId:19510,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19569,pId:19528,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19568,pId:19527,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19566,pId:19526,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19523,pId:19509,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19524,pId:19509,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19525,pId:19509,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19561,pId:19525,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19560,pId:19524,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19559,pId:19523,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19445,pId:19395,name:"jx" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19446,pId:19395,name:"tc" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19508,pId:19395,name:"hz" , isParent:true,type:"tab",icon:"/dashboard/img/diy/3.png", linkShow:"0"},{id:19558,pId:19508,name:"hz" , isParent:false,type:"normal", linkShow:"0"},{id:19557,pId:19446,name:"tc" , isParent:false,type:"normal", linkShow:"0"},{id:19522,pId:19445,name:"jx" , isParent:false,type:"normal", linkShow:"0"},{id:19400,pId:19399,name:"����" , isParent:false,type:"normal", linkShow:"0"}];
	var log, className = "dark";
	var hh = document.body.offsetHeight;
	hh = hh - 230;//230Ϊ���������������Ϸ��ĸ߶�
	$(function() {
	    $("#ztreein").css("height",hh);  // �κ���Ҫִ�е�js��Ч
	});
	function leftt_BeforeExpand(treeId, treeNodes) {
		//by Jzj 11-28 ���������dashboard�ĸ��ڵ��ʱ�����������нڵ㣬Ȼ���
		if(treeNodes.level == 0) {
			var zTree = $.fn.zTree.getZTreeObj("lefttree");
			zTree.expandAll(false);
		}
	}
	function leftt_beforeDrag(treeId, treeNodes) {
		var treeNode = treeNodes[0];
		if(treeNode.level==0)
		{
			alert("Dashboard���ڵ㲻����ק");
			return false;
		}

		//ֻ�нڵ�,ģ������������ק
		else if(treeNode.type!="normal"&&treeNode.type!="field"&&treeNode.type!="subPro"){
			alert("ֻ�з�Dashboard���ڵ�Ľڵ�,ģ�������ſ�����ק");
			return false;
	    }
		return true;
	}

	function leftt_beforeDrop(treeId, treeNodes, targetNode, moveType){
		var treeNode = treeNodes[0];


        //ֻ����һ��Dashboard�ڽ�����ק
		if(getCurRootDbId(treeNode)!=getCurRootDbId(targetNode)){
			alert("ֻ����һ��Dashboard�ڽ�����ק����");
			return false;
		}

	    //���ܽ���ͨ�ڵ��ƶ���ΪDashboard���ڵ�
		if(targetNode.pId==null&&moveType!='inner')
		{
			alert('���ܽ���ͨ�ڵ�����ΪDashboard���ڵ�');
			return false;
		}
		//һ�����������ק wyj
		if(treeNode.type=="subPro"&&(targetNode.type=="subPro"||targetNode.type=="template")&&moveType=='inner')
		{
			alert('һ��������ֻ��ƽ���϶�');
			return false;
		}
		if(treeNode.type=="subPro"&&targetNode.getParentNode().pId!=null&&moveType!='inner')
		{
			alert('һ��������ֻ��ƽ���϶�');
			return false;
		}

		var parentNode = null;
		if(moveType=='inner')
		{
			parentNode = targetNode;
		}
		else
		{
			parentNode = targetNode.getParentNode();
		}
		var children = parentNode.children;

		if(treeNode.type=="normal"&&treeNode.isParent)//����ק�Ľڵ�����ͨ�ڵ�(��Dashboard���ڵ�)
		{
			//���ڵ�ֻ��Ϊ�ڵ㡢��Ʒ��
			if(parentNode.type!="subPro"&&!(parentNode.type=="normal"&&parentNode.isParent))
			{
				alert('Ŀ��ڵ㲻��ȷ!���ڵ�ֻ��Ϊ�ڵ���߲�Ʒ��');
				return false;
			}
			//ͬ��ֻ���нڵ�
			if(!isAllSpecialNodeType(children,0))
			{
				alert('Ŀ��ڵ㲻��ȷ!ͬ��ڵ�ֻ��Ϊ"�ڵ�"');
				return false;
		    }
		}
		else if(treeNode.type=="normal"&&!treeNode.isParent)//����ק�Ľڵ���ģ��
		{
			//���ڵ�ֻ��Ϊ��ͨ�ڵ�(��Dashboard���ڵ�)��tab������,����ק�ڵ�����Ĳ����Ҫ���ڵ���2
			if(parentNode.type!="tab" && parentNode.type!="template" &&parentNode.type!="field"&&!(parentNode.type=="normal"&&parentNode.isParent&&parentNode.level>0))
			{
				alert('Ŀ��ڵ㲻��ȷ!���ڵ�ֻ��Ϊ��ͨ�ڵ�(��Dashboard���ڵ�)��tab��������');
				return false;
			}
			//ͬ��ֻ����ģ��
			if(!isAllSpecialNodeType(children,1))
			{
				alert('Ŀ��ڵ㲻��ȷ!ͬ��ڵ�ֻ��Ϊ"ģ��"');
				return false;
			}
		}
		else if(treeNode.type=="field")//����ק�Ľڵ�������
		{
			//���ڵ�ֻ��Ϊ��ͨ�ڵ�(��Dashboard���ڵ�)��tab,����ק�ڵ�����Ĳ����Ҫ���ڵ���2
			if(parentNode.type!="tab"&&!(parentNode.type=="normal"&&parentNode.isParent&&parentNode.level>0))
			{
				alert('Ŀ��ڵ㲻��ȷ!���ڵ�ֻ��Ϊ��ͨ�ڵ�(��Dashboard���ڵ�)����tab');
				return false;
			}
			//ͬ��ֻ��������
			if(!isAllSpecialNodeType(children,4))
			{
				alert('Ŀ��ڵ㲻��ȷ!ͬ��ڵ�ֻ��Ϊ"����"');
				return false;
			}
		}

		//���Ŀ��ڵ���ģ�壬�����ƶ�������prev����next����ôreturn false; By Jzj 0926
		if(targetNode.type == "template" && moveType != "inner") {
			alert("ģ��ڵ�λ�ò��ܸ���!");
			return false;
		}

		return true;
	}
	function leftt_onDrop(event, treeId, treeNodes, targetNode, moveType)
	{
		$.post('/dashboard/admin/ajaxDragNode', {node_id: treeNodes[0].id, target_node_id: targetNode.id, move_type: moveType}, function() {

	    });
		return true;
	}
	function leftt_beforeEditName(treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree");
		zTree.selectNode(treeNode);
		//�༭����ʱ���� �������
		showCreateButton(null);

		return true;
	}

	function leftt_beforeRemove(treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree");
		zTree.selectNode(treeNode);

		return confirm("С��!!!   ȷ��ɾ�� �ڵ� -- " + treeNode.name + " ��  ��ɾ�����������������㶼����ɾ��!���������");
	}
	function leftt_onRemove(e, treeId, treeNode) {

		$.post('/dashboard/admin/removeNode/', {nodeId: treeNode.id}, function(result) {
		   showCreateButton(null);
		});

	}

	function leftt_beforeRename(treeId, treeNode, newName) {

		if (newName.length == 0) {
			alert("�ڵ����Ʋ���Ϊ��.");
			var zTree = $.fn.zTree.getZTreeObj("lefttree");
			setTimeout(function(){zTree.editName(treeNode)}, 10);

			return false;
		}
		else
		{
			$.post('/dashboard/admin/NodeNameCheck/' , {nodeId: treeNode.id, newName: newName}, function(result) {

				if (result=='-2')
				{
					alert("���ȳ���6 ����֧�֣�");
					var zTree = $.fn.zTree.getZTreeObj("lefttree");
					setTimeout(function(){zTree.editName(treeNode)}, 10);
					return false;
				}
			});
		}
		return true;
	}

	function leftt_onRename(e, treeId, treeNode) {
		$.post('/dashboard/admin/renameNode/' , {nodeId: treeNode.id, newName: treeNode.name}, function(result) {
          showCreateButton(treeNode);
		});

		//by Jzj 11-28�����ﹹ�����м���������
		construct_crumb(treeNode);
	}

	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;

	function leftt_onClick(event, treeId, treeNode, clickFlag) {
		//by Jzj 11-28�����ﹹ�����м���������
		construct_crumb(treeNode);

		currentnode_id=treeNode.id;

		if(treeNode['level']==0){
			//by wyj 01-04�޸��ҵļ��ҳ��
			var monitor_src = "/dashboard/confmonitor/monitor_lists/"+currentnode_id;
			$('#monitor_id').attr('src',monitor_src);
			//by wyj 03-06�޸�PV/UVͳ��ҳ��
			var statistics_1_src = "/dashboard/admin/tongji/"+currentnode_id;
			$('#statistics_1').attr('src',statistics_1_src);
			var statistics_2_src = "/dashboard/newchart/show/9257?root_id="+currentnode_id;
			$('#statistics_2').attr('src',statistics_2_src);
		}

		//��ť��ʾ�ж�
		showCreateButton(treeNode);

		checktype(treeNode.id,'', treeNode.pId);
		
		//By Jzj 11.23 ÿ�ε����߽ڵ�֮����Ҫ�л���"�ҵ�ƽ̨"Tab
		switchTab("admin", treeNode.id);

	}

	function construct_crumb(treeNode) {
		var crumb_array = new Array();
		crumb_array.push(treeNode.name);
		crumb_tmp = treeNode.getParentNode();
		while(crumb_tmp != null) {
			crumb_array.push(crumb_tmp.name);
			crumb_tmp = crumb_tmp.getParentNode();
		}
		var strImg = ' <img class="crumbImg" src="'+DASHBOARD_PATH+'img/admin/bread_crumb_sep.png">';
		var str = "";
		for(var i=crumb_array.length-1; i>=0; i--) {
			str += "<span>"+crumb_array[i]+"</span>";
			if(i != 0){
				str += strImg;
			}
		}
		$("#crumb_content").empty().html(str);
	}

	function leftt_add(e) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		isParent = e.data.isParent,
		nodes = zTree.getSelectedNodes(),
		treeNode = nodes[0];

		/*ģ��ڵ���ֻ�ܼ�ģ�� By Jzj 09.26*/
		if ( isParent == true ) { //��ӽڵ���Ҫhookһ��
			if(!template_hook(treeNode)) {
				return;
			}
		}
		var nodename="new node" + (newCount++);

		if (treeNode) {
			if (treeNode.id<0) return;
			var parent=(isParent==true)?0:1;
			var childNodes=zTree.transformToArray(treeNode);
			var nodes = new Array();

	         for(var i = 0; i < childNodes.length; i++) {
				       if (childNodes[i].getParentNode()==treeNode)
	                nodes.push(childNodes[i]);
	         }
	         if (nodes.length>0)
	         {
	        	 for(var i = 0; i < nodes.length; i++) {
	        		 if(isParent!=nodes[i]['isParent'])
	        		 {
						      alert("ͬ�нڵ����ͳ�ͻ");
						      return;
	        		 }
	        		 //����ڸ������ �Ѽ���һ������,�������ӽ��
	        		 if(treeNode['level']==0&&nodes[i]['type']=="subPro"){
	        		    alert("����һ������,�������ӽ��");
                  return;
	        		 }
	        		 //eason-8-14
	        		 if(nodes[i]['type']=='field'){
	        			   alert("��������,�������ӽ��");
	                       return;
		        		 }
	        		 if(nodes[i]['type']=='tab'){
	        			 alert("����Tab,�������ӽ��");
	                       return;
		        		 }
	 	         }
	         }

	         if (treeNode['level']==0 && !isParent)
	         {
	        	  alert("�������ٲ�֧�֣�");
					    return;
	         }
	         if (treeNode['type']=="tab" && isParent)
	         {
	        	 alert("��֧����tab���½�����ģ��ڵ��tab�ڵ�");
					   return;
	         }
	         //���������һ�����࣬���������ӽ��
	         if(treeNode['type']=="subPro"&& !isParent) {
             alert("һ��������ֻ�����ӷ�ģ��ڵ�");
             return;
           }

			$.post('/dashboard/admin/addNode', {parent_id: treeNode.id, name: nodename, isParent:parent}, function(result) {
				treeNode=zTree.addNodes(treeNode, {id:result, pId:treeNode.id, isParent:isParent, name:nodename,type:'normal'});
				if (treeNode) {
					currentnode_id=treeNode[0].id;
					zTree.editName(treeNode[0]);

					checktype(result,'');
					//���°�ť
					showCreateButton(treeNode[0]);

					//by Jzj 11-28�����ﹹ�����м���������
					construct_crumb(treeNode[0]);
				} else {
					alert("Ҷ�ӽڵ㱻�������޷������ӽڵ�");
				}
		    });
		} else {
			alert("��ѡ�нڵ�!");
			//leftt_add_root_helper(nodename);
		}
	};

	//����һ������   zz 2012-07-09
	function leftt_add_subpro(e){
	   var zTree = $.fn.zTree.getZTreeObj("lefttree"),
     isParent = e.data.isParent,
     nodes = zTree.getSelectedNodes(),
     treeNode = nodes[0];
     var nodename="new node" + (newCount++);
     //�Ƿ�ѡ�и����
     if (treeNode) {
        if (treeNode.id<0) return;
        if (treeNode['level']!=0){
           alert("һ������ֻ�ܼ��ڸ��ڵ���");
           return;
        }
        else {
           //����������� ������
           var childNodes=zTree.transformToArray(treeNode);
           var nodes = new Array();
           for(var i = 0; i < childNodes.length; i++) {
               if (childNodes[i].getParentNode()==treeNode)
                      nodes.push(childNodes[i]);
           }
           if (nodes.length>0)
           {
             for(var i = 0; i < nodes.length; i++) {
               //ģ��ڵ㲻��ͻ By Jzj 0926
               if(nodes[i]['type']=="template")
                   continue;
               if(nodes[i]['type']!="subPro")
               {
                  alert("����������һ������");
                  return;
               }
             }
           }
           //��������һ��������
           $.post('/dashboard/admin/addSubProNode', {parent_id: treeNode.id, name: nodename}, function(result) {
                treeNode=zTree.addNodes(treeNode, {id:result, pId:treeNode.id, isParent:isParent, name:nodename,icon:'/dashboard/img/diy/subProIcon.png',type:'subPro'});
                currentnode_id=treeNode[0].id;
                zTree.editName(treeNode[0]);
                //���°�ť
                showCreateButton(treeNode[0]);
                checktype(result,'');

              //by Jzj 11-28�����ﹹ�����м���������
				construct_crumb(treeNode[0]);
           });


        }

     }
     //û��ѡ�н��
     else{
        alert("��ѡ��Ҫ�����Ӳ�Ʒ��dashboard���ڵ�");
     }


	}
	//eason-8-6-c ��Ӷ�����ĵ����Ӧ����
	function leftt_add_field(e){
		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		isParent = e.data.isParent,
		nodes =zTree.getSelectedNodes(),
		treeNode = nodes[0];
		var nodename="new node" + (newCount++);

		/*ģ��ڵ���ֻ�ܼ�ģ�� By Jzj 09.26*/
		if(!template_hook(treeNode)) {
			return;
		}

		if (treeNode) {
			if (treeNode.id<0) return;
			var parent=(isParent==true)?0:1;
			var childNodes=zTree.transformToArray(treeNode);
			var nodes = new Array();

	         for(var i = 0; i < childNodes.length; i++) {
				if (childNodes[i].getParentNode()==treeNode)
	                    nodes.push(childNodes[i]);
	         }
	         if (nodes.length>0)
	         {
	        	 for(var i = 0; i < nodes.length; i++) {
	        		 if(isParent!=nodes[i]['isParent'])
	        		 {
						alert("ͬ�нڵ����ͳ�ͻ");
						return;
	        		 }
	        		 if(nodes[i]['type']=='tab'){
		        		 alert("ͬ�нڵ����ͳ�ͻ");
		        		 return;
		        		 }
	 	         }
	         }
	         //�ر�������tab��ͬ��һ���ǣ�field���治������field
	         if (treeNode['type']=="field" && isParent)
	         {
	        	 alert("��֧����������½�����ģ��ڵ�");
					   return;
	         }

	         if (treeNode['level']==0)
	         {
	        	 alert("�������ٲ�֧�֣�");
					return;
	         }

	         if (treeNode['type']=="subPro"){
	           alert("һ��������ֻ�����ӷ�ģ��ڵ�");
             return;
	         }

			$.post('/dashboard/admin/addField', {parent_id: treeNode.id, name: nodename, isParent:parent}, function(result) {
				treeNode=zTree.addNodes(treeNode, {id:result, pId:treeNode.id, isParent:isParent, name:nodename,icon:'/dashboard/img/diy/field.png',type:'field'});
				// alert(treeNode.id+":"+nodename+":"+parent);
				if (treeNode) {
					currentnode_id=treeNode[0].id;
					zTree.editName(treeNode[0]);

					checktype(result,'');
					showCreateButton(treeNode[0]);

					//by Jzj 11-28�����ﹹ�����м���������
					construct_crumb(treeNode[0]);
				} else {
					alert("Ҷ�ӽڵ㱻�������޷������ӽڵ�");
				}
		    });
		}
	}
	//eason-8-6-c ����

	function leftt_add_tab(e) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		isParent = e.data.isParent,
		//nodeType = e.data.nodeType,//��ȡ�ڵ�����
		nodes = zTree.getSelectedNodes(),
		treeNode = nodes[0];

		/*ģ��ڵ���ֻ�ܼ�ģ�� By Jzj 09.26*/
		if(!template_hook(treeNode)) {
			return;
		}

		var nodename="new node" + (newCount++);
		if (treeNode) {
			if (treeNode.id<0) return;
			var parent=(isParent==true)?0:1;
			var childNodes=zTree.transformToArray(treeNode);
			var nodes = new Array();

	         for(var i = 0; i < childNodes.length; i++) {
				if (childNodes[i].getParentNode()==treeNode)
	                    nodes.push(childNodes[i]);
	         }
	         if (nodes.length>0)
	         {
	        	 for(var i = 0; i < nodes.length; i++) {
		        	// alert(node[i]['type']);
	        		 if(isParent!=nodes[i]['isParent'])
	        		 {
						      alert("ͬ�нڵ����ͳ�ͻ");
						      return;
	        		 }
	        		 if(nodes[i]['type']=="field"){
	        			 alert("ͬ�нڵ����ͳ�ͻ");
		        		 return;
		        		 }
	 	         }
	         }
	         if (treeNode['level']==0)
	         {
	        	 alert("�������ٲ�֧�֣�");
					   return;
	         }
	         //eason-8-6-e ��������field�¼�tab
	         if(treeNode['type']=='field'){
		         alert("�����²������tab");
		         return;
		         }

	         if (treeNode['type']=="subPro"){
	           alert("һ��������ֻ�����ӷ�ģ��ڵ�");
             return;
	         }

			$.post('/dashboard/admin/addTab', {parent_id: treeNode.id, name: nodename, isParent:parent}, function(result) {
				treeNode=zTree.addNodes(treeNode, {id:result, pId:treeNode.id, isParent:isParent, name:nodename,icon:'/dashboard/img/diy/3.png',type:'tab'});
				// alert(treeNode.id+":"+nodename+":"+parent);
				if (treeNode) {
					currentnode_id=treeNode[0].id;
					zTree.editName(treeNode[0]);
					//�������������
				  checktype(result,'');
				  //��ఴť����
					showCreateButton(treeNode[0]);

					//by Jzj 11-28�����ﹹ�����м���������
					construct_crumb(treeNode[0]);

				} else {
					alert("Ҷ�ӽڵ㱻�������޷������ӽڵ�");
				}
		    });
		}
	};

	//by Jzj 11-27
	//�˴������û������½�dashboard��ť������󰴱���󴥷�����Ҫ���Ᵽ��������Ϣ
	function leftt_add_root(e) {
		var dashboard_name = $.trim($('#dashboard_name_input').val());
		
		if ( dashboard_name=="" ) {
			$("#dashboard_name_hint").text("������Dashboard����").css('color', "red");
			e.stopPropagation();
			e.preventDefault();
			return;
		}
		
		leftt_add_root_helper(dashboard_name);
		$('#dashboard_name_input').val("");
		$("#dashboard_name_hint").text("");
	};

	/*
		By Jzj 09.26
		������addRoot���߼�����һ��
	*/
	function leftt_add_root_helper(dashboard_name) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree");

		$.getJSON('/dashboard/admin/addRoot', {name: dashboard_name}, function(result) {
			var root_id = parseInt(result.root_id);
			var template_id = parseInt(result.template_id);

			treeNode =  zTree.addNodes(null, {id:root_id, pId:0, isParent:true, name:dashboard_name,type:'normal', icon: "/dashboard/img/diy/root.png"});
			if (treeNode) {
				//������ʱ���ȱպ����е����ڵ� by Jzj 11.28
				zTree.expandAll(false);
				currentnode_id=treeNode[0].id;
		//		zTree.addNodes(treeNode[0], {id:template_id, pId:currentnode_id, isParent:true, name:"ģ��",type:'template', icon:'/dashboard/img/diy/template.png'});
				zTree.editName(treeNode[0]);
				document.getElementById("ztreein").scrollTop = 0;
				$('#typeseldiv').css('display','none');

				//��ť����  zz 2012-10-30
				showCreateButton(treeNode[0]);

				//by Jzj 11-28�����ﹹ�����м���������
				construct_crumb(treeNode[0]);
			} else {
				alert("Ҷ�ӽڵ㱻�������޷������ӽڵ�");
			}

			//���½���dashboard�ŵ�������ȥ by Jzj 2012-11-27
			$("#lefttree").children().eq(2).after($("#lefttree").children().last());


			//By Jzj 11.28 �½�֮��Ҫת�����ҵ�ƽ̨��ȥ
			checktype(currentnode_id,'');
			switchTab("admin");
		});
	}

	/*
		By Jzj 09.26
		һ�����Ӻ�������Ҫ���ڸ�����ӽڵ㡢tab�Ȱ�ť
		���ѡ�еĽڵ���template����ô����false��������true

	*/
	function template_hook(treeNode) {
		if(treeNode != undefined && treeNode!=false) {
			if(treeNode.type == "template") {
				alert("ģ��ڵ���ֻ�����ģ��!");
				return false;
			}
		}
		return true;
	}

	/*
		By Jzj 09.26
		һ�����Ӻ�������Ҫ���ڸ�����ӽڵ㡢tab�Ȱ�ť
		���ѡ�еĽڵ���template����ô����false��������true
	*/
	function template_op_hook(treeNode) {
		if(treeNode!=false) {
			if(treeNode.type == "template") {
				alert("���ܶ�ģ��ڵ���в���!");
				return false;
			}
		}
		return true;
	}


	function leftt_edit() {
		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		nodes = zTree.getSelectedNodes(),
		treeNode = nodes[0];
		if (treeNode.id<0) return;
		//by Jzj 0926
		if(!template_op_hook(treeNode)) {
			return;
		}

		if (nodes.length == 0) {
			alert("����ѡ��һ���ڵ�");
			return;
		}
		showCreateButton(null);
		zTree.editName(treeNode);
	};
	function leftt_remove(e) {

		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		nodes = zTree.getSelectedNodes(),
		treeNode = nodes[0];
		if (treeNode.id<0) return;

		//by Jzj 0926
		if(!template_op_hook(treeNode)) {
			return;
		}

		if (nodes.length == 0) {
			alert("����ѡ��һ���ڵ�");
			return;
		}
		showCreateButton(null);
		zTree.removeNode(treeNode, true);
	};

    var curSrcNode, curType;

    //��ȡĳ�ڵ��Dashboard��id
    function getCurRootDbId(treeNode) {
        if (treeNode) {
            while(treeNode.level!=0) {
                treeNode=treeNode.getParentNode();
            }
            return treeNode.id;
        }
        return -1;
    }

    //�жϸýڵ��Ƿ�Ϊ��ͨ�ڵ�(��dashboard�ڵ�)
    function isNormalNode(treeNode){
        if(treeNode&&treeNode.type=="normal"&&treeNode.isParent&&treeNode.level!=0){
            return true;
        }
        return false;
    }

    //ͬ��ڵ��Ƿ�ȫΪĳһ���������͵Ľڵ�
    function isAllSpecialNodeType(children,node_type){
        var flag = true;
		if(children)
		{
			for(var i=0;i<children.length;i++)
			{
				switch(node_type)
				{
				    case 0: //�ڵ�
					    if(children[i].type!="normal"||!children[i].isParent){
						    if(children[i].type!="template") //�����template�����ǣ��Ǿ����ˣ�By Jzj 0926
                            	flag = false;
					    }
					    break;
					case 1: //ģ��
						if(children[i].isParent){
							flag = false;
						}
						break;
					case 2: //tab
						if(children[i].type!="tab"){
							flag = false;
						}
						break;
					case 4:
						if(children[i].type!="field"){
                            flag = false;
						}
						break;
				}
			}
		}
		return flag;
    }

	function fontCss(treeNode) {
		var aObj = $("#" + treeNode.tId + "_a");
		aObj.removeClass("copy").removeClass("cut");
		if (treeNode === curSrcNode) {
			aObj.addClass(curType);
		}
	}

	function setCurSrcNode(treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree");
		if (curSrcNode) {
			delete curSrcNode.isCur;
			var tmpNode = curSrcNode;
			curSrcNode = null;
			fontCss(tmpNode);
		}
		curSrcNode = treeNode;
		if (!treeNode) return;

		curSrcNode.isCur = true;
		zTree.cancelSelectedNode();
		fontCss(curSrcNode);
	}

	function copy(e) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		nodes = zTree.getSelectedNodes();

		//ֻ��"Tab"��"ģ��"���Ը��ƣ����к�ճ��
		if(nodes.length == 0) {
			alert("����ѡ��һ���ڵ�");
			return;
		}
		else if(nodes[0].type!="tab"&&nodes[0].isParent){
			alert('��"tab"��"ģ��"���ܽ��и��Ʋ���');
			return;
		}

		curType = "copy";
		setCurSrcNode(nodes[0]);
	}

	function cut(e) {
		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		nodes = zTree.getSelectedNodes();
		if (nodes.length == 0) {
			alert("����ѡ��һ���ڵ�");
			return;
		}
		else if(nodes[0].type!="tab"&&nodes[0].isParent){
			alert('��"tab"��"ģ��"���ܽ��м��в���');
			return;
		}

		curType = "cut";
		setCurSrcNode(nodes[0]);
	}

	function paste(e) {
		if (!curSrcNode) {
			alert("����ѡ��һ���ڵ���� ���� / ����");
			return;
		}
		var zTree = $.fn.zTree.getZTreeObj("lefttree"),
		nodes = zTree.getSelectedNodes(),
		targetNode = nodes.length>0? nodes[0]:null;
		if(!targetNode){
			alert('��ѡ��Ŀ��ڵ�!');
			return;
		}
		else if (curSrcNode === targetNode) {
			alert("�����ƶ���Դ�ڵ� �� Ŀ��ڵ���ͬ");
			return;
		} else if (curType === "cut" && (!!targetNode && curSrcNode.parentTId === targetNode.tId)) {
			alert("�����ƶ���Դ�ڵ� �Ѿ������� Ŀ��ڵ���");
			return;
		} else if(getCurRootDbId(curSrcNode)!=getCurRootDbId(targetNode)){
			alert("ֻ����һ��Dashboard�ڽ��и���/����-ճ������");
			return;
		}
		else if(curSrcNode.type=="tab") //�������Ľڵ���"tab"
		{
			//���ڵ�ֻ��Ϊ��ͨ�ڵ�(��dashboard�ڵ�)��tab
			if(!isNormalNode(targetNode)&&targetNode.type!="tab")
			{
				alert('Ŀ��ڵ㲻��ȷ!"tab"�ĸ��ڵ�ֻ��Ϊ��ͨ�ڵ�(��dashboard�ڵ�)��tab');
				return;
			}
			//ͬ��ֻ����tab
			var children = targetNode.children;
			if(!isAllSpecialNodeType(children,2))
			{
				alert('Ŀ��ڵ㲻��ȷ!ͬ��ڵ�ֻ��Ϊ"tab"');
				return;
		    }
		    //����������ڵ���2->targetNode�Ĳ���������ڵ���1
		    if(targetNode.level<1)
			{
				alert('Ŀ��ڵ㲻��ȷ!Ŀ��ڵ�Ĳ���������ڵ���1');
				return;
			}
			if(curType === "copy"){
				$.post('/dashboard/admin/ajaxCopyTab', {node_id: curSrcNode.id, to_parent_id: targetNode.id}, function(zNodesArray) {
					var zNodes=eval(zNodesArray);
					var success=true;
					loop:
					for(var i=0;i<zNodes.length;i++)
					{
						//���Ҹ��ڵ�
						var parentNode=zTree.getNodeByParam("id", zNodes[i]['pId'], null);
						if(zNodes[i]['type']=="tab"){
							treeNode=zTree.addNodes(parentNode, {id:zNodes[i]['id'], pId:zNodes[i]['pId'], isParent:zNodes[i]['isParent'], name:zNodes[i]['name'],icon:'/dashboard/img/diy/3.png',type:zNodes[i]['type']});
						}
						else if(zNodes[i]['type']=="field")
						{
							treeNode=zTree.addNodes(parentNode, {id:zNodes[i]['id'], pId:zNodes[i]['pId'], isParent:zNodes[i]['isParent'], name:zNodes[i]['name'],icon:'/dashboard/img/diy/field.png',type:zNodes[i]['type']});
						}
						else {
							treeNode=zTree.addNodes(parentNode, {id:zNodes[i]['id'], pId:zNodes[i]['pId'], isParent:zNodes[i]['isParent'], name:zNodes[i]['name'], type:zNodes[i]['type']});
						}
                        if(!treeNode&&success)
                        {
                        	success=false;
                        	alert('idΪ'+zNodes[i]["id"]+'��֮���"tab"����"ģ��"�ڵ�ҳ�渴��ʧ��');
                        	break loop;
                        }
					}
					if(success)
					{
						targetNode = zTree.getNodeByParam("id", zNodes[0]['id'], targetNode);
				    }
			    });
			}
			else if(curType === "cut"){
				var to_parent_id = targetNode.id;
				targetNode = zTree.moveNode(targetNode, curSrcNode, "inner");
				if (!targetNode) {
					alert("����ʧ�ܣ�Դ�ڵ���Ŀ��ڵ�ĸ��ڵ�");
				}
				else {
					$.post('/dashboard/admin/ajaxCutTab', {node_id: curSrcNode.id, to_parent_id: to_parent_id}, function() {

				    });
				}
				targetNode = curSrcNode;
		    }
	    }
		else if(!curSrcNode.isParent) //�������Ľڵ���ģ��
		{
			//���ڵ�ֻ��Ϊ��ͨ�ڵ�(��dashboard�ڵ�)��tab
			if(!isNormalNode(targetNode)&&targetNode.type!="tab"&&targetNode.type!="field")
			{
				alert('Ŀ��ڵ㲻��ȷ!"ģ��"�ĸ��ڵ�ֻ��Ϊ��ͨ�ڵ�(��dashboard�ڵ�),tab������');
				return;
			}
			//ͬ��ֻ����ģ��
			var children = targetNode.children;
			if(!isAllSpecialNodeType(children,1))
			{
				alert('Ŀ��ڵ㲻��ȷ!ͬ��ڵ�ֻ��Ϊ"ģ��"');
				return;
		    }
			//����������ڵ���2->targetNode�Ĳ���������ڵ���1
		    if(targetNode.level<1)
			{
				alert('Ŀ��ڵ㲻��ȷ!Ŀ��ڵ�Ĳ���������ڵ���1');
				return;
			}
			if(curType === "copy"){
				$.post('/dashboard/admin/ajaxCopyLeaf', {node_id: curSrcNode.id, to_parent_id: targetNode.id}, function(zNodesArray) {
					var zNodes=eval(zNodesArray);
					treeNodes=zTree.addNodes(targetNode, {id:zNodes[0]['id'], pId:zNodes[0]['pId'], isParent:zNodes[0]['isParent'], name:zNodes[0]['name'], type:zNodes[0]['type']});
                    if(!treeNodes){
                    	alert('����ʧ��');
                    }
                    else
                    {
                    	targetNode = treeNodes[0];
                    }
			    });
			}else if(curType === "cut"){
				var to_parent_id = targetNode.id;
				targetNode = zTree.moveNode(targetNode, curSrcNode, "inner");
				if (!targetNode) {
					alert("����ʧ�ܣ�Դ�ڵ���Ŀ��ڵ�ĸ��ڵ�");
				}
				else {
					$.post('/dashboard/admin/ajaxCutLeaf', {node_id: curSrcNode.id, to_parent_id: to_parent_id}, function() {

				    });
				}
				targetNode = curSrcNode;
			}
		}

		setCurSrcNode();
		delete targetNode.isCur;
		zTree.selectNode(targetNode);
    	checktype(targetNode.id,'');
	}

	//���ݵ�ǰѡ�н���id ��type ����ʾ��Ӧ������ť  zz 2012-10-30
	function showCreateButton(targetNode){
	    //����֮��ťȫ������   �½�dashboard��ťʼ�մ���


	    $('.createNodeClass').css('display','none');



	    $('#createDashboard').hide();

      if(targetNode!=null){

         //alert("~~");
         //��ʾ��������
         $('#createDashboard').show();
         $('#up_conf_div').show();
         $('.createTip').css('display','none');
         $('#editdiv').show();
         $('#releaseNoteDiv').hide();
         $('#isURL').hide();
         $('#openDashboard02').hide();

         var targetNode_id=targetNode.id;
         var targetNode_level=targetNode.level;
         var targetNode_type=targetNode.type;
         if(targetNode_id>0){
           /*
             //ɾ������������ť ����
           $('#leftt_edit').css('color','blue');
           $("#leftt_edit").bind("click", leftt_edit);
           $('#leftt_remove').css('color','blue');
           $("#leftt_remove").bind("click", leftt_remove);
            */

            //ģ��
 /*           if(targetNode_type=='template'){
                activeLink('leftt_addLeaf');// �������ģ���¼�
                $('#leftt_addLeaf').css('margin-left','');

                old_intro_imgsrc="tu.png";
               $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/tu.png");
            }
*/            //һ������
            if(targetNode_type=='subPro'){
               activeLink('leftt_addParent');

               old_intro_imgsrc="zuo.png";
               $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/zuo.png");
               $('#isURL').css('display','');
               $('#openDashboard02').css('display','');

            }
            //ѡ������  ֻ�����ģ��
            if(targetNode_type=='field'){
               activeLink('leftt_addLeaf');// �������ģ���¼�
             $('#leftt_addLeaf').css('margin-left','');

               $('#createDashboard').hide();  //�����°�������


               old_intro_imgsrc="tu.png";
               $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/tu.png");
            }
            //tab�� �����tab or ���� or ģ��
            if(targetNode_type=='tab'){
               activeLink('leftt_addtab');
               $('#leftt_addtab_tip').css('display','');
               //$('#tabTip').text("<�� ��Ӷ�����tab");

               activeLink('leftt_addField');


               activeLink('leftt_addLeaf');// �������ģ���¼�

               old_intro_imgsrc="ding_qu_tu.png";
                $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/ding_qu_tu.png");
            }

            //���
            if(targetNode_type=='normal'&&targetNode.isParent){
                if(targetNode_level==0){


                    //�����  �¿� һ������ �� ��ӽ��
                    activeLink('leftt_addSubPro');

                    activeLink('leftt_addParent');

                    old_intro_imgsrc="zuo_zi.png";
                    $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/zuo_zi.png");

                }
                else{
                   //һ����
                   activeLink('leftt_addParent');


                   activeLink('leftt_addtab');

                   activeLink('leftt_addField');

                   activeLink('leftt_addLeaf');// �������ģ���¼�

                   old_intro_imgsrc="zuo_ding_qu_tu.png";
                   $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/zuo_ding_qu_tu.png");
                }

            }

             //ģ��
            if(targetNode_type=='normal'&&!targetNode.isParent){
               $('#createDashboard').hide();  //ģ���°�������

               $('#backOldVersionButton').text("���ؾɰ����ý���");
            }

         }
         /*
         else

            $('#createDashboard').css('display','none');  //ģ���°�������
         */

      }

      else{
         $('#editdiv').hide();
         $('#createDashboard').hide();  //ģ���°�������
         $('#up_conf_div').hide();
      }
	}

	function cancelLink(linkId){

	}

	function activeLink(linkId){

	  $('#'+linkId).css('display','');
	  //$('#'+linkId).text(  $('#'+linkId).text()+"+");

	  /*
	  if(linkId=='leftt_addLeaf')
	     $("#leftt_addLeaf").bind("click", {isParent:false}, leftt_add);
	  if(linkId=='leftt_addSubPro')
       $("#leftt_addSubPro").bind("click", {isParent:true}, leftt_add_subpro);
    if(linkId=='leftt_addParent')
       $("#leftt_addParent").bind("click", {isParent:true}, leftt_add);
	  if(linkId=='leftt_addtab')
	      $("#leftt_addtab").bind("click", {isParent:true}, leftt_add_tab);
	  if(linkId=='leftt_addField')
        $("#leftt_addField").bind("click", {isParent:true}, leftt_add_field);
     */
	}

	$(document).ready(function(){


		 $.ajaxSetup({
			    async : false
			});
		$.fn.zTree.init($("#lefttree"), setting, zNodes);
		$("#leftt_addRoot").bind("click", leftt_add_root);
		$("#leftt_addtab").bind("click", {isParent:true}, leftt_add_tab);//��ӽڵ�����ȷ�ϣ�2->tab

		//eason-8-6-b ��������
		$("#leftt_addField").bind("click", {isParent:true}, leftt_add_field);
		//����һ������
		$("#leftt_addSubPro").bind("click", {isParent:true}, leftt_add_subpro);
		$("#leftt_addParent").bind("click", {isParent:true}, leftt_add);
		$("#leftt_addLeaf").bind("click", {isParent:false}, leftt_add);


		$("#leftt_edit").bind("click", leftt_edit);
		$("#leftt_remove").bind("click", leftt_remove);
		var treeObj = $.fn.zTree.getZTreeObj("lefttree");

		var targetNode=null;

		    showCreateButton(targetNode);



    //������ť������ȥ
    $('.createNodeClass').mouseover(function(){
        var theButtonId=$(this).attr('id');
        $(this).css('font-weight','bold');  //����Ӵ�


        $('#'+theButtonId+'_tip').css('font-weight','bold');

        var new_intro_imgsrc='';
        if(theButtonId=='leftt_addLeaf')
           new_intro_imgsrc='single_tu.png'
        if(theButtonId=='leftt_addSubPro')
          new_intro_imgsrc='single_zi.png';
        if(theButtonId=='leftt_addParent')
          new_intro_imgsrc='single_zuo.png';
        if(theButtonId=='leftt_addtab')
          new_intro_imgsrc='single_ding.png';
        if(theButtonId=='leftt_addField')
          new_intro_imgsrc='single_qu.png';
        $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/"+new_intro_imgsrc);

    });

    $('.createNodeClass').mouseout(function(){
         var theButtonId=$(this).attr('id');
        $(this).css('font-weight','');  //�����ϸ

        $('.createTip').css('font-weight','normal');
        if(old_intro_imgsrc!=''){
           $('#introImg').attr('src',DASHBOARD_PATH+"img/createIntro/"+old_intro_imgsrc);

        }
    });



});

function backOldVersion(){
   var edit_src=$('#editIframe').attr('src');
   if(edit_src!=undefined){

     if($('#backOldVersionButton').text()=="���ؾɰ����ý���"){
      edit_src=edit_src.replace(/confchart/, "chart");
         $('#editIframe').attr('src',edit_src);
         $('#backOldVersionButton').text("�°汾���ý���");
      }
      else if($('#backOldVersionButton').text()=="�°汾���ý���"){
         edit_src=edit_src.replace(/chart/, "confchart");
         $('#editIframe').attr('src',edit_src);
         $('#backOldVersionButton').text("���ؾɰ����ý���");
      }



      //$('#editIframe').reload();
   }
   //alert(edit_src);
}

//��ʾlogo
/*  by Jzj ���� 2012-11-27
function logoShow(){
     $('#logoFileInput').val("");
     $("#logoNameInput").val("");
     $('#uploadForm').attr('action','/dashboard/admin/uploadLogo/'+treeNode.id);

            //eason-8-1 getLogoPathByNodeId �Ĺ��ܷ����˸ı䷵�ص��ǸĽڵ��ȫ����Ϣ
            var the_logo_path=getLogoPathByNodeId(sel_dash_id);

            $('#logoNameInput').attr('value',the_logo_path.DbNode.logo_name);
          	if(the_logo_path.DbNode.logo_type == 1){//logoͼ
                //alert(1);
              $('#dashImg').attr("src",the_logo_path.DbNode.logo_path);  //��ʾlogo
                if(the_logo_path!="")
                  $('#dashImg').css('display','');
                else
                  $('#dashImg').css('display','none');

                $('#dash_logo_name').css('display','none');
                $('#dash_logo').css('display','');

            }else if(the_logo_path.DbNode.logo_type == 2){//logo����

                  $('#logoNameInput').attr('value',the_logo_path.DbNode.logo_name);
                  $('#pics').attr('checked','false');
                  $('#words').attr('checked','true');
                  $('#dash_logo_name').css('display','');
                  $('#dash_logo').css('display','none');
            }
}*/

//���� admin ����������� zz 2012-10-30
function  adminDivShow(targetNode){
  $('#typeseldiv').css('display','none');
  $('#dashboardLogoDiv').css('display','none');   //logoDiv

  $('#urldiv').css('display','none');
  $('#db_url').css('display','');   //һ���������
  $('#openDashboard').css('display','none');
  $('#openDashboard_2').css('display','none');
  $('#hideNodeSpan').css('display','none');
  $('#themeSpan').css('display','none');
  $('#linkShowDiv').css('display','none');
  $('#backOldVersionButton').css('display','none');
  $('#field_comment').css('display','none');  //������������

  $('#isRadio').css('display','none');



  if(targetNode!=null){

       //��ʾ��������
       $('#createDashboard').show();

       var targetNode_id=targetNode.id;
       var targetNode_level=targetNode.level;
       var targetNode_type=targetNode.type;
       if(targetNode_id>0){
           //ģ��
          if(targetNode_type=='template'){
             //do nothing
             $('#db_url').css('display','none');
          }
          if(targetNode_type=='subPro'){
             $('#urldiv').css('display','');
          }
          if(targetNode_type=='field'){
              $('#urldiv').css('display','');
              $('#linkShowDiv').css('display','');

              $('#field_comment').css('display','');

               //��������
              $('#createDashboard').hide();
          }
          if(targetNode_type=='tab'){
             $('#urldiv').css('display','');
             var temptreeNode=targetNode.getParentNode();
             if(temptreeNode.type != 'tab')//���ڵ㲻��tab
                 $('#isRadio').css('display','');

          }
          //���
          if(targetNode_type=='normal'&&targetNode.isParent){
            if(targetNode_level==0){
               //�����
               $('#dashboardLogoDiv').css('display','');   //logoDiv
               $('#urldiv').css('display','');
                $('#themeSpan').css('display','');
               $('#openDashboard').css('display','');
               $('#linkShowDiv').css('display','');
            }
            else{
               //һ����
                $('#urldiv').css('display','');
                $('#hideNodeSpan').css('display','');
            }

        }
        //ģ��
        if(targetNode_type=='normal'&&!targetNode.isParent){
             //һ����
             $('#urldiv').css('display','');
             $('#linkShowDiv').css('display','');
             $('#backOldVersionButton').css('display','');
             //����ȡ��
             $('#createDashboard').css('display','none');
        }
       }
       else{

         $('#createDashboard').hide();
       }

  }

}

//�����ж�
function checktype(id,name, pid) {

    $('#typeseldiv').css('display','none');

    $('#editdiv').html('');

    switch (id) {
        case -2: {
            window.location.href="/dashboard/admin/AuthApproval";
            break;
        }
        case -3: {
            window.location.href="/dashboard/admin/AuthGrant";
            break;
        }
        case -4: {
            window.location.href="/dashboard/admin/AuthView";
            break;
        }
        case -6: {
            window.location.href="/dashboard/admin/choose_dashboard/db_manage";
            break;
        }
        case -7: {
            window.location.href="/dashboard/admin/choose_dashboard/task_manage";
            break;
        }
        case -8: {
            window.location.href="/dashboard/admin/choose_dashboard/machine_manage";
            break;
        }

		case -100:
			$('#content').children("div:visible").addClass('previous').hide();
			
			if ( $('#zhushou_admin_'+pid).length )
				$('#zhushou_admin_'+pid).fadeIn();
			else {
				var html = '<iframe src="/zhushou/admin/?dashboard_id='+pid+'" width="100%" height="800" id="zhushou_admin_'+pid+'"></iframe>';
				$('#content').append(html);
			}
			return;
            break;
			 
			 
        default:
			$('#content').children('.previous').removeClass('previous').show();
			$('#content').children('iframe').hide();
            break;
    }


    var zTree = $.fn.zTree.getZTreeObj("lefttree");
    nodes = zTree.getSelectedNodes(),
    treeNode = nodes[0];


    //Ҷ�ӽ��
    if (!treeNode.isParent) {
        var str=name+','+id;   //idΪnodeId
        var iframe=showiframe(str);
        $('#editdiv').html(iframe);
    }
    //zz 2012-10-30
    adminDivShow(treeNode); // ���� admin �����������

    //logo��ʾ  zz2012-07-10��
    if(treeNode.id>0) {
      //$('#isRadio').css('display','none');
      //$('#ThemeSelection').css('display','none')//����ѡ��

      if(treeNode.level==0) {
           sel_dash_id=treeNode.id;
           readDashboardLogo();
           readDashboardNickname();
           readAuthStat();//����Ƿ񿪷�
           readTheme();//��ȡ����
           //eason-8-6-h
           //$('#field_comment').css('display','none');
           //$('#ThemeSelection').css('display','');//����ѡ��
           //$('#isRadio').css('display','none');
        }
        else {
            //��Ҷ�ӽڵ�
           if(treeNode.type=="subPro"){
           		readURLBox();
				readisURLText();
				readURLType();
           		readFirstClassAuthStat();
           }else if(treeNode.type=="normal"&&treeNode.isParent || treeNode.type =="template"){

                 readHideStat();//��ýڵ��Ƿ���ʾ
                //eason-8-6-h
                //$('#field_comment').css('display','none');
                //$('#isRadio').css('display','none');
                /*
                if($('#urldiv > input:eq(1)').length>0)
                {
                  $('#urldiv > input:eq(1)').css('display','');
                  $('#urldiv > span:eq(1)').css('display','');
                }
                else
                {
                    //$('#urldiv > img').before('<input type="checkbox" id="db_node_hide" onchange="saveHideStat();"><span>���ظýڵ�</span>');
                }
                */
            }
            else if(treeNode.type =="field"){//eason-8-6-g ���fieldʱ����ʾ����field���۵Ĺ���

                 //$('#field_comment').css('display','');

                  //���øú����������
                var comment=getLogoPathByNodeId(treeNode.id);

                var title_comment_str = URLDecode(comment.DbNode.node_comment);
                if (title_comment_str!='null'&& title_comment_str!=null)
                  var title_comment_array = title_comment_str.split("@_@");
                else
                  var title_comment_array = new Array('','');
                $('#commentTitle').val(title_comment_array[0]);
                if(comment.DbNode.comment_location==1)
                  $('#commentLocatin').attr("checked",true);
                else $('#commentLocatin').attr("checked",false);
                  ue.setContent(title_comment_array[1]);

             }
              else if(treeNode.type =="tab" ){

                    //�ر�����
                  //$('#field_comment').css('display','none');

                  temptreeNode=treeNode.getParentNode();
                  if(temptreeNode.type !='tab'){//���ڵ㲻��tab
                    //$('#isRadio').css('display','');

                    var isRadio=getLogoPathByNodeId(treeNode.id);
                    if(isRadio.DbNode.isRadio ==1)
                      $('#isRadioBox').attr("checked",true);
                    else
                      $('#isRadioBox').attr("checked",false);

                  }
                  //else{ $('#isRadio').css('display','none');}

              }
                /*
                else{

                  $('#urldiv > input:eq(1)').css('display','none');
                  $('#urldiv > span:eq(1)').css('display','none');
                  //eason-8-6-h
                  $('#field_comment').css('display','none');
                 }
                 */
            //$('#dashboardLogoDiv').css('display','none');
        }
    }
    /*
    else {
       //$('#dashboardLogoDiv').css('display','none');
       //eason-8-6-h
       //$('#field_comment').css('display','none');
    }
    */
    //�����ģ�� ê���Ƿ���ʾ  �͸��ڵ���ʾ
    if(treeNode.type=="field"||(treeNode.type=="normal"&&!treeNode.isParent) ||(treeNode.type=="normal"&&treeNode.level==0)){

       //$('#linkShowDiv').css('display','');
       $.post('/dashboard/admin/getLinkshowByNodeId/'+treeNode.id,
         function(result){
           if(result==1)  //ê���Ƿ���Ҫ�����ʾ
             $('#linkShowCheck').attr('checked','checked');
           else
             $('#linkShowCheck').removeAttr('checked');
        });
    }
    //else
       //$('#linkShowDiv').css('display','none');
    showurl();//�����תurl
}


function SetWinHeight(obj) {

}

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
	 output=output.replace(/\%08/g," ");
	 output=output.replace(/\%3C/g,"<");
	 output=output.replace(/\%3D/g,"=");
	 output=output.replace(/\%3E/g,'>');
	 output=output.replace(/\%3F/g,"?");
	 output=output.replace(/\%40/g,"@");
	 output=output.replace(/\%7D/g,"}");
	 output=output.replace(/\%7B/g,'{');
	 output=output.replace(/\%7E/g,"~");
	 output=output.replace(/\%5B/g,"[");
	 output=output.replace(/\%5D/g,']');
	 output=output.replace(/\%5E/g,"^");
	 output=output.replace(/\%5F/g,"_");
	return output;
}


//�����ҳ��
function showiframe(strs) {
    var table=strs.split(",");
    if (table.length==2) {
        var url="/dashboard/confchart/edit/";;
        url+=table[1];
        var frame="";
        frame='<iframe id="editIframe" src="'+url+'" frameborder=0 height="'+document.body.offsetHeight+'" width="100%"></iframe>';
        return frame;
    } else {
        return '';
    }
}

function savetype() {
    $.post('/dashboard/admin/leaftype/' , {nodeId: currentnode_id, newleaf: $('#typesel').val()}, function(result) {
        checktype(currentnode_id,'');
    });
}

//��ʾ������ת
function showurl() {
    var db_name=getSelRootDbId();
    var sel_dbId=getSelDbId();
    //eason-7-17 �޸�DASHBOARD_PATH
    var db_url="/dashboard/show/spanindex/"+sel_dbId+"/dashboard:"+db_name;

    $('#urldiv').css('display','none');
    if (treeNode.id>0) {
        $('#urldiv').css('display','');
        $('#db_url').attr('href',db_url);
    }
}


function readAuthStat() {
    var db_name=getSelRootDbId();
    $.post('/dashboard/admin/isOpenDb/' + db_name, {} , function(result) {
        if(result==1) {
            $('#db_auth_check').attr("checked", true);
        } else if(result==-1) {
            $('#db_auth_check').attr("checked", false);
        }
    });
}

function readFirstClassAuthStat() {
    var sel=_getSelDbId();
    var db=getSelRootDbId();
    $.post('/dashboard/admin/isFirstClassOpenDb/' + db + '/' + sel, {} , function(result) {
        if(result==1) {
            $('#db_auth_check_2').attr("checked", true);
        } else if(result==-1) {
            $('#db_auth_check_2').attr("checked", false);
        }
    });
}

function readHideStat() {
    var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    if(treeNode){
        $.post('/dashboard/admin/getHideStat/' + treeNode['id'], {} , function(result){
            if(result==1) {
                $('#db_node_hide').attr("checked", true);
            } else if(result==0) {
                $('#db_node_hide').attr("checked", false);
            }
        });
    }
    return false;
}

function saveAuthStat(){
    var db_name=getSelRootDbId();
    var stat=$("#db_auth_check").attr("checked");
    if( stat == "checked" ) {
        stat='add';
    } else {
        stat='del';
    }
    $.post('/dashboard/admin/SaveOpenStat/' + db_name+'/'+stat, {} , function(result) {
        alert('�޸ĳɹ�');
    });
}

function saveFirstClassAuthStat(){
	 var db=getSelRootDbId();
	 var sel=_getSelDbId();
	 var stat=$("#db_auth_check_2").attr("checked");
     if( stat == "checked" ) {
         stat='add';
     } else {
         stat='del';
     }
     $.post('/dashboard/admin/SaveFirstClassAuthStat/' + db +'/' + sel +'/'+stat, {} , function(result) {
         alert('�޸ĳɹ�');
     });
}

function saveTheme() {
    var db_name=getSelRootDbId();
    var themeid=$("#ThemeSelection").val();
    $.post('/dashboard/admin/saveTheme/' + db_name+'/'+themeid, {} , function(result) {
        alert('�޸ĳɹ�');
    });
}

function readTheme() {
    var db_name=getSelRootDbId();
    $.post('/dashboard/admin/readTheme/' + db_name, {} , function(result) {
      $("#ThemeSelection").val(result);
    });
}

function saveDashboardLogo() {
	var db_name=getSelRootDbId();
	var logo_name = $("#dashboard_conf2 #logoNameInput").val();
	$.post('/dashboard/admin/saveDashboardLogo/'+db_name+'/'+logo_name, {} , function(result) {
		alert('�޸ĳɹ�');
    });
}

function checkDashboardNickname(nick_name) {
	var flag = true;
	$.post('/dashboard/admin/checkDashboardNickname/'+nick_name, {} , function(result) {
		if(result == 1)flag = false;
    });
    return flag;
}

function saveDashboardNickname() {
	var db_name=getSelRootDbId();
	var nick_name = $("#dashboard_conf2 #nickNameInput").val();
	if(checkDashboardNickname(nick_name)){
		$.post('/dashboard/admin/saveFirstPicture/' + db_name, {} , function(result) {
	    });
		$.post('/dashboard/admin/saveDashboardNickname/'+db_name+'/'+nick_name, {} , function(result) {
			alert('�޸ĳɹ�');
	    });
    }else alert('�����ظ�');
}

function readDashboardLogo() {
	var db_name=getSelRootDbId();
    $.post('/dashboard/admin/readDashboardLogo/' + db_name, {} , function(result) {
    	$("#dashboard_conf2 #logoNameInput").val(result);
    });
}

function readDashboardNickname() {
	var db_name=getSelRootDbId();
    $.post('/dashboard/admin/readDashboardNickname/' + db_name, {} , function(result) {
    	$("#dashboard_conf2 #nickNameInput").val(result);
    });
}

//����ê����ʾ���
function saveLinkShow(){
   var zTree = $.fn.zTree.getZTreeObj("lefttree"),
   nodes = zTree.getSelectedNodes();
   var currentNodeId=nodes[0]['id'];

   var stat=0;
   if($("#linkShowCheck").attr("checked")=="checked")
       stat=1;

   $.post('/dashboard/admin/saveLinkShow/' + currentNodeId+'/'+stat, {} , function(result) {
       alert('�޸ĳɹ�');
   });

}



function saveHideStat(){
    var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    if(treeNode)
    {
      var stat = 0;
        if($("#db_node_hide").attr("checked") == "checked")
        {
            stat = 1;
        }
        $.post('/dashboard/admin/SaveHideStat/' + treeNode['id'] +'/'+stat, {} , function(result) {
            alert('�޸ĳɹ�');
        });
    }
    return false;
}

function getSelRootDbId() {
    var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    var streeNode = nodes[0];
    if (streeNode) {
        while(streeNode['level']!=0) {
            streeNode=streeNode.getParentNode();
        }
        return streeNode['id'];
    }
    return -1;
}

function _getSelDbId() {
    var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    var streeNode = nodes[0];
    if (streeNode) {
        return streeNode['id'];
    }
    return -1;
}

//zz 2012-07-10 ���ݸ���������ȡ����logo��ַ  ���Ϊ�շ���""
function getLogoPathByNodeId(rootNodeId) {
    var result="";
    //eason-8-1 �޸�ԭ����ȡ��ʽ ���jason
    $.getJSON(DASHBOARD_PATH + "admin/getLogoPathByNodeId/"+rootNodeId, function(return_object){
      //alert(return_object.DbNode.id);
      result = return_object;
    });
    return result;
}


//��õ�ǰ���NodeId ��Ӧ���ݿ��id

function getSelDbId(){
	var zTree = $.fn.zTree.getZTreeObj("lefttree"),
	nodes = zTree.getSelectedNodes();


	//eason-8-7-o �޸Ľڵ��id�������ģ��Ҫ�ҵ����ǵ�һ��tab���߽ڵ����͵ĸ��ף��Ҳ�����˭���Ķ���
	if (nodes[0]['isParent']==false)//�����Ҷ�ӽڵ�
	{
	 if(nodes[0].getParentNode().type=='field')//ͬʱ������field����ô���ظ��ĸ�
	    return nodes[0].getParentNode().getParentNode().id;
	 else
	   //ͬʱ��������field����ô����node������tab����ֱ�ӷ��ظ��ڵ�
	   return nodes[0].getParentNode().id;
	}
	else//�������Ҷ�ӽڵ�
	{
	 if(nodes[0]['type']!= 'field'){//Ҳ����field�ڵ�
	    //return nodes[0]['id'];

	    //zz 2012-08-21��   �ҵ����ĵ�һ����ҳ��Ľ��
	    var tempNode=nodes[0];
	    while(tempNode.isParent){
	       var childNodes = tempNode.children;

	       if(childNodes==undefined||childNodes[0].type=="field"||(childNodes[0].type=="normal"&&!childNodes[0].isParent))
	          break;

	       //����ģ�����

	         if(tempNode['id']==getSelRootDbId()){
	            if(childNodes[1]==null||childNodes[1]==undefined)
	               return -1;
	            else
	               tempNode=childNodes[1];
	          }
	         else
	            tempNode=childNodes[0];
	    }

	    return tempNode.id;

	}
	 else //ȴ��field�ڵ�
	     return nodes[0].getParentNode().id;
	}

}


function openConfig(){
	if($("#configDiv").css("display") == "none") {
	$("#configDiv").show();
	$("#openConfigButton").html("����������-");
	} else {
	$("#configDiv").hide();
	$("#openConfigButton").html("չ��������+");
	}
}

function saveURLBox(){
	$("#isURLSpan").hide();
	var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    if(treeNode){
    	var stat = 0;
        if($("#isURLBox").attr("checked")){
           stat = 1;
           $("#isURLSpan").show();
        }
        $.post('/dashboard/admin/SaveisURL/' + treeNode['id'] +'/'+stat, {} , function(result) {
            alert('�޸ĳɹ�');
        });
    }
    return false;
}

function readURLBox(){
	var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    $.post('/dashboard/admin/readisURL/' + treeNode['id'], {} , function(result) {
      	//alert(result);
    	if(result==1){
      		$("#isURLBox").attr("checked",true);
      		$("#isURLSpan").show();
      	}else{
      		$("#isURLBox").attr("checked",false);
      		$("#isURLSpan").hide();
      	}
    });
}

function saveisURLText(){
	var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    var url = $("#isURLText").val();
	var ourl = new Object();
	ourl.val = url;
    $.post('/dashboard/admin/saveUrlVal/' + treeNode['id'], ourl , function(result) {
        alert('�޸ĳɹ�');
    });
}

function readisURLText(){
	var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    $.post('/dashboard/admin/readUrlVal/' + treeNode['id'], {} , function(result) {
    	$("#isURLText").val(result);
    });
}

function saveURLType(){
	var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    var urlt = $("#URLType").val();
	$.post('/dashboard/admin/saveURLType/' + treeNode['id'] +'/'+ urlt, {} , function(result) {
    	alert('�޸ĳɹ�');
    });
}

function readURLType(){
	var zTree = $.fn.zTree.getZTreeObj("lefttree"),
    nodes = zTree.getSelectedNodes();
    treeNode = nodes[0];
    $.post('/dashboard/admin/readUrlType/' + treeNode['id'], {} , function(result) {
    	$("#URLType").val(result);
    });
}
	
    var sel_dash_id=-100;  //�����
    var ue = new UE.ui.Editor(); //ueditor����
    $(document).ready( function() {
      init_admin_tips();  //������ʾ
      switchTab("index");	//�������admin��Ĭ���л�����ҳ��
      document.domain = "baidu.com";
        $('#logoFileInput').val("");

       	//by Jzj 11-27
        $('#logoUploadButton').click( function() {
            if($('#logoNameInput').val()==''){
           		alert("����д����");
                return ;
            }else{
                var options = {
               		dataType:'text',
                    success: function(data) {
                        //alert(data);
                        if(data!="-1") {
                       		$('#logoNameInput').attr("value",data);
                            alert("logo�޸ĳɹ�");
                        }
                    }
              	};
           		$('#uploadForm').ajaxSubmit(options);
          	}
           //eason-8-1 ���radio��Ӧ����
           /*var i ;
           var obj = document.getElementsByName("logo_radio");
           for(i = 0;i < obj.length;i++){
             if(obj[i].checked)break;
           }
           if(i == 0){//��һ����ѡ�У�ֻ��������ͼƬ
              if($('#logoFileInput').val()!=""){
              var options = {

                  dataType:'text',
                  success: function(data) {
                      if(data!="-1") {
                          //eason-7-31 data Ϊlogo·��
                          $('#dashImg').attr("src",data);
                          $('#dashImg').css('display',''); //��ʾlogo
                          alert("logo�޸ĳɹ�");
                      }
                  }
              };
              $('#uploadForm').ajaxSubmit(options);
              }else{
                alert("��ѡ��Ҫ�ϴ���logoͼƬ");
                return;
              }
            }
            if(i == 1){//�ڶ�����ѡ�У�ֻ�����������
                if($('#logoNameInput').val()==''){
                    alert("����д����");
                    return ;
                }else{
                    var options = {
                        dataType:'text',
                        success: function(data) {
                            //alert(data);
                            if(data!="-1") {

                                $('#logoNameInput').attr("value",data);
                                alert("logo�޸ĳɹ�");
                            }
                        }
                    };
                    $('#uploadForm').ajaxSubmit(options);
                 }
             }
        	*/
        });

		/*
        //eason-8-1 ���radio�������Ӧ���ܡ�
        $('#pics').click(function(){

            $('#dash_logo').css('display','');
            $('#dash_logo_name').css('display','none');
        });
        $('#words').click(function(){

            $('#dash_logo_name').css('display','');
            $('#dash_logo').css('display','none');
        });*/

        //eason-8-6-i ������ж�
        $('#comment_submit').click(function(){
        if(!ue.hasContents())
        {
          if(!confirm("ȷ�ϲ���д������"))
          {
            return;
          }
          else {
            var title_comment = $('#commentTitle').val()+"@_@";
            var title_location =$('#commentLocatin').attr('checked');
            $.post('/dashboard/admin/commentdeal/'+treeNode.id,{comment: title_comment ,location: title_location},
                 function(){
                     alert('���óɹ�');
            });
            }
          }
        else{
          var title_comment = $('#commentTitle').val()+"@_@"+ue.getContent();
          var title_location =$('#commentLocatin').attr('checked');
          $.post('/dashboard/admin/commentdeal/'+treeNode.id,{comment: title_comment ,location: title_location},
               function(){
                   alert('���óɹ�');
          });
        }

      });



      $('#isRadioBox').click(function(){
        var isradio =  $('#isRadioBox').attr("checked");


        $.post('/dashboard/admin/isRadiodeal/'+treeNode.id,{isRadio:isradio },
           function(){
               alert('���óɹ�');
        });

      });

      //$('#field_comment').css('display','none');
      //$('#isRadio').css('display','none');
    });  //ready ����

function show_helpDiv(){
  if($("#helpDiv").css("display") == "none") {
    $("#helpDiv").show();
    $("#helpShowButton").html("����-");
  } else {
    $("#helpDiv").hide();
    $("#helpShowButton").html("��ʾ+");
  }


}

