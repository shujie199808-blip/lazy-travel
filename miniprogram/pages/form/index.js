Page({
  onSubmit(event) {
    const { name = '', contact = '' } = event.detail.value;
    wx.showToast({ title: '提交成功', icon: 'success' });
    wx.navigateTo({
      url: `/pages/success/index?name=${encodeURIComponent(name)}&contact=${encodeURIComponent(contact)}`
    });
  }
});
