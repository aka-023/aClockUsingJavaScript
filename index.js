// setInterval(()=>{
//     d = new Date();
//     hr = d.getHours;
//     min = d.getMinutes;
//     sec = d.getSeconds;

//     hr_rotation = 30*hr + min/2;
//     min_rotation = 6*min;
//     sec_rotation = 6*sec;

//     hour.style.transform = `rotate(${hr_rotation}deg)`;
//     minute.style.transform = `rotate(${min_rotation}deg)`;
//     second.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);

setInterval(() => {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    const hr_rotation = 30 * hr + min / 2;
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    // Assuming you have elements with IDs 'hour', 'minute', and 'second'
    document.getElementById('hour').style.transform = `rotate(${hr_rotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${min_rotation}deg)`;
    document.getElementById('seconds').style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
