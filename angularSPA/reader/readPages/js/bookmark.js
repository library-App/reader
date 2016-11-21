var app=angular.module('readPage',[]);
app.controller('markCtrl',["$scope",function($scope){
	$scope.add=function(index){
		var list=$(".list")
		for(var i=0;i<list.length;i++){
			list.on("click",function(){
				list.removeClass("selected")
				$(this).addClass("selected")
				var index=$(this).index()
				console.log(index)
				$(".d-con").removeClass("show")
				$(".d-con").eq(index).addClass(("show"))
			})
		}
	}
}])
