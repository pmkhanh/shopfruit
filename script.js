
function chuyendk() {
    window.location.href = "./dangki.html";
}

function chuyendn() {
    window.location.href = "./dangnhap.html";
}

function show() {
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas");

    // Checking type of password 
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

function dangnhap() {
    var email = $('#email').val();
    var pw = $('#pw').val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email == '' && pw == '') {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        smallElement.text("Email không được để trống");
        smallElement.css("color", "red");
        smallElement1.text("Mật khẩu không được để trống");
        smallElement1.css("color", "red");
        return false;
    }

    if (!filter.test(email)) {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        smallElement.text("Email không hợp lệ");
        smallElement.css("color", "red");
        smallElement1.text("");
        smallElement1.css("color", "red");
        return false;
    }
    if (email == "") {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        smallElement.text("Email không được để trống");
        smallElement.css("color", "red");
        smallElement1.text("");
        smallElement1.css("color", "red");
        return false;
    }

    if (pw == '') {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        smallElement.text("");
        smallElement.css("color", "red");
        smallElement1.text("Mật khẩu không được để trống");
        smallElement1.css("color", "red");
        return false;

    }
    if (pw.length < 8) {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        smallElement.text("");
        smallElement.css("color", "red");
        smallElement1.text("Mật khẩu không thể ít hơn 8 kí tự");
        smallElement1.css("color", "red");
        return false
    }

    if (!localStorage.getItem(email)) {
        alert('Email này chưa được đăng ký');
        return false;
    } else {
        var user = JSON.parse(localStorage.getItem(email));
        if (user.password !== pw) {
            alert('Mật khẩu không đúng');
            return false;
        } else {
            alert('Đăng nhập thành công');
            // lưu thông tin người dùng vào SessionStorage
            sessionStorage.setItem('user', JSON.stringify(user));
            // Trả giá trị
            return true;
        }
    }


}

