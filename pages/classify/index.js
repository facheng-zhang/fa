var app = getApp()
Page({
    data: {
        navLeftItems: [],
        navRightItems: [],
        curNav: 1,
		curIndex: 0
    },
    onLoad: function() {

        var that = this
        
        wx.request({
            url: 'http://dyddd.com/wemall/goodstype/typebrandList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    navLeftItems: res.data,
                    navRightItems: res.data
                })
            }
        })
    },

    //�¼���������
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})