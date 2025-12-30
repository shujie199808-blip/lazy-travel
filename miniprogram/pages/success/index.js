Page({
  data: {
    name: '',
    contact: ''
  },
  onLoad(query) {
    this.setData({
      name: query.name || '未填写',
      contact: query.contact || '未填写'
    });
  },
  goHome() {
    wx.reLaunch({ url: '/pages/home/index' });
  }
});
