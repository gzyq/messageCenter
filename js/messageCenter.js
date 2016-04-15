$(function(){
	/*上部导航*/
	$(".messControl>ul>li>a").click(function(){	
		$(this).addClass("messControl_active").parent().siblings().children().removeClass("messControl_active");
		/*return false;*/
	});
	
	/*向右*/
	$(".span_right").click(function(){
		var  checkedLength= $(".groupCont .user_content>ul>li>span>input[type='checkbox']:checked").length;
		if(checkedLength==0){
			alert("请选择用户！");
		}else{
			$(".groupCont>.user_content>ul>li").find("input[type=checkbox]:checkbox:checked").each(function(){
				var liIndex=$(this).parent().parent().index();
				/*var word = $(this).parent().next().text(); //取用户id值
				alert(word);*/
				$(".groupCont>.user_content>ul>li").eq(liIndex).appendTo(".userSelected>.user_content>ul");
				$(this).removeAttr("checked"); 
			});

	      	$(".userSelected .user_content>ul>li>span>input[type=checkbox]").each(function() {
	            var val = $(this).val();
	            if($(".userSelected .user_content>ul>li>span>input[value='" + val + "']").length > 1){
	            	$(".userSelected .user_content>ul>li>span>input[value='" + val + "']:gt(0)").parent().parent().remove();
	            }
	        });
		}
	});
	
	/*向左*/
	$(".span_left").click(function(){
		var  checkedLength= $(".userSelected .user_content>ul>li>span>input[type='checkbox']:checked").length;
		if(checkedLength==0){
			alert("请选择用户！");
		}else{
			$(".userSelected>.user_content>ul>li").find("input[type=checkbox]:checkbox:checked").each(function(){
				var liIndex=$(this).parent().parent().index();
				$(".userSelected>.user_content>ul>li").eq(liIndex).appendTo(".groupCont>.user_content>ul");
				$(this).removeAttr("checked"); 
			});
		}
	});
	/*发送消息-左侧-全选*/
	$(".grouping>.groupCont>.user_head>.span_check>input[type='checkbox']").click(function(){
		if ($(this).attr("checked")) { // 全选 
            $(".grouping>.groupCont>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", true);
            });
        }
        else { // 取消全选 
            $(".grouping>.groupCont>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", false);
            });
        }	
	});
	/*发送消息-右侧-全选*/
	$(".userSelected>.user_head>.span_check>input[type='checkbox']").click(function(){
		if ($(this).attr("checked")) { // 全选 
            $(".userSelected>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", true);
            });
        }
        else { // 取消全选 
            $(".userSelected>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", false);
            });
        }	
	});
	
	/*已发消息-全选*/
	$(".hasSend_head>.span_head_check>input[type='checkbox']").click(function(){
		if ($(this).attr("checked")) { // 全选 
            $(".hasSend_cont input[type='checkbox']").each(function(){
                $(this).attr("checked", true);
            });
        }
        else { // 取消全选 
            $(".hasSend_cont input[type='checkbox']").each(function(){
                $(this).attr("checked", false);
            });
        }	
	});
	
	/*分组管理-全选*/
	$(".groupMana_right>.groupCont>.user_head>.span_check>input[type='checkbox']").click(function(){
		if ($(this).attr("checked")) { // 全选 
            $(".groupMana_right>.groupCont>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", true);
            });
        }
        else { // 取消全选 
            $(".groupMana_right>.groupCont>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", false);
            });
        }	
	});
	
	/*分组管理-添加用户-全选*/
	$(".div_add>.groupCont>.user_head>.span_check>input[type='checkbox']").click(function(){
		if ($(this).attr("checked")) { // 全选 
            $(".div_add>.groupCont>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", true);
            });
        }
        else { // 取消全选 
            $(".div_add>.groupCont>.user_content input[type='checkbox']").each(function(){
                $(this).attr("checked", false);
            });
        }	
	});
	/*分组管理-编辑*/
	$(".ul_groupList_edit .input_checkAll").click(function(){	
		if ($(this).attr("checked")) { // 全选 
            $(".ul_groupList_edit input[type='checkbox']").each(function(){
                $(this).attr("checked", true);
            });
        }
        else { // 取消全选 
            $(".ul_groupList_edit input[type='checkbox']").each(function(){
                $(this).attr("checked", false);
            });
        }
	});
	/*发送消息——分组列表*/
	$(".ul_groupList>li").click(function(){
		var index = $(this).index();
		$(this).addClass("groupActive").siblings().removeClass("groupActive");
	});
	
	/*状态*/
	/*发送消息-状态*/
	$(".grouping .span_head_status").hover(function(){
		$(".grouping .div_status").show();
	},function(){
		$(".grouping .div_status").hide();
	});
	//已发消息-状态
	$(".hasSend_wrap .span_head_status").hover(function(){
		$(".hasSend_wrap .div_status").show();
	},function(){
		$(".hasSend_wrap .div_status").hide();
	});
	/*分组管理-状态*/
	$(".groupMana_right>.groupCont>.user_head>span.span_head_status").hover(function(){
		$(".groupMana_right>.groupCont>.user_head>span.span_head_status>.div_status").show();
	},function(){
		$(".groupMana_right>.groupCont>.user_head>span.span_head_status>.div_status").hide();
	});
	/*分组管理-添加用户-状态*/
	$(".div_add .span_head_status").hover(function(){
		$(".div_add .div_status").show();
	},function(){
		$(".div_add .div_status").hide();
	});

	/*已发消息---定时-删除*/
	$(".btn_del").click(function(){
		var deleteLength = $(".hasSend_cont ul>li>span>input[type='checkbox']:checked").length;
		if(deleteLength == 0){
			alert("请选择需要删除的消息");
		}
		var timing = $(".hasSend_cont ul>li>span>input[type='checkbox']:checked").parent().parent().text();
		if(timing.indexOf("定时")>=0){
		   $(".div_remove").show();
		}
	});
	
	/*已发消息--删除-关闭*/
	$(".div_remove .span_close,.div_remove .btn_cancel").click(function(){
		$(".div_remove").hide();
	});
	
	/*详细信息--收件人查看与关闭*/
	$(".a_viewRecipient").click(function(){
		$(".messRecipient").show();
		return false;
	});
	$(".span_close").click(function(){
		$(".messRecipient").hide();
	});
	
	/*分组管理 --+新建分组 按钮*/
	$(".btn_new").click(function(){
		$(".div_newgroup input.newgroupName").val("");
		$(".div_newgroup").show();
		$(".newgroupName").focus();
	});
	$(".input_btn_cancel").click(function(){
		$(".div_newgroup").hide();
	});
	$(".input_btn_ok").click(function(){
		var  newgroupName = $(".div_newgroup input.newgroupName").val();
		if(newgroupName){
			$(".div_newgroup").hide();
			$(".ul_groupList").append('<li><a class="control_group">'+ newgroupName +'</a></li>');	
		}else{
			alert("请出入分组名称!");
		}	
	});
	
	/*分组管理 --编辑  按钮*/
	$(".btn_edit").click(function(){
		if($(this).text() == "编辑"){
			$(".btn_new").hide();
			if(!$(".div_newgroup").is(":hidden")){
				$(".div_newgroup").hide();
			}
			$(this).css("width","80px").text("退出编辑");
			$(".ul_groupList").hide();
			$(".ul_groupList_edit").show();
			
		}else{
			$(".btn_new").show();
			$(this).css("width","50px").text("编辑");
			$(".ul_groupList").show();
			$(".ul_groupList_edit").hide();
			if(!$(".div_deleteGroup").is(":hidden")){
				$(".div_deleteGroup").hide();
			}
		}	
	});
	$(".ul_groupList_edit>li").hover(function(){
		$(this).find("span").show();
	},function(){
		$(this).find("span").hide();
	});
	
	/*修改*/
	$(".span_modify").click(function(){
		$(this).parent().find("input[type=text]").removeAttr("readonly").css("border","solid 1px #BDBDBD");
		$(this).parent().find("input[type=text]").blur(function(){
			$(this).attr("readonly","readonly");
			$(this).css("border","solid 1px #FFFFFF");
		});
		
		$(this).parent().find("input[type=text]").keydown(function(e){
			if(e.keyCode==13){
			   $(this).attr("readonly","readonly");
			   $(this).css("border","solid 1px #FFFFFF");
			   $(".span_modify").hide();
			}
		});
	});
	
	/*分组管理 --添加用户 按钮*/
	$(".btn_add").click(function(){
		if(!$(".div_out").is(":hidden")){
			$(".div_out").hide();
		}
		$(".div_add").show();
	});
	$(".span_close,.btn_cancel").click(function(){
		$(".div_add").hide();
	});
	
	/*分组管理 --移出 按钮*/
	$(".btn_out").click(function(){
		if(!$(".div_add").is(":hidden")){
			$(".div_add").hide();
		}
		var outLength = $(".groupMana_right .user_content>ul>li>span>input[type='checkbox']:checked").length;
		if(outLength == 0){
			alert("请选择移出用户");
			return false;
		}else{
			$(".div_out").show();
		}	
	});
	$(".span_close,.btn_cancel").click(function(){
		$(".div_out").hide();
	});
	
	/*分组管理-左侧-删除*/
	$(".btn_delGroup").click(function(){
		var groupLength = $("ul.ul_groupList_edit>li>input[type='checkbox']:checked").length;
		if(groupLength == 0){
			alert("请选择需要删除的分组");
			return false;
		}else{
			$(".div_deleteGroup").show();
		}	
	});
	$(".span_close,.btn_cancel").click(function(){
		$(".div_deleteGroup").hide();
	});
});
