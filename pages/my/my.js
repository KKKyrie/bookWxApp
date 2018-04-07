//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        hasLogin: false
    },


    // 检查本地 storage 中是否有登录态标识
    checkLoginStatus: function() {
        let that = this;
        let loginFlag = wx.getStorageSync('loginFlag');
        if (loginFlag) {
            // 检查 session_key 是否过期
            wx.checkSession({

                // session_key 有效(为过期)
                success: function() {
                    // 获取用户头像/昵称等信息
                    that.getUserInfo();
                },

                // session_key 过期
                fail: function() {
                    that.setData({
                        hasLogin: false
                    });
                }
            });


        } else {
            that.setData({
                hasLogin: false
            });
        }
    },


    doLogin: function() {
        let that = this;
        app.doLogin(that.getUserInfo);
    },


    goMyBooks: function() {
        wx.navigateTo({
            url: '../myBooks/myBooks'
        });
    },

    getUserInfo: function() {
        // 从 globalData 中获取 userInfo
        let that = this;

        let userInfo = app.globalData.userInfo;

        if (userInfo) {
            that.setData({
                userInfo: userInfo
            });
        } else {
            console.log('globalData中userInfo为空');
        }
    },

    onLoad: function() {

    }
})