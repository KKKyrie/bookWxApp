// pages/myBooks/myBooks.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookList: [{
            index: 1,
            bookName: '钢铁是怎样炼成的',
            author: 'jeremy',
            publisher: 'now',
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
        }, {
            index: 4,
            bookName: 'test',
            author: 'jeremy',
            publisher: 'now',
            class: 'tech',
            bookId: '666',
            imgUrl: 'http://kyrieliu.cn/markdown-pics/pa.jpg'
        }],

        showLoading: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;
        setTimeout(function(){
            that.setData({
                showLoading: false
            });
        }, 800);
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
})