import Router from 'vue-router'
// ./routes  是一个目录，当import 导入的时候，会自动导入 目录下的index.js
import routes from './router'

export default new Router({
    mode: 'hash',
    base: '/',
    routes: routes
})
