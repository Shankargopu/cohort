

function printTime() {
    const currDate = new Date();
    const hours = currDate.getHours();
    const minutes = currDate.getMinutes();
    const seconds = currDate.getSeconds();

    console.log(`${hours} : ${minutes} : ${seconds}`);
}

setInterval(printTime, 1000);