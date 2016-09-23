<template>
	<header class="header">
		<div class="hd posr">
			<h1>
				<a href="/" alt="">
					<img src="../../assets/images/common/logo.png" alt="钱包">
				</a>
			</h1>
		</div>
		<nav>
			<section class="piclist">
				<h2>{{title}}</h2>
				<ul class="cf">
					<li v-for="todo in todos">
				      <h3>
				      	<a href="list_{{ todo.classid }}_{{ todo.id }}" title="{{ todo.title }}">
				      		{{ todo.title }}<br />
				      		<img src="{{todo.titlepic}}" alt="{{todo.title}}">
				      	</a>
				      </h3>
				    </li>
				</ul>
			</section>
		</nav>
	</header>
</template>
<style>
.header .hd{background:#ae0101;}
.header .hd{text-align: center;}
</style>
<script>
import url from '../../js/common/ajaxurl';

export default{
	ready() {
		console.log('home-header,测试所有home业务模块下的js都会被编译');
	},
	data(){
		var list;
		let _getJson = require('../../js/common/tools').getJson;
		_getJson(url + "/e/api/getNewsList.php",function(json){
			list = json.result;
		});
        return{
            todos: list
        }
	}
}
</script>