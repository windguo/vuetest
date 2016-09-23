// 封装ajax方法
export function getJson(url,fn){
	$.ajax({
		url:url,
		type:'get',
		async: false,
		dataType:'json',
		success: fn
	});
}
export function say(msg) {
	console.log(msg);
}