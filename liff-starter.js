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

    //get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            var profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            var img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleProfileData() {
    var elem = document.getElementById('authcode');
    console.log(elem.offsetWidth)
    if (elem.style.display = "block") {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}

function toggleProfileData1() {
    var elem = document.getElementById('authcode');
    if (elem.style.display = "block") {
        elem.style.display = "block";
    } else {
        elem.style.display = "block";
    }
}
