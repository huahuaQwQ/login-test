import Vue from 'vue'
import ViewUI from 'view-design'
import locale from 'view-design/dist/locale/zh-CN' // Change locale, check node_modules/view-design/dist/locale
console.log(ViewUI);
console.log(locale);
import '@/assets/less/iview.less';

Vue.use(ViewUI, {
    locale
})