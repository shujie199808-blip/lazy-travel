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
        title: '巴黎慢调周末',
        subtitle: '清晨跳蚤市场买花，黄昏塞纳河游船拍松弛大片',
        coverColor: '#ffe3d9',
        coverHeight: 230,
        vibe: '法式松弛',
        length: '3-5天随走随停',
        preset: 'paris-lounge'
      },
      {
        title: '土耳其热气球日出',
        subtitle: '格雷梅粉橙色天空 + 网红洞穴酒店早餐布景',
        coverColor: '#ffd9b3',
        coverHeight: 280,
        vibe: '天空滤镜',
        length: '情侣出片优选',
        preset: 'turkey-sunrise'
      },
      {
        title: '瑞士治愈雪山疗愈',
        subtitle: '少女峰缆车 + 少女心湖泊，纯净雪景治愈电子疲惫',
        coverColor: '#e7f3ff',
        coverHeight: 260,
        vibe: '治愈白雪',
        length: '躺平不赶路',
        preset: 'swiss-soft'
      },
      {
        title: '新加坡城市绿洲',
        subtitle: '滨海湾花园夜光森林 + 小众咖啡巡礼，一天收集城市绿意',
        coverColor: '#e0ffe3',
        coverHeight: 220,
        vibe: '城市森系',
        length: '2-4天轻奢',
        preset: 'singapore-green'
      },
      {
        title: '迪拜沙漠星光局',
        subtitle: '越野冲沙 + 沙漠私宴，奢闪风格也能很松弛',
        coverColor: '#fff0d9',
        coverHeight: 270,
        vibe: '炫目沙丘',
        length: '奢享体验',
        preset: 'dubai-glow'
      },
      {
        title: '南法蔚蓝海岸',
        subtitle: '尼斯海边徒步 + 艺术小镇闲逛，夏天的慵懒蓝调',
        coverColor: '#dff5ff',
        coverHeight: 240,
        vibe: '海边滤镜',
        length: '自驾/火车皆可',
        preset: 'provence-blue'
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
