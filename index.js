var myApp = angular.module("myApp",[]);

myApp.controller('add-cntr',function($scope){
	$scope.name = "Ferhad";
	$scope.test = ["default","test"];
	$scope.errorText = "";
	$scope.saved = localStorage.getItem("TodoItems");
	if($scope.saved !== null){
		if($scope.saved !== "undefined"){
			$scope.listItems = JSON.parse($scope.saved);
		}else{
			$scope.listItems = [{'title':"we are learning", 'done': false}];
		}
	}else{
		$scope.listItems = [{'title':"we are learning", 'done': false}];;
	}
	$scope.addNewItem = function(){
		if(!$scope.newItem){ return;}
		if (!$scope.CheckItem()){
			$scope.errorText = "";
			$scope.listItems.push({
				title:$scope.newItem,
				done:false
			});
			$scope.newItem = "";
			localStorage.setItem('TodoItems',JSON.stringify($scope.listItems));
		}else{

			$scope.errorText = "This item is already in your list";
		}
	}
	$scope.deleteItem =function(item){
		
		if (item != "null") {
			$scope.listItems.splice(item,1);
			console.log(item);
			localStorage.setItem('TodoItems',JSON.stringify($scope.listItems));
		}else{
			alert(item);
		}
	}

	$scope.deleteItemByCheck = function(){
		var oldItems = $scope.listItems;
		$scope.listItems = [];
		angular.forEach(oldItems, function(x){
			if(!x.done){
				$scope.listItems.push(x);
			}
		});

		localStorage.setItem('TodoItems',JSON.stringify($scope.listItems));
	}

	$scope.CheckItem = function(){
		
		angular.forEach($scope.listItems,function(x){
			if(x.title == $scope.newitem){ 
				return true;
			}
		});

		return false;
	}

});
