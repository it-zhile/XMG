/**
 * Created by marno on 2017/4/6
 * Function:所有图片入口
 * Desc:将图片统一管理，避免因改变路径后导致图片引用维护困难
 */
const ImgUrls = {
    /**
     * tabbar - 底部导航栏 
     */
    tabbar_home:require('./images/tabbar/icon_tabbar_homepage.png'),
    tabbar_home_active:require('./images/tabbar/icon_tabbar_homepage_selected.png'),
    tabbar_shop:require('./images/tabbar/icon_tabbar_merchant_normal.png'),
    tabbar_shop_active:require('./images/tabbar/icon_tabbar_merchant_selected.png'),
    tabbar_mine:require('./images/tabbar/icon_tabbar_mine.png'),
    tabbar_mine_active:require('./images/tabbar/icon_tabbar_mine_selected.png'),
    tabbar_more:require('./images/tabbar/icon_tabbar_misc.png'),
    tabbar_more_active:require('./images/tabbar/icon_tabbar_misc_selected.png'),

    /**
     * home - 首页
     */
    home_navtop_infromation:require('./images/home/icon_homepage_message.png'),
    home_navtop_scanner:require('./images/home/icon_homepage_scan.png'),
    home_navtop_search:require('./images/home/icon_shop_search.png'),

};

export default ImgUrls;