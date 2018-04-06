// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commentList: [{}, {}, {}]
    },


    goComment: function() {
        wx.navigateTo({
            url: '../comment/comment'
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

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})