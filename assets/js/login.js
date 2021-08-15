$(function () {
    $('#link-reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link-login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })


    //从lay中获取form对象
    var form = layui.form
    var layer = layui.layer
    //通过form.verify() 函数自定义校验规则
    form.verify({
        //自定义了一个Zrx校验规则
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        //验证两次密码是否一致的规则
        repwd: function (value) {
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致!'
            }
        }
    })

    //监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        e.preventDefault();
        var data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        $.post('http://api-breakingnews-web.itheima.net/api/reguser', data, function (res) {
            if (res.status !== 0) {
                // return console.log(res.message);
                return layer.msg(res.message)
            }
            layer.msg('注册成功请登入')
            //监听登入表单的提交事件(未完成)
            $('#dengru').click(function () {
                location.href = '/index.html'
            })
        })
    })
})