// pages/myBooks/myBooks.js
const api = require('../../config/config.js');
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookList: [],

        showLoading: true

    },

    readBook: function(ev) {
        let data = ev.currentTarget.dataset;
        let fileUrl = data.file;
        wx.downloadFile({
            url: fileUrl,
            success: function(res) {
                var filePath = res.tempFilePath
                wx.openDocument({
                    filePath: filePath,
                    success: function(res) {
                        console.log('打开文档成功')
                    },
                    fail: function(error){
                        console.log(error);
                        that.showInfo('文档打开失败');
                    }
                });
            },
            fail: function(error) {
                that.showInfo('文档下载失败');
                console.log(error);
            }
        });
    },

    getMybooks: function() {
        let that = this;
        wx.request({
            url: api.getBoughtBooksUrl,
            data: {
                skey: app.getLoginFlag()
            },
            success: function(res) {
                let data = res.data;

                if (data.result === 0) {
                    console.log(data);
                    that.setData({
                        bookList: data.list || []
                    });
                }

            },
            error: function(err) {
                console.log(err);
            }
        });
    },

    showInfo: function(info) {
        wx.showToast({
            title: info,
            icon: 'none',
            mask: true,
            duration: 1500
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;
        setTimeout(function() {
            that.setData({
                showLoading: false
            });
        }, 800);

        that.getMybooks();
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