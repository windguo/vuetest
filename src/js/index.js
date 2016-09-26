// 配置了别名,可简写可不简写, 对于懒人的我喜欢ide的补全,所以不简写
import myHead from '../components/common/my-header.vue';
let $ = require('./lib/jquery');
var V = new Vue({
	el: 'body',
	methods: {
		sayHi() {
			require.ensure([], function () {
				var say = require('./common/tools').say;
				say('hi');
			});
		},
		tap() {
			console.log('hahah');
		},
	},
	components: {
		myHead
	}
});