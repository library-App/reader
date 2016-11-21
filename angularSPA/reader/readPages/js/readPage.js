var app=angular.module('readPage',[]);
app.controller('readCtrl',['$scope',function($scope){
	$scope.colors=[
		{
			more:'',
			name:'纯色羊皮'
		},
		{
			more:'',
			name:'经典一'
		},
		{
			more:'',
			name:'经典二'
		},
		{
			more:'',
			name:'蓝色图腾'
		},
		{
			more:'',
			name:'美丽星空'
		},
		{
			more:'',
			name:'少女情怀'
		},
		{
			more:'',
			name:'养眼绿色'
		},
		{
			more:'+',
			name:'自定义'
		}
	]
	$scope.textAdd=function(){
		var book_title=$(".book-title")
		var book_title_t=$(".book-title-t")
		var corFooter=$(".cor-footer")
		var night=$(".night")
		var bookmark=$(".bookmark")
		if(book_title_t.hasClass("show")){
			book_title_t.removeClass("show")
			corFooter.removeClass("show")
			night.removeClass("show")
			bookmark.removeClass("show")
			book_title.addClass("show")
			$(".foot1").removeClass("show")
			$(".foot2").removeClass("show")
			$(".foot3").removeClass("show")
		}else{
			$(".foot1").addClass("show")
			book_title_t.addClass("show")
			corFooter.addClass("show")
			night.addClass("show")
			bookmark.addClass("show")
			book_title.removeClass("show")
		}
	}
	$scope.setAdd=function(){
		var foot1=$(".foot1")
		var foot2=$(".foot2")
		foot1.removeClass("show")
		foot2.addClass("show")
	}
	$scope.nessAdd=function(){
		var foot1=$(".foot1")
		var foot3=$(".foot3")
		foot1.removeClass("show")
		foot3.addClass("show")
	}
	$scope.colAdd=function(index){
		$(".color").removeClass("border")
		$(".color").eq(index).addClass("border")
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}])