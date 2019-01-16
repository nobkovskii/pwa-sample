// service workerの登録関係
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service_worker.js')
  .then(registration => {
    registration.onupdatefound = function(){
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      registration.update();
    }
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}

//ユーザ詳細モーダル
$('#userDetail').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) //モーダルを呼び出すときに使われたボタンを取得
  var user = button.data('whatever') //data-whatever の値を取得
  var modal = $(this)  //モーダルを取得
  //モーダルのタイトルに値を表示
  modal.find('.modal-title').text('#' + user.no + ' ' + user.name)
  //モーダルの各項目に値を表示
  modal.find('.no').text(user.no)
  modal.find('.dept').text(user.dept)
  modal.find('.name').text(user.name)
  modal.find('.kana').text(user.kana)
  modal.find('.content').text(user.message)
  modal.find('.img').attr("src",user.img)
})
