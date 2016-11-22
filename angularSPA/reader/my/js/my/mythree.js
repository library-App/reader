app.controller('mythreeCtrl', ['$scope', function($scope){
$scope.add10=function(){
		$("#personxxk .xxkz .right").removeClass("bg");
		$("#personxxk .xxkz .left").addClass("bg");
		$("#personmainl").css("display","block");
		$("#personmainr").css("display","none");
	}
$scope.add11=function(){
		$("#personxxk .xxkz .left").removeClass("bg");
		$("#personxxk .xxkz .right").addClass("bg");
		$("#personmainl").css("display","none");
		$("#personmainr").css("display","block");
}
}])
//app.directive("wdL",[function(){
//	return{
//		restrict:"A",
//		replace:true,
//		transclude:true,
//		template:"<ul class='xxkz'><div ng-transclude style='width:100%;height:100%;'></div></div>",
//		link:function($scope,el){
//
//			$(el).on("click",".left",function(){
//				$("#personxxk .xxkz .right").removeClass("bg");
//				$("#personxxk .xxkz .left").addClass("bg");
//				$("#personmainl").css("display","block");
//				$("#personmainr").css("display","none");
//			})
//			$(el).on("click",".right",function(){
//				$("#personxxk .xxkz .left").removeClass("bg");
//				$("#personxxk .xxkz .right").addClass("bg");
//				$("#personmainl").css("display","none");
//				$("#personmainr").css("display","block");
//			})
//		}
//	}
//}])