Page({
  data: {
    moodTags: [
      '不想熬夜查攻略',
      '不想被行程绑住',
      '想拍照不想太累',
      '想玩得舒服不踩雷'
    ],
    destinations: [
      {
        title: '巴黎随心漫步',
        subtitle: '卢浮宫到塞纳河，咖啡香里拍下法式松弛感',
        coverColor: '#ffe0c2',
        preset: 'paris-lounge'
      },
      {
        title: '瑞士治愈雪景',
        subtitle: '晨间山谷小火车 + 黄昏湖边散步，一天装满温柔',
        coverColor: '#e5f5ff',
        preset: 'swiss-soft'
      },
      {
        title: '土耳其蓝色风情',
        subtitle: '清晨热气球日出，下午跳岛看爱琴海蓝到发光',
        coverColor: '#dff3ff',
        preset: 'turkey-blue'
      },
      {
        title: '新加坡花园小住',
        subtitle: '滨海湾花园夜景 + 小众咖啡巡礼，轻松走完城市绿意',
        coverColor: '#f5ffd9',
        preset: 'singapore-green'
      },
      {
        title: '迪拜沙漠闪耀',
        subtitle: '沙漠星空晚宴、帆船酒店下午茶，奢享也可以很松弛',
        coverColor: '#fff0d9',
        preset: 'dubai-glow'
      },
      {
        title: '澳洲日光海岸',
        subtitle: '黄金海岸冲浪 + 日落野餐，阳光和海风一键装进行程',
        coverColor: '#ffe8e0',
        preset: 'australia-sun'
      }
    ]
  },

  goForm() {
    wx.navigateTo({ url: '/pages/form/index' });
  },

  goPreset(event) {
    const preset = event.currentTarget.dataset.preset;
    const url = preset
      ? `/pages/form/index?preset=${encodeURIComponent(preset)}`
      : '/pages/form/index';
    wx.navigateTo({ url });
  }
});
