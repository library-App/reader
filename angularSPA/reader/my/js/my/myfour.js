app.controller('myfourCtrl', ['$scope', function($scope){
$scope.add2=function(){
		$("#Headportrait").css("display","block");
		$("#shade").css("display","block");
	}
$scope.add3=function(){
		$("#Headportrait").css("display","none");
		$("#shade").css("display","none");
	}
$scope.add4=function(){
		$("#Sex").css("display","block");
		$("#shade").css("display","block");
	}
$scope.add5=function(){
		$("#Sex").css("display","none");
		$("#shade").css("display","none");
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
//			$("#Headportrait .Notrue").on("click",function(){
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
//			$("#Sex .Notrue").on("click",function(){
//				$("#Sex").css("display","none");
//				$("#shade").css("display","none");
//			})
//		}
//	}
//}])