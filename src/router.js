const routers = [
  {
    path: '/',
    meta: {
        title: 'dServer人工智能服务器平台'
    },
    redirect: '/dServer',
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[

      {
        path: 'vue',
        name:'vue',
        meta: {
            title: 'vue'
        },
        component: (resolve) => require(['./views/main/main.vue'], resolve)
      }, {
        path: 'dServer',
        name:'dServer',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/main/main2.vue'], resolve)
      }, {
        path: 'search',
        name:'search',
        meta: {
            title: '查询'
        },
        component: (resolve) => require(['./views/main/search.vue'], resolve)
      }
        ]}

];
export default routers;
