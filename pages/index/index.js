const request = require('../../services/request');

Page({
  data: {},
  onLoad(query) {
  //  console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.getCharacters();
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    console.log(this.data);
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    console.log(this.data);
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  getCharacters(){
    request.get('character').then(resp => {
      console.log(resp);
      this.setData({characters: resp.results});
    });
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'Rick And Morty',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
