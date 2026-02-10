// 简单交互脚本
document.addEventListener('DOMContentLoaded', function () {
  console.log('GLJ Resume loaded');
  var h1 = document.querySelector('h1');
  if (h1) {
    h1.addEventListener('click', function () {
      alert('你好！谢谢访问 😊');
    });
  }
});