const routers = [
  {
    path: '/',
    meta: {
        title: 'DServer人工智能服务器平台'
    },
    redirect: '/map',
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[

      {
        path: 'map',
        name:'map',
        meta: {
            title: 'GPU服务器配置'
        },
        component: (resolve) => require(['./views/main/main.vue'], resolve)
      }
        ]}

];
export default routers;
