// pages/books/books.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookList: [{
            index: 1,
            bookName: 'test',
            author: 'jeremygao',
            publisher: 'Tencent',
            class: 'tech',
            bookId: '666',
            imgUrl: 'http://kyrieliu.cn/markdown-pics/pa.jpg'
        }, {
            index: 2,
            bookName: 'test',
            author: 'jeremy',
            publisher: 'now',
            class: 'tech',
            bookId: '666',
            imgUrl: 'http://kyrieliu.cn/markdown-pics/pa.jpg'
        }, {
            index: 3,
            bookName: 'test',
            author: 'jeremy',
            publisher: 'now',
            class: 'tech',
            bookId: '666',
            imgUrl: 'http://kyrieliu.cn/markdown-pics/pa.jpg'
        }],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        circular: true,

        sideMargin: '100rpx'
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