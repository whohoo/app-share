(function() {
    'use strict';

    var appShareJson = [
        {
            "key": "wechat",
            "name": "微信",
            "title": "Wechat"
        },
        {
            "key": "douban",
            "name": "豆瓣",
            "title": "Douban"
        },
        {
            "key": "douyu",
            "name": "斗鱼",
            "title": "Douyu"
        },
        {
            "key": "eleme",
            "name": "饿了么",
            "title": "Eleme"
        },
        {
            "key": "kuwo",
            "name": "酷我音乐盒",
            "title": "Kuwo"
        },
        {
            "key": "momo",
            "name": "陌陌",
            "title": "Momo"
        },
        {
            "key": "tencent-mobile-web",
            "name": "腾讯移动WEB",
            "title": "tencent mobile web"
        },
        {
            "key": "qqmusic",
            "name": "QQ音乐",
            "title": "QQ Music"
        },
        {
            "key": "qzone",
            "name": "QQ空间",
            "title": "Qzone"
        },
        {
            "key": "qqbrowser",
            "name": "QQ手机浏览器",
            "title": "QQbrowser"
        },
        {
            "key": "uc",
            "name": "UC浏览器",
            "title": "UC"
        },
        {
            "key": "baidu",
            "name": "百度手机浏览器",
            "title": "Baidu"
        },
        {
            "key": "ideat",
            "name": "IDEAT理想家",
            "title": "Ideat"
        },
        {
            "key": "yidian",
            "name": "一点资讯",
            "title": "Yidian"
        }
    ];

    var apiJson = {
        "testdrive": {
            "name": "别克&雪佛兰 - 预约试驾",
            "title": "别克&雪佛兰-试驾接口"
        },
        "mz-ga-tracking": {
            "name": "别克&雪佛兰 - 监测方法",
            "title": "别克&雪佛兰 - 监测方法"
        },
        "youku-video": {
            "name": "别克&雪佛兰 - Youku视频",
            "title": "别克&雪佛兰-Youku视频"
        }
    }; 

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($windowProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('index', {
        abstract: true,
        url: "/",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.share', {
        url: "",
        templateUrl: "app/share/share.html",
        data: { pageTitle: 'APP 分享代码' }
      })
      .state('share', {
        abstract: true,
        url: "/share",
        templateUrl: "app/components/common/content.html"
      })
      .state('share.index', {
        url: "",
        templateUrl: "app/share/share.html",
        data: { pageTitle: 'APP 分享代码' }
      })
      .state('share.global', {
        url: "/global",
        templateUrl: "app/share/global.html",
        data: { pageTitle: '全局变量' }
      })
      .state('api', {
        abstract: true,
        url: "/api",
        templateUrl: "app/components/common/content.html"
      })
      .state('api.index', {
        url: "",
        templateUrl: "app/api/api.html",
        data: { pageTitle: '全局变量' }
      });
      //app share
      angular.forEach(appShareJson, function(value) {
        var state = {
            url: "/" + value.key,
            templateUrl: "app/share/" + value.key + ".html",
            data: { pageTitle: '在' + value.name + '中配置分享',title:value.title }
          };
        $stateProvider.state('share.' + value.key, state);
      });
      //api
      for(var key in apiJson){
        var value = apiJson[key];
        var state = {
            url: "/" + key,
            templateUrl: "app/api/" + key + ".html",
            data: { pageTitle: '' + value.name + '', title:value.title }
          };
        $stateProvider.state('api.' + key, state);
      }
      
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    var $window = $windowProvider.$get();
    $window.$stateProviderRef = $stateProvider;
    $window.$urlRouterProviderRef = $urlRouterProvider;
    $window.$appShareJsonRef = appShareJson;
    $window.$apiJsonRef = apiJson;
  }

})();
