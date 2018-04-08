// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commentList: [{}, {}, {}],
        bookInfo: {},
        commentLoading: true
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

    exchangeBook: function() {
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


        setTimeout(function(){
            that.setData({
                commentLoading: false
            });
        }, 1000);
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