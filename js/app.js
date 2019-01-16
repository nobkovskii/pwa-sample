// import u from '../assets/data.json';

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
      users: []
  },
  created: function(){
    axios.get("../assets/data.json").then(function(res){
      console.log(res)
      this.users = res.data
    }.bind(this)).catch(function(e){
      console.error(e);
    })
  },
  // data: {
  //   users: [
  //     { no: '0001',name:'横田 隆二',kana:'ヨコタ リュウジ',isActive:true,message:"よろしく",dept:"社長",img:"image/0001.jpg"},
  //     { no: '0002',name:'秋葉 花子',kana:'アキバ ハナコ',isActive:true,message:"よろ",dept:"部長",img:"image/0002.jpg"},
  //     { no: '0003',name:'津田 朗',kana:'ツダ アキラ',isActive:true,message:"よろし",dept:"課長",img:"image/0003.jpg"},
  //     { no: '0004',name:'藤谷 菜々美',kana:'フジタニ ナナミ',isActive:true,message:"よろし",dept:"営業",img:"image/0004.jpg"},
  //     { no: '0005',name:'高橋　あああ',kana:'たかはし　あああ',isActive:true,message:"よろし",dept:"開発",img:"image/0005.jpg"},
  //     { no: '0006',name:'高橋　あああ',kana:'たかはし　あああ',isActive:true,message:"よろし",dept:"開発",img:"image/0006.jpg"},
  //     { no: '0007',name:'高橋　あああ',kana:'たかはし　あああ',isActive:true,message:"よろし",dept:"開発",img:"image/0007.jpg"},
  //     { no: '0008',name:'高橋　あああ',kana:'たかはし　あああ',isActive:false,message:"よろし",dept:"開発",img:"image/0008.jpg"},
  //     { no: '0009',name:'高橋　あああ',kana:'たかはし　あああ',isActive:true,message:"よろし",dept:"開発",img:"image/0005.jpg"},
  //     { no: '0010',name:'高橋　あああ',kana:'たかはし　あああ',isActive:true,message:"よろし",dept:"開発",img:"image/0005.jpg"},
  //   ]
  // },
  // isActive で filterを設定
  computed: {
    activeUsers: function(){
      return this.users.filter(function(u){
        return u.isActive == true
      })
    }
  }
})
