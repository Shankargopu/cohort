

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let ss = date.getSeconds();
    if (ss < 10) {
        ss = `0${ss}`;
    }
    if (mins < 10) {
        mins = `0${mins}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let time = `${hours} : ${mins} : ${ss}`;
    if (hours < 12) {

        time = time + ' AM';
    } else {
        time = time + ' PM';
    }

    console.log(time);
}, 1000)