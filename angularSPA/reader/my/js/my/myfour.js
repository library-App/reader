var app = angular.module('reminder',[]);
app.controller('ctrl', ['$scope', function($scope){}])
app.directive("wdL",[function(){
	return{
		restrict:"A",
		replace:true,
		transclude:true,
		template:"<li><div ng-transclude style='width:100%;height:100%;'></div></li>",
		link:function($scope,el){
			$(el).on("click",function(){
				$("#Headportrait").css("display","block");
				$("#shade").css("display","block");
			})
			$("#Headportrait .Notrue").on("click",function(){
				$("#Headportrait").css("display","none");
				$("#shade").css("display","none");
			})
		}
	}
}])
app.directive("yjH",[function(){
	return{
		restrict:"A",
		replace:true,
		transclude:true,
		template:"<li class='last'><div ng-transclude style='width:100%;height:100%;'></div></li>",
		link:function($scope,el){
			$(el).on("click",function(){
				$("#Sex").css("display","block");
				$("#shade").css("display","block");
			})
			$("#Sex .Notrue").on("click",function(){
				$("#Sex").css("display","none");
				$("#shade").css("display","none");
			})
		}
	}
}])