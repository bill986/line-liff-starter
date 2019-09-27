window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{  
            "type":"postback",
            "label":"Buy",
            "data":"action=buy&itemid=111",
            "text":"Buy"
         }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton2').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "successfully sent a message!"
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    document.getElementById('sendmessagebutton3').addEventListener('click', function () {
        liff.sendMessages([{  
            "type":"postback",
            "label":"Buy",
            "data":"action=buy&itemid=111",
            "text":"Buy"
         }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

}

function sendauthcode() {
    var elem = document.getElementById('authcode');
    elem.style.display = "block"
}
function cancelauthcode() {
    var elem = document.getElementById('authcode');
    elem.style.display = "none"
}
