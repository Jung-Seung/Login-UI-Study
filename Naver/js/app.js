
$(document).ready(function(){
    loginMaintain()
    ipSecurity()
    messageBox()
    imageChange()
    selectLanguage()
})

function loginMaintain(){
    //클래스
    //login_on <-> login_off

    $(".login_check>span").click(function(){
        var result = $(".login_check>span").hasClass("login_off")

        if(result===true){
            //login_off있음
            $(".login_check>span").removeClass("login_off")//login_off제거
            $(".login_check>span").addClass("login_on")//login_on추가
        }else if(result===false){
            //login_on있음
            $(".login_check>span").removeClass("login_on")//login_on제거
            $(".login_check>span").addClass("login_off")//login_off추가
        }
    })

    
}
function ipSecurity(){
    //클래스
    //ip_on <-> ip_off
    $(".pc_check>span").click(function(){
        var result = $(".pc_check>span").hasClass("ip_off")
        if(result===true){//ip_off
            $(".pc_check>span").removeClass("ip_off")
            $(".pc_check>span").addClass("ip_on")
        }else if(result===false){//ip_on
            $(".pc_check>span").removeClass("ip_on")
            $(".pc_check>span").addClass("ip_off")
        }
    })
}

function messageBox(){
    $(".safe_notice>img").click(function(){
        $(".safe_notice").hide()
        $(".tri").hide()
    })
}

function imageChange(){
    var choice = Math.ceil(Math.random()*3)//1,2,3
    if(choice===1){
        $(".whale_wrap>img").attr('src','./images/whale.png')
    }else if(choice===2){
        $(".whale_wrap>img").attr('src','./images/pay_point.png')
    }else if(choice===3){
        $(".whale_wrap>img").attr('src','./images/security_login.png')
    }
}

function selectLanguage(){
    //select박스가 변경되면~
    $("#lang-select").change(function(){
        alert(this.value)
        const lang = this.value
        if(lang==="한국어"){
            
        }else if(lang==="English"){
            $(".input_box>#id").attr('placeholder','Username')
            $(".input_box>#pw").attr('placeholder','Password')
            $("#login").val('Sign in')
            $(".login_check>label").text('Stay Signed in')

            $(".button_area").hide()
            $(".whale_wrap").hide()
            $(".other_country").show()

        }else if(lang==="中文(简体)"){

        }else if(lang==="中文(台灣)"){
            
        }

    })
}

