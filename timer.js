function updateTimer() {
    const startDate = new Date('2024-09-05T00:00:00'); // 起始日期
    const now = new Date(); // 当前时间

    // 计算已经过去的时间差（毫秒）
    const timeDifference = now - startDate;

    // 将时间差转换为天、小时、分钟和秒
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // 更新HTML中的天数显示
    document.getElementById('days').textContent = days + '天';
    document.getElementById('time').textContent = `${hours.toString().padStart(2, '0')}时${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
}

// 初始化时调用一次
updateTimer();

// 每秒钟更新一次时间
setInterval(updateTimer, 1000);
