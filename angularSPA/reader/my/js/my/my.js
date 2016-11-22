app.controller('myCtrl', ['$scope', function($scope){
$scope.add=function(){
		$("#Sex").css("display","block");
		$("#shade").css("display","block");
	}
$scope.add1=function(){
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
//				$("#Sex").css("display","block");
//				$("#shade").css("display","block");
//			})
//			$("#shade").on("click",function(){
//				$("#Sex").css("display","none");
//				$("#shade").css("display","none");
//			})
//		}
//	}
//}])