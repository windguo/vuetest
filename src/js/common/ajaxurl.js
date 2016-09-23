const server1 = 'http://www.jianjie8.com';
const server2 = 'http://www.jianjie8.com';

let useServer = null;
if(NODE_ENV === 'production') {
	useServer = server1;
} else if(NODE_ENV === 'dev') {
	useServer = server2;
}
export default useServer;