function dangky() {
    var email = $('#email').val();
    var password = $('#pw').val();
    var password1 = $('#pw1').val();
    var name = $('#name').val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == '' && password == '' && password1 == '' && name == '') {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();
        var smallElement2 = $('#pw1').next();
        var smallElement3 = $('#name').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        if (!smallElement2.is("small")) {
            $('#pw1').after('<small id="pw1small"></small>');
            smallElement2 = $('#pw1').next();
        }
        if (!smallElement3.is("small")) {
            $('#name').after('<small id="namesmall"></small>');
            smallElement3 = $('#name').next();
        }
        smallElement.text("Email không được để trống");
        smallElement.css("color", "red");
        smallElement1.text("Mật khẩu không được để trống");
        smallElement1.css("color", "red");
        smallElement2.text("Mật khẩu nhập lại không được để trống");
        smallElement2.css("color", "red");
        smallElement3.text("Tên không được để trống");
        smallElement3.css("color", "red");
        return false;
    }
    if (!filter.test(email)) {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();
        var smallElement2 = $('#pw1').next();
        var smallElement3 = $('#name').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        if (!smallElement2.is("small")) {
            $('#pw1').after('<small id="pw1small"></small>');
            smallElement2 = $('#pw1').next();
        }
        if (!smallElement3.is("small")) {
            $('#name').after('<small id="namesmall"></small>');
            smallElement3 = $('#name').next();
        }
        smallElement.text("Email không hợp lệ");
        smallElement.css("color", "red");
        smallElement1.text("");
        smallElement1.css("color", "red");
        smallElement2.text("");
        smallElement2.css("color", "red");
        smallElement3.text("");
        smallElement3.css("color", "red");
        return false;
    }
    if (email == "") {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();
        var smallElement2 = $('#pw1').next();
        var smallElement3 = $('#name').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        if (!smallElement2.is("small")) {
            $('#pw1').after('<small id="pw1small"></small>');
            smallElement2 = $('#pw1').next();
        }
        if (!smallElement3.is("small")) {
            $('#name').after('<small id="namesmall"></small>');
            smallElement3 = $('#name').next();
        }
        smallElement.text("Email không được để trống");
        smallElement.css("color", "red");
        smallElement1.text("");
        smallElement1.css("color", "red");
        smallElement2.text("");
        smallElement2.css("color", "red");
        smallElement3.text("");
        smallElement3.css("color", "red");
        return false;
    }
    if (name = '') {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();
        var smallElement2 = $('#pw1').next();
        var smallElement3 = $('#name').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        if (!smallElement2.is("small")) {
            $('#pw1').after('<small id="pw1small"></small>');
            smallElement2 = $('#pw1').next();
        }
        if (!smallElement3.is("small")) {
            $('#name').after('<small id="namesmall"></small>');
            smallElement3 = $('#name').next();
        }
        smallElement.text("");
        smallElement.css("color", "red");
        smallElement1.text("");
        smallElement1.css("color", "red");
        smallElement2.text("");
        smallElement2.css("color", "red");
        smallElement3.text("Tên không được để trống");
        smallElement3.css("color", "red");
        return false;

    }

    if (password == '') {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();
        var smallElement2 = $('#pw1').next();
        var smallElement3 = $('#name').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        if (!smallElement2.is("small")) {
            $('#pw1').after('<small id="pw1small"></small>');
            smallElement2 = $('#pw1').next();
        }
        if (!smallElement3.is("small")) {
            $('#name').after('<small id="namesmall"></small>');
            smallElement3 = $('#name').next();
        }
        smallElement.text("");
        smallElement.css("color", "red");
        smallElement1.text("Mật khẩu không được để trống");
        smallElement1.css("color", "red");
        smallElement2.text("");
        smallElement2.css("color", "red");
        smallElement3.text("");
        smallElement3.css("color", "red");
        return false;
    }
    if (password.length < 8) {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();
        var smallElement2 = $('#pw1').next();
        var smallElement3 = $('#name').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        if (!smallElement2.is("small")) {
            $('#pw1').after('<small id="pw1small"></small>');
            smallElement2 = $('#pw1').next();
        }
        if (!smallElement3.is("small")) {
            $('#name').after('<small id="namesmall"></small>');
            smallElement3 = $('#name').next();
        }
        smallElement.text("");
        smallElement.css("color", "red");
        smallElement1.text("Mật khẩu không được ít hơn 8 kí tự");
        smallElement1.css("color", "red");
        smallElement2.text("");
        smallElement2.css("color", "red");
        smallElement3.text("");
        smallElement3.css("color", "red");
        return false;
    }
    if (password1 == '' || password.length < 8 || password1 != password) {
        var smallElement = $('#email').next();
        var smallElement1 = $('#pw').next();
        var smallElement2 = $('#pw1').next();
        var smallElement3 = $('#name').next();

        if (!smallElement.is("small")) {
            $('#email').after('<small id="emailsmall"></small>');
            smallElement = $('#email').next();
        }

        if (!smallElement1.is("small")) {
            $('#pw').after('<small id="pwsmall"></small>');
            smallElement1 = $('#pw').next();
        }
        if (!smallElement2.is("small")) {
            $('#pw1').after('<small id="pw1small"></small>');
            smallElement2 = $('#pw1').next();
        }
        if (!smallElement3.is("small")) {
            $('#name').after('<small id="namesmall"></small>');
            smallElement3 = $('#name').next();
        }
        smallElement.text("");
        smallElement.css("color", "red");
        smallElement1.text("");
        smallElement1.css("color", "red");
        smallElement2.text("Mật khẩu nhập lại không đúng");
        smallElement2.css("color", "red");
        smallElement3.text("");
        smallElement3.css("color", "red");
        return false;
    }

    // kiểm tra xem người dùng đã đăng ký chưa
    if (localStorage.getItem(email)) {
        alert('Email này đã được đăng ký');
        return false;

    } else {
        // lưu thông tin người dùng vào LocalStorage
        var user = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Đăng thành công tài khoản")
        return true;
    }

}


function checklh() {
    var email = document.getElementById('email').value;
    var hoten = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var nd = document.getElementById('nd').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == '' && hoten == '' && nd == '' && phone == '')
        alert('Vui lòng nhập thông tin !');
    else if (!filter.test(email) || email == '') {
        alert('Email không hợp lệ.');
        email.focus;
        return false;
    } else if (hoten == '' || hoten.length < 4) {
        alert('Họ và tên không hợp lệ.');
        return false;
    } else if (phone == '' || phone.length != 10) {
        alert('Vui lòng nhập số điện thoại hợp lệ gồm 10 số.');
        return false;
    } else if (nd == '' || nd.length < 10) {
        alert('Nội dung không hợp lệ.');
        return false;
    } else
        alert('Cảm ơn bạn đã liên hệ, góp ý.');
}