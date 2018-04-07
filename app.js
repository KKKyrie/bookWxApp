//app.js
App({

    onLaunch: function() {

        let that = this;

        // 展示本地存储能力 begin
        let logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        // 展示本地存储能力 end



        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                console.log(res);
            }
        });


        // 获取用户信息
        wx.getSetting({
            success: res => {
                console.log(res);
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo;

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        }
                    })
                }
            }
        });


        that.checkLoginStatus();


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
                    // 直接获取用户信息
                    wx.getUserInfo({
                        success: function(res) {
                            that.globalData.userInfo = res.userInfo;
                        },
                        fail: function(error) {
                            wx.showToast({
                                title: '获取信息失败',
                                icon: 'none',
                                duration: 1500
                            });
                            console.log(error);
                        }
                    });
                },

                // session_key 过期
                fail: function() {
                    // session_key过期
                    that.doLogin();
                }
            });


        } else {
            // 无登录态
            that.doLogin();
        }
    },


    // 登录动作
    doLogin: function(callback = () => {}) {
        let that = this;
        wx.login({
            success: function(loginRes) {
                if (loginRes.code) {

                    /* 
                     * 获取用户信息 期望数据如下 
                     *
                     * userInfo       [object]
                     * rawData        [string]
                     * signature      [string]
                     * encryptedData  [string]
                     * iv             [string]
                     *
                     */
                    wx.getUserInfo({
                        withCredentials: true, // 非必填, 默认为true

                        success: function(infoRes) {
                            // 请求服务端的登录接口
                            wx.request({
                                url: '',
                                data: {
                                    code: loginRes.code,
                                    rawData: infoRes.rawData,
                                    signature: infoRes.signature,
                                    encryptedData: infoRes.encryptedData,
                                    iv: infoRes.iv
                                },

                                success: function(res) {
                                    console.log('login success');
                                    // 在 res 中拿到用户的信息 存到 globalData 中
                                    // 将 loginFlag 存入 storage 中
                                    that.globalData.userInfo = res.userInfo;
                                    wx.setStorageSync('loginFlag', res.skey)
                                    callback();
                                },

                                fail: function(error) {
                                    // 调用服务端登录接口失败
                                    wx.showToast({
                                        title: '调用接口失败',
                                        icon: 'none',
                                        duration: 1500
                                    });
                                    console.log(error);
                                }
                            });
                        },

                        fail: function(error) {
                            // 获取 userInfo 失败
                            wx.showToast({
                                title: '获取信息失败',
                                icon: 'none',
                                duration: 1500
                            });
                            console.log('获取用户信息失败，错误信息如下');
                            console.log(error);
                        }
                    });

                } else {
                    // 获取 code 失败
                    wx.showToast({
                        title: '登录失败',
                        icon: 'none',
                        duration: 1500
                    });
                    console.log('调用wx.login获取code失败');
                }
            },

            fail: function(error) {
                // 调用 wx.login 接口失败
                wx.showToast({
                    title: '接口调用失败',
                    icon: 'none',
                    duration: 1500
                });
                consoel.log(error);
            }
        });
    },


    globalData: {
        userInfo: null,
        bookList: []
    }
});