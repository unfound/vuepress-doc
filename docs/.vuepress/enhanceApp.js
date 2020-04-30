export default ({
    Vue,  // VuePress正在使用的Vue构造函数
    options,  // 附加到根实例的一些选项
    router,  // 当前应用的路由实例
    siteData,  // 站点元数据
    isServer  // 当前应用配置是处于服务端渲染或客户端
}) => {
    // ...做一些其他的应用级别的优化
    console.log(Vue)
    console.log(options)
    console.log(router)
    console.log(siteData)
    console.log(isServer)
}
