let currentUser = null;
const users = {};

document.getElementById('register-btn').addEventListener('click', () => {
    const username = document.getElementById('register-username').value;
    if (username) {
        users[username] = true;
        alert('注册成功！');
    } else {
        alert('请输入用户名！');
    }
});

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    if (users[username]) {
        currentUser = username;
        alert('登录成功！');
        document.getElementById('message-input').disabled = false;
        document.getElementById('add-message-btn').disabled = false;
    } else {
        alert('用户名不存在，请注册！');
    }
});

document.getElementById('add-message-btn').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    if (message && currentUser) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${currentUser}: ${message}`;
        document.getElementById('messages').appendChild(messageElement);
        document.getElementById('message-input').value = ''; // 清空输入框
    }
});

