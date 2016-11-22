app.directive('pro',[function(){
	return{
		restrict:"A",
		replace:true,
		transclude:true,
		template:"<li class='pro'><span class='An'>暗</span><span class='liang'>亮</span><div class='pick'><div class='rel'></div><div class='circle-lg'></div></div><div class='squ'>系统</div></li>",
		link:function($scope,el){
			var pro=$(".pro")
			var circle=$(".pro .circle-lg")
			var pick=$(".pro .pick")
			var rel=$(".pro .pick .rel")
			pro.on('pick',function(e){
				var left=e.clientX
				circle.css('left',left);
			})
			//拖拽
			circle.on('mousedown',function(e){
				var r=circle.height()/2;
				var start=r-e.offsetX;
				$(document).on('mousemove',function(e){
					var m=e.clientX;
					var left=m-pick.position().left+start;
					var v=left/pick.width();
					if(v>1||v<0){
						return;
					}
				})
				return false;
			})
		
			$(document).on('mouseup',function(){
				$(document).off('mousemove');
			})
		}	
	}
}])
app.controller('readCtrl',['$scope',function($scope){
	$scope.colors=[
		{
			more:'',
			name:'纯色羊皮',
			color:'colone'
		},
		{
			more:'',
			name:'经典一',
			color:'coltwo'
		},
		{
			more:'',
			name:'经典二',
			color:'colthree'
		},
		{
			more:'',
			name:'蓝色图腾',
			color:'colfour'
		},
		{
			more:'',
			name:'美丽星空',
			color:'colfive'
		},
		{
			more:'',
			name:'少女情怀',
			color:'colsix'
		},
		{
			more:'',
			name:'养眼绿色',
			color:'colseven'
		},
		{
			more:'+',
			name:'自定义',
			color:''
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
		var col=$scope.colors[index].color
		$("#box").attr("class","")
		$(".corner").attr("class","corner")
		$("#box").addClass(col)
		$(".corner").addClass(col)
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}])