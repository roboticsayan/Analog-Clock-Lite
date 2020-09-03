setInterval(() => {
    day = new Date();
    hh = day.getHours();
    mm = day.getMinutes();
    ss = day.getSeconds();

    hrotation = 30*hh + mm/2;
    mrotation = 6*mm;
    srotation = 6*ss;

    hr.style.transform = `rotateZ(${hrotation}deg)`;
    mn.style.transform = `rotateZ(${mrotation}deg)`;
    sc.style.transform = `rotateZ(${srotation}deg)`;
}, 1000);