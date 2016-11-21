
app.controller('markCtrl',["$scope",function($scope){
	$scope.add=function(){
		var list=$(".option .list")
		for(var i=0;i<list.length;i++){
			list.on("click",function(){
				list.removeClass("selected")
				$(this).addClass("selected")
				var index=$(this).index()
				$(".d-con").removeClass("show")
				$(".d-con").eq(index).addClass(("show"))
			})
		}
	}
}])
