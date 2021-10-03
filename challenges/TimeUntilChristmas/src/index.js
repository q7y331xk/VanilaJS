const clockTitle = document.querySelector(".js-clock");


function show(mSec) {
    const sec = parseInt(mSec / 1000);
    const min = parseInt(sec / 60);
    const hour = parseInt(min / 60);
    const day = parseInt(hour / 24);

    clockTitle.innerText =
        day + "d "
        + (hour % 24) + "h " 
        + (min % 60) + "m "
        + (sec % 60) + "s";
}
function calculator() {
    const currentTime = new Date();
    let christmasYear = currentTime.getFullYear();

    if (currentTime.getMonth() === 12 && currentTime.getDate() > 25) {
        christmasYear += 1;
    }

    const christmasTime = new Date(christmasYear,11,25);
    const mSec = christmasTime - currentTime;
    return mSec;
}
function handler() {
    const dif = calculator();
    show(dif);
}
// 현재시간 가져오기
// 현재시간 기준으로 크리스마스날 가져오기
// 두개 빼서 계산

// 값 보이기


setInterval(handler,1000);