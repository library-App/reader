app.directive('lunbo',[function(){
	return {
		restrict:'E',
		replace:true,
		templateUrl:'compoents/lunbo/lunbo.html',
		scope:{
			pics:'=',
			time:'=',
		},
		link:function($scope,el){
			var lunbo=$(el).find('.lunbo');
			var t=0;
			setInterval(function(){
				$(el).find('.list').hide()
				$(el).find('.list').eq(t).show()
				t+=1
				if(t>=3){
					t=0
				}
			},$scope.time)
			
		}
	}
}])