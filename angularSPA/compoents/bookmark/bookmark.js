
app.directive('bookmark',[function(){
	return{
		restrict:'E',
		replace:true,
		scope:{
			word:'='
		},
		templateUrl:'compoents/bookmark/bookmark.html'
	}
}]);