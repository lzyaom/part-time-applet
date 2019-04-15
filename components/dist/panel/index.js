Component({
  externalClasses: ['i-class', 'i-title-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    // 标题顶部距离
    hideTop: {
      type: Boolean,
      value: false
    },
    hideBorder: {
      type: Boolean,
      value: false
    }
  }
});