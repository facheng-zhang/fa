var app = getApp()
Page({
    data: {
        
    },
    onLoad: function(options) {

        var that = this
        
        wx.request({
				//www.dyddd.com已经注销，并非真实的网站
            url: 'http://www.dyddd.com/wemall/venues/getBrandAndType?id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    brandList: res.data.data
                });
            }
        })
    }

})