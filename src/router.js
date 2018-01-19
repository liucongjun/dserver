const routers = [
  {
    path: '/',
    meta: {
        title: 'dServer人工智能服务器平台'
    },
      redirect: '/introduce',
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[

      {
          path: 'introduce',
          name: 'introduce',
          meta: {
              title: ''
          },
          component: (resolve) => require(['./views/main/introduce.vue'], resolve)
      },
        {
            path: 'vue',
            name: 'vue',
            meta: {
                title: ''
            },
            component: (resolve) => require(['./views/main/main.vue'], resolve)
        },
        {
        path: 'dServer',
        name:'dServer',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/main/main2.vue'], resolve)
      }
        ]}

];
export default routers;
