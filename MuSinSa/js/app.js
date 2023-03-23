
$(document).ready(function(){
    autoLoginCheck()
    tab()
    nonMemberCheck()
})

function autoLoginCheck(){
    $(".auto_check").click(function(){
        var result=$(".auto_check").hasClass("off")
        if(result===true){//off일때
            var result = confirm("공용 PC는 자동로그인이 위험합니다! 그래도 하시겠습니까?")
            
            if(result===true){
                $(".auto_check>a>img").attr('src','./images/check_small_on.png')
                $(".auto_check").removeClass("off")
                $(".auto_check").addClass("on")
            }else{//false

            }
        }else{//on일때
            $(".auto_check>a>img").attr('src','./images/check_small_off.png')
            $(".auto_check").removeClass("on")
            $(".auto_check").addClass("off")
        }
    })
}

function tab(){
    $("#tab_btn>a").click(function(){
        var idx = $(this).index()
        console.log(idx)//0,1
        //hide,show
        //5분뒤에~
        $("#tab_contents>div").hide()
        $("#tab_contents>div").eq(idx).show()

        //$("#tab_btn>a").css({"backgroundColor":"#F1F1F1","color":"#AAAAAA"})
        //$("#tab_btn>a").eq(idx).css({"backgroundColor":"white","color":"black"})
        
    })
}

function nonMemberCheck(){
    
}