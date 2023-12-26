async function getData(a) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`From async/await Data: ${a}`);
            resolve("success");
        }, 2500);
    });
}

async function fetchData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}

fetchData();



function getdata(a) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`From promises Data: ${a}`);
            resolve("success");
        }, 2400);
    });
}

getdata(1)
    .then(() => getdata(2))
    .then(() => getdata(3))
    .then(() => getdata(4))
    .then(() => getdata(5));



    function getdata(a, getnextdata) {
        setTimeout(() => {
            console.log(`From callback hell Data: ${a}`);
            if (getnextdata) getnextdata();
        }, 2300);
    }
    
    getdata(1, () => {
        getdata(2, () => {
            getdata(3, () => {
                getdata(4, () => {
                    getdata(5);
                });
            });
        });
    });
    