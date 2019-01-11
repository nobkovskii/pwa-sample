new Vue({
  // #app 要素に対して Vue を適用する
  el: '#app',

  // message という名前のデータを定義する
  data: { message: 'Hello world!' }
})

new Vue({
  el: '#table-id',
  data: {
    tables: [
      { th: 'aa',td:'AA'},
      { th: 'bb',td:'BB'},
      { th: 'cc',td:'CC'}
    ]
  }
})

new Vue({
  el: '#users',
  data: {
    users: [
      { no: '0001',name:'山田　太郎',message:"よろしく",dept:[{name:"社長"},{name:"アプリ"}]},
      { no: '0002',name:'佐藤　花子',message:"よろ",dept:[{name:"部長"},{name:"システム"}]},
      { no: '0003',name:'田中　次郎',message:"よろし",dept:[{name:"課長"},{name:"営業"}]},
      { no: '0004',name:'鈴木　大地',message:"よろし",dept:[{name:"営業"}]},
      { no: '0005',name:'高橋　あああ',message:"よろし",dept:[{name:"開発"}]},
    ]
  }
})
