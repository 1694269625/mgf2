filter('mgf',function(){
	return function(e){
		if(e==1){
			return "***"
		}else{
			return e
		}
	}
}).geteven:function(e){
	var  arr=[];
	for(var i=1;i<e.length;i=i+2){
		arr.push(e[i])
	}
	return arr
}