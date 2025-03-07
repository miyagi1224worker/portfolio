//サイドメニューボタンが押されたらサイドバーを表示する
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});