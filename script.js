// 检查localStorage中是否有用户的抽奖记录，如果没有则初始化  
function checkLocalStorage(userId) {  
    var attempts = localStorage.getItem(userId + '_attempts');  
    return attempts ? parseInt(attempts, 10) : 0;  
}  
  
// 更新用户的抽奖次数  
function updateLocalStorage(userId, newAttempts) {  
    localStorage.setItem(userId + '_attempts', newAttempts.toString());  
}  
  
function startLottery() {  
    var userId = document.getElementById('userId').value.trim();  
  
    if (userId === '') {  
        alert('请输入您的用户ID！');  
        return;  
    }  
  
    var attempts = checkLocalStorage(userId);  
    if (attempts >= 1) {  
        alert('您的抽奖次数已达到上限！');  
        return;  
    }  
  
    // 假设我们有5个奖品选项  
    var prizes = ['八折优惠，请截图后联系客服领取奖品', '八折优惠，请截图后联系客服领取奖品','八折优惠，请截图后联系客服领取奖品','八折优惠，请截图后联系客服领取奖品','八折优惠，请截图后联系客服领取奖品','八折优惠，请截图后联系客服领取奖品','九折优惠，请截图后联系客服领取奖品',  '九折优惠，请截图后联系客服领取奖品',  '九折优惠，请截图后联系客服领取奖品',  '九折优惠，请截图后联系客服领取奖品',  '九折优惠，请截图后联系客服领取奖品', '免费领取的奖励！！！！请截图后联系客服领取奖品'];  
    var randomIndex = Math.floor(Math.random() * prizes.length);  
    var winningPrize = prizes[randomIndex];  
  
    // 显示抽奖结果  
    document.getElementById('result').textContent = '恭喜你赢得了：' + winningPrize;  
  
    // 更新抽奖次数  
    updateLocalStorage(userId, attempts + 1);  
}  
  
// 使用DOMContentLoaded确保DOM加载完成后再绑定事件  
document.addEventListener('DOMContentLoaded', function() {  
    document.getElementById('startButton').addEventListener('click', startLottery);  
});