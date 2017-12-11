const routers = [
  {
    path:'/login',
    meta: {
        title: '登陆'
    },
    component: (resolve) => require(['./views/login/login.vue'], resolve)
  },
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
      // {
      //   path: 'deviceLog/:id/:name',
      //   name:'deviceLog',
      //   meta: {
      //       title: '设备报警记录'
      //   },
      //   component: (resolve) => require(['./views/map/DeviceLog.vue'], resolve)
      // },
        ]}

];
export default routers;
