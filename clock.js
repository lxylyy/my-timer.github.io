function updateClocks() {
    const chicagoTime = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
    const chicagoClock = new Date(chicagoTime);
    const chicagoHours = chicagoClock.getHours().toString().padStart(2, '0');
    const chicagoMinutes = chicagoClock.getMinutes().toString().padStart(2, '0');
    const chicagoSeconds = chicagoClock.getSeconds().toString().padStart(2, '0');
    document.getElementById('chicago-hour').textContent = chicagoHours;
    document.getElementById('chicago-minute').textContent = chicagoMinutes;
    document.getElementById('chicago-second').textContent = chicagoSeconds;

    // 更新芝加哥日期
    const chicagoDateStr = chicagoClock.toLocaleDateString("zh-CN", { year: 'numeric', month: '2-digit', day: '2-digit' });
    const chicagoWeekdayStr = "周" + "日一二三四五六".charAt(chicagoClock.getDay());
    document.getElementById('chicago-date').textContent = `${chicagoDateStr} ${chicagoWeekdayStr}`;

    const beijingTime = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
    const beijingClock = new Date(beijingTime);
    const beijingHours = beijingClock.getHours().toString().padStart(2, '0');
    const beijingMinutes = beijingClock.getMinutes().toString().padStart(2, '0');
    const beijingSeconds = beijingClock.getSeconds().toString().padStart(2, '0');
    document.getElementById('beijing-hour').textContent = beijingHours;
    document.getElementById('beijing-minute').textContent = beijingMinutes;
    document.getElementById('beijing-second').textContent = beijingSeconds;

    // 更新北京时间日期
    const beijingDateStr = beijingClock.toLocaleDateString("zh-CN", { year: 'numeric', month: '2-digit', day: '2-digit' });
    const beijingWeekdayStr = "周" + "日一二三四五六".charAt(beijingClock.getDay());
    document.getElementById('beijing-date').textContent = `${beijingDateStr} ${beijingWeekdayStr}`;
}

// 初始化时调用一次
updateClocks();

// 每秒钟更新一次时间
setInterval(updateClocks, 1000);
