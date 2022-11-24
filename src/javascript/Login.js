window.onload = function() {
    var account = document.querySelector('#account');
    var password1 = document.querySelector('#password1');
    var reg1 = /^[1][3-9][0-9]{9}$/;
    var reg9 = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*()`_+-=`][;',./{}:"<>?]).{8,20}$/;
    loginbtn.addEventListener('click', function() {
        if (account.value == '' || password1.value == '') {
            alert('不能为空');
        } else {
            if (reg1.test(account.value) == false || reg9.test(password1.value) == false) {
                alert('账号密码格式错误');
            } else {
                if (account.value == '17398132739' && password1.value == '123qwe,./') {
                    alert('登录成功');
                    window.location.href = '../CardCat/index.vue';
                } else {
                    alert('账号或密码不正确');
                }
            }
        }
    })
}