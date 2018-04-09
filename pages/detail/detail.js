// pages/detail/detail.js

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        commentList: [],
        bookInfo: {},
        bookIsBuy: -1,
        commentLoading: true,
        loginFlag: app.getLoginFlag()
    },


    goComment: function(ev) {

        let info = ev.currentTarget.dataset;
        let navigateUrl = '../comment/comment?';

        for (let key in info) {
            info[key] = encodeURIComponent(info[key]);
            navigateUrl += key + '=' + info[key] + '&';
        }

        navigateUrl = navigateUrl.substring(0, navigateUrl.length - 1);

        wx.navigateTo({
            url: navigateUrl
        });
    },

    readBook: function() {
        let fileUrl = this.data.bookInfo.file;
        wx.downloadFile({
            url: fileUrl,
            success: function(res) {
                var filePath = res.tempFilePath
                wx.openDocument({
                    filePath: filePath,
                    success: function(res) {
                        console.log('打开文档成功')
                    }
                });
            },
            fail: function(error) {
                console.log(error);
            }
        });
    },

    confirmExchangeBook: function() {
        let that = this;
        wx.showModal({
            title: '提示',
            content: '确定用1高磊币兑换此书吗？',
            showCancel: true,
            cancelText: '打扰了',
            cancelColor: '#8a8a8a',
            confirmText: '确定',
            confirmColor: '#1AAD19',
            success: function(res) {
                if (res.confirm) {
                    // 兑换
                    wx.showToast({
                        title: '兑换成功',
                        icon: 'success',
                        duration: 1500
                    });

                } else if (res.cancel) {
                    // 取消
                }
            }
        });
    },

    exchangeBook: function() {},

    // 获取书籍评论列表及是否购买
    getPageData: function() {

        let that = this;
        let requestData = {
            bookid: that.data.bookInfo.id,
            skey: that.data.loginFlag
        };

        wx.request({
            url: 'https://jeremygao.net/api/book/queryBook',
            method: 'GET',
            data: requestData,
            success: function(res) {
                if (res.data.result === 0) {
                    that.setData({
                        commentList: res.data.data.lists,
                        commentLoading: false,
                        bookIsBuy: res.data.data.is_buy
                    });
                } else {
                    that.showInfo('返回数据异常');
                }
            },
            fail: function(error) {
                that.showInfo('请求失败');
            }
        });
    },


    showInfo: function(info) {
        wx.showToast({
            title: info,
            icon: 'none',
            duration: 1500,
            mask: true
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let _bookInfo = {};
        let that = this;

        for (let key in options) {
            _bookInfo[key] = decodeURIComponent(options[key]);
        }

        that.setData({
            bookInfo: _bookInfo
        });

        that.getPageData()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    }
});