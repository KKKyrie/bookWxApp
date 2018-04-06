// pages/books/books.js

const app = getApp();


Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookList: [],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        circular: true,

        sideMargin: '100rpx',

        showLoading: true
    },


    goDetail: function() {
        wx.navigateTo({
            url: '../detail/detail'
        });
    },

    getBookList: function() {
        let that = this;
        wx.request({
            url: 'https://jeremygao.net/api/book/getBooks',
            data: {
                is_all: 1
            },
            success: function(res) {
                let data = res.data;
                console.log(data);

                if (data.result === 0) {
                    app.globalData.bookList = data.data;


                    setTimeout(function() {
                        that.setData({
                            bookList: data.data,
                            showLoading: false
                        });
                    }, 800);
                }

            },
            error: function(err) {
                console.log(err);
            }
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;
        that.getBookList();
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
});