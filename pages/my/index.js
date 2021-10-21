var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: 'https://github.com/',
    userListInfo: [ {
      icon: '../../images/iconfont-dingdan.png',
      text: '�ҵĶ���',
      isunread: true,
      unreadNum: 2
    }, {
        icon: '../../images/iconfont-card.png',
        text: '�ҵĴ���ȯ',
        isunread: false,
        unreadNum: 2
      }, {
        icon: '../../images/iconfont-icontuan.png',
        text: '�ҵ�ƴ��',
        isunread: true,
        unreadNum: 1
      }, {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '�ջ���ַ����'
      }, {
        icon: '../../images/iconfont-kefu.png',
        text: '��ϵ�ͷ�'
      }, {
        icon: '../../images/iconfont-help.png',
        text: '��������'
      }]
  },

  onLoad: function() {
    var that = this
    //����Ӧ��ʵ���ķ�����ȡȫ������
    app.getUserInfo( function( userInfo ) {
     //��������
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})