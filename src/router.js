const routers = [
  {
    path: '/',
    meta: {
        title: 'DServer人工智能服务器平台'
    },
    redirect: '/search',
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[

      {
        path: 'vue',
        name:'vue',
        meta: {
            title: 'GPU服务器配置vue'
        },
        component: (resolve) => require(['./views/main/main.vue'], resolve)
      }, {
        path: 'jq',
        name:'jq',
        meta: {
            title: 'GPU服务器配置'
        },
        component: (resolve) => require(['./views/main/main2.vue'], resolve)
      }, {
        path: 'search',
        name:'search',
        meta: {
            title: 'GPU服务器配置查询'
        },
        component: (resolve) => require(['./views/main/search.vue'], resolve)
      }
        ]}

];
export default routers;
