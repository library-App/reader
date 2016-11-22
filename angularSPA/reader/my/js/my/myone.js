app.controller('myoneCtrl', ['$scope', function($scope){
$scope.add6=function(){
		$("#Headportrait").css("display","block");
		$("#shade").css("display","block");
	}
$scope.add7=function(){
		$("#Headportrait").css("display","none");
		$("#shade").css("display","none");
	}
$scope.add8=function(){
		$("#Headportrait").css("display","none");
		$("#shade").css("display","none");
}
$scope.add12=function(){
		$("#Sex").css("display","block");
		$("#shade").css("display","block");
	}
$scope.add13=function(){
		$("#Sex").css("display","none");
		$("#shade").css("display","none");
	}
$scope.add14=function(){
		$("#Sex").css("display","none");
		$("#shade").css("display","none");
}
$scope.add100=function(){
		var sd=$("#personmain .list .xadfr .cir")
		var ssd=$("#personmain .list .xadfr .cir .smallcir")
		if(sd.hasClass("moveleft")){
			sd.removeClass("moveleft");
			ssd.removeClass("smoveleft");
		}else {
			sd.addClass("moveleft");
			ssd.addClass("smoveleft");
		}
	}
}])
//app.directive("wdL",[function(){
//	return{
//		restrict:"A",
//		replace:true,
//		transclude:true,
//		template:"<li><div ng-transclude style='width:100%;height:100%;'></div></li>",
//		link:function($scope,el){
//			$(el).on("click",function(){
//				$("#Headportrait").css("display","block");
//				$("#shade").css("display","block");
//			})
//			$("#Headportrait .three .left").on("click",function(){
//				$("#Headportrait").css("display","none");
//				$("#shade").css("display","none");
//			})
//			$("#Headportrait .three .right").on("click",function(){
//				$("#Headportrait").css("display","none");
//				$("#shade").css("display","none");
//			})
//		}
//	}
//}])
//app.directive("yjH",[function(){
//	return{
//		restrict:"A",
//		replace:true,
//		transclude:true,
//		template:"<li class='last'><div ng-transclude style='width:100%;height:100%;'></div></li>",
//		link:function($scope,el){
//			$(el).on("click",function(){
//				$("#Sex").css("display","block");
//				$("#shade").css("display","block");
//			})
//			$("#Sex .three .left").on("click",function(){
//				$("#Sex").css("display","none");
//				$("#shade").css("display","none");
//			})
//			$("#Sex .three .right").on("click",function(){
//				$("#Sex").css("display","none");
//				$("#shade").css("display","none");
//			})
//		}
//	}
//}])