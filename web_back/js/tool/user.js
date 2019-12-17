var user = {
    login: function (options) {
        $.ajax({
            type: "post",
            url: LOGIN,
            data: {
                user_name: options.data.username,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                } else {
                    // alert("密码或账号输入错误")
                    options.fail()
                }
            }
        })
    },

    logout: function (options) {
        $.ajax({
            type: "post",
            url: USER,
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                } else {
                    options.fail()
                }
            }
        })
    },
    getUser: function (options) {
        $.ajax({
            type: "get",
            url: USER_INFO,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res.data)
                }
            }
        })

    },
    infoShow: function (options) {
        $.ajax({
            type: "get",
            url: INFO_Show,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res)
                }
            }
        })
    },
    infoAdd: function (options) {
        $.ajax({
            type: "post",
            url: INFO_Add,
            data: options.data,
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                } else {
                    options.fail()
                }
            }
        })
    },
    infoEdit: function (options) {
        $.ajax({
            type: "post",
            url: INFO_Edit,
            data: data,
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                } else {
                    options.fail()
                }
            }
        })
    },
    infoDel: function (options) {
        $.ajax({
            type: "post",
            url: INFO_Del,
            data: options.data,
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                }
            }
        })
    }
}