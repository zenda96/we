// 加载时候展示loading动图
$(document).ready(function() {
    // $('loading').show();
    console.log('1')
})


//获取展示内容区域高度

var displayHeight = (window.innerHeight)
// 图片文件全部加载完毕后执行
window.onload = function() {
    // alert(displayHeight)
    console.log('2')
    var playflag = 1;
    var audio = document.getElementById('audio');

    if (audio) {
        audio.play();
    }
    // 兼容ios微信webview无法自动播放音频的问题
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        audio.play();
    }, false);


    // 控制音乐播放
    $('#music_controller').click(function() {
        if (playflag == 1) {
            audio.pause();
            playflag = 0;
            $('#music_controller').css('animation', 'none');
        } else {
            audio.play();
            playflag = 1;
            $('#music_controller').css('animation', 'zdLoop 5s linear infinite');
        }
    });
    console.log('load')
    // fullpage插件控制滑屏
    $('#fullpage').fullpage({
        fixedElements: "#controller",
        autoScrolling: true,
        recordHistory: true,
        sectionsColor: '#0a173a',
        onLeave: function(index, nextIndex, direction) {
            switch (nextIndex) {
                case 1:
                    {
                        hidePage1();
                        showPage1();
                        if (index == 2) {
                            hidePage2();
                        }
                    }
                    break;
                case 2:
                    {
                        hidePage2();
                        showPage2();
                        if (index == 1) {
                            hidePage1();
                        }
                        if (index == 3) {
                            hidePage3();
                        }
                    }
                    break;
                case 3:
                    {
                        hidePage3();
                        showPage3();
                        if (index == 2) {
                            hidePage2();
                        }
                        if (index == 4) {
                            hidePage4();
                        }
                    }
                    break;
                case 4:
                    {
                        hidePage4();
                        showPage4();
                        if (index == 3) {
                            hidePage3();
                        }
                        if (index == 5) {
                            hidePage5();
                        }
                    }
                    break;
                case 5:
                    {
                        hidePage5();
                        showPage5();
                        if (index == 4) {
                            hidePage4();
                        }
                        if (index == 6) {
                            hidePage6();
                        }
                    }
                    break;
                case 6:
                    {
                        hidePage6();
                        showPage6();
                        if (index == 5) {
                            hidePage5();
                        }
                        if (index == 7) {
                            hidePage7();
                        }
                    }
                    break;
                case 7:
                    {
                        hidePage7();
                        showPage7();
                        if (index == 6) {
                            hidePage6();
                        }
                        if (index == 8) {
                            hidePage8();
                        }
                    }
                    break;
                case 8:
                    {
                        hidePage8();
                        showPage8();
                        if (index == 7) {
                            hidePage7();
                        }
                        if (index == 9) {
                            hidePage9();
                        }
                    }
                    break;
                case 9:
                    {
                        hidePage9();
                        showPage9();
                        if (index == 8) {
                            hidePage8();
                        }
                        if (index == 10) {
                            hidePage10();
                        }
                    }
                    break;
                case 10:
                    {
                        hidePage10();
                        showPage10();
                        if (index == 9) {
                            hidePage9();
                        }
                        if (index == 11) {
                            hidePage11();
                        }
                    }
                    break;
                case 11:
                    {
                        hidePage11();
                        showPage11();
                        if (index == 10) {
                            hidePage10();
                        }
                        if (index == 12) {
                            hidePage12();
                        }
                    }
                    break;
                case 12:
                    {
                        hidePage12();
                        showPage12();
                        if (index == 11) {
                            hidePage11();
                        }
                    }
                    break;
            }
        },
    });
    $('.loading').fadeOut();
    $('#fullpage').fullpage.moveTo(9)

    showPage1();

};
var showPage1 = function() {
    window.p1t1 = setTimeout(function() {
        $('.page1 .title-top img').show()
        $('.page1 .title-mid img').show()
        $('.page1 .title-top img').addClass('fadeIn')
        $('.page1 .title-mid img').addClass('zoomIn')
        $('.page1 .hiddenSpan').show()
        $('.page1 .hiddenSpan').click(function() {
            // console.log('11111')
            $('#fullpage').fullpage.moveTo(2)
        })
    }, 500)
}
var hidePage1 = function() {
    if (typeof(p1t1) == 'number') {
        clearTimeout(p1t1);
    }
    $('.page1 .hiddenSpan').unbind()
    $('.page1 .hiddenSpan').hide()
    $('.page1 .title-top img').hide()
    $('.page1 .title-mid img').hide()
    $('.page1 .title-top img').removeClass('fadeIn')
    $('.page1 .title-mid img').removeClass('zoomIn')
}
var showPage2 = function() {
    window.p2t1 = setTimeout(function() {
        $('.page2 .text').show()
        $('.page2 .text img').addClass('fadeIn')
    }, 500)
    window.p2t1 = setTimeout(function() {
        $('.page2 .arrow').show()
    }, 1000)

}
var hidePage2 = function() {
    if (typeof(p2t1) == 'number') {
        clearTimeout(p2t1);
    }
    if (typeof(p2t2) == 'number') {
        clearTimeout(p2t2);
    }
    $('.page2 .arrow').hide()
    $('.page2 .text').hide()
    $('.page2 .text img').removeClass('fadeIn')
}
var showPage3 = function() {
    window.p3t1 = setTimeout(function() {
        $('.page3 .block1').show()
        $('.page3 .block1').addClass('fadeIn')
    }, 500)
    window.p3t2 = setTimeout(function() {
        $('.page3 .block2').show()
        $('.page3 .block2').addClass('fadeIn')
    }, 1000)
    window.p3t3 = setTimeout(function() {
        $('.page3 .block3').show()
        $('.page3 .block3').addClass('fadeIn')
    }, 1500)
    window.p3t4 = setTimeout(function() {
        $('.page3 .arrow').show()
    }, 2000)
}
var hidePage3 = function() {
    if (typeof(p3t1) == 'number') {
        clearTimeout(p3t1);
    }
    if (typeof(p3t2) == 'number') {
        clearTimeout(p3t2);
    }
    if (typeof(p3t3) == 'number') {
        clearTimeout(p3t3);
    }
    if (typeof(p3t4) == 'number') {
        clearTimeout(p3t4);
    }
    $('.page3 .block1').hide()
    $('.page3 .arrow').hide()
    $('.page3 .block1').removeClass('fadeIn')
    $('.page3 .block2').hide()
    $('.page3 .block2').removeClass('fadeIn')
    $('.page3 .block3').hide()
    $('.page3 .block3').removeClass('fadeIn')

}
var showPage4 = function() {
    window.p4t1 = setTimeout(function() {
        $('.page4 .block1>img').show()
        $('.page4 .block1 .block-text').fadeIn()
        $('.page4 .block1>img').addClass('fadeIn')
    }, 500)
    window.p4t2 = setTimeout(function() {
        $('.page4 .block1 .block-text img').show()
        $('.page4 .block-text img').addClass('zoomIn')
    }, 1000)
    window.p4t3 = setTimeout(function() {

        $('.page4 .block2 .img1').show()
        $('.page4 .block2 .img1').addClass('fadeIn')
    }, 1500)
    window.p4t4 = setTimeout(function() {
        $('.page4 .block2 .img2').show()
        $('.page4 .block2 .img2').addClass('slideInRight')
    }, 2000)
    window.p4t5 = setTimeout(function() {
        $('.page4 .block2 .img3').show()
        $('.page4 .block2 .img3').addClass('slideInRight')
    }, 2500)
    window.p4t6 = setTimeout(function() {
        $('.page4 .block2 .img4').show()
        $('.page4 .block2 .img4').addClass('slideInRight')
    }, 3000)
    window.p4t7 = setTimeout(function() {
        $('.page4 .arrow').show()
    }, 3500)
}
var hidePage4 = function() {
    if (typeof(p4t1) == 'number') {
        clearTimeout(p4t1);
    }
    if (typeof(p4t2) == 'number') {
        clearTimeout(p4t2);
    }
    if (typeof(p4t3) == 'number') {
        clearTimeout(p4t3);
    }
    if (typeof(p4t4) == 'number') {
        clearTimeout(p4t4);
    }
    if (typeof(p4t5) == 'number') {
        clearTimeout(p4t5);
    }
    if (typeof(p4t6) == 'number') {
        clearTimeout(p4t6);
    }
    if (typeof(p4t7) == 'number') {
        clearTimeout(p4t7);
    }
    $('.page4 .arrow').hide()
    $('.page4 .block1>img').hide()
    $('.page4 .block1 .block-text').hide()
    $('.page4 .block .block-text img').hide()
    $('.page4 .block2 img').hide()
    $('.page4 .block1>img').removeClass('fadeIn')
    $('.page4 .block-text img').removeClass('zoomIn')
    $('.page4 .block2 img').eq(0).removeClass('fadeIn')
    $('.page4 .block2 img').eq(1).removeClass('slideInRight')
    $('.page4 .block2 img').eq(2).removeClass('slideInRight')
    $('.page4 .block2 img').eq(3).removeClass('slideInRight')
}
var showPage5 = function() {
    window.p5t1 = setTimeout(function() {
        $('.page5 .title').show()
    }, 500)
    $('.page5 .title img').addClass('slideInRight')
    window.p5t2 = setTimeout(function() {
        $('.page5 .text').show()
        $('.page5 .textLeft img').addClass('zoomIn')
        $('.page5 .textRight .img1').addClass('fadeUp')
        $('.page5 .textRight .img2').addClass('fadeUp')
    }, 1000)
    window.p5t3 = setTimeout(function() {
        $('.page5 .bottom').show()
        $('.page5 .bottom').addClass('fadeUp')
    }, 2000)
    window.p5t4 = setTimeout(function() {
        $('.page5 .arrow').show()
    }, 3000)
}
var hidePage5 = function() {
    if (typeof(p5t1) == 'number') {
        clearTimeout(p5t1);
    }
    if (typeof(p5t2) == 'number') {
        clearTimeout(p5t2);
    }
    if (typeof(p5t3) == 'number') {
        clearTimeout(p5t3);
    }
    if (typeof(p5t4) == 'number') {
        clearTimeout(p5t3);
    }
    // debugger
    $('.page5 .title').hide()
    $('.page5 .text').hide()
    $('.page5 .bottom').hide()
    $('.page5 .arrow').hide()
    $('.page5 .title img').removeClass('slideInRight')
    $('.page5 .textLeft img').removeClass('zoomIn')
    $('.page5 .textRight .img1').removeClass('fadeUp')
    $('.page5 .textRight .img2').removeClass('fadeUp')
    $('.page5 .bottom').removeClass('fadeUp')
}
var showPage6 = function() {
    window.p6t1 = setTimeout(function() {
        $('.page6 .title').show()
        $('.page6 .title img').addClass('slideInRight')
    }, 500)
    window.p6t2 = setTimeout(function() {
        $('.page6 .block1').show()
        $('.page6 .block1 img').eq(0).addClass('slideInRight')
        $('.page6 .block1 img').eq(1).addClass('slideInRight')
    }, 1500)
    window.p6t3 = setTimeout(function() {
        $('.page6 .block2').show()
        $('.page6 .block2 img').eq(0).addClass('slideInRight')
        $('.page6 .block2 img').eq(1).addClass('slideInRight')
    }, 2000)
    window.p6t4 = setTimeout(function() {
        $('.page6 .block3').show()
        $('.page6 .block3 img').eq(0).addClass('slideInRight')
        $('.page6 .block3 img').eq(1).addClass('slideInRight')
    }, 2500)
    window.p6t5 = setTimeout(function() {
        $('.page6 .arrow').show()
    }, 3000)
}
var hidePage6 = function() {
    if (typeof(p6t1) == 'number') {
        clearTimeout(p6t1);
    }
    if (typeof(p6t2) == 'number') {
        clearTimeout(p6t2);
    }
    if (typeof(p6t3) == 'number') {
        clearTimeout(p6t3);
    }
    if (typeof(p6t4) == 'number') {
        clearTimeout(p6t4);
    }
    if (typeof(p6t5) == 'number') {
        clearTimeout(p6t5);
    }
    $('.page6 .title').hide()
    $('.page6 .block1').hide()
    $('.page6 .block2').hide()
    $('.page6 .block3').hide()
    $('.page6 .arrow').hide()
    $('.page6 .title img').removeClass('slideInRight')
    $('.page6 .block1 img').eq(0).removeClass('slideInRight')
    $('.page6 .block2 img').eq(0).removeClass('slideInRight')
    $('.page6 .block3 img').eq(0).removeClass('slideInRight')
    $('.page6 .block1 img').eq(1).removeClass('slideInRight')
    $('.page6 .block2 img').eq(1).removeClass('slideInRight')
    $('.page6 .block3 img').eq(1).removeClass('slideInRight')
}
var showPage7 = function() {
    window.p7t1 = setTimeout(function() {
        $('.page7 .title').show()
        $('.page7 .title img').addClass('slideInRight')
    }, 500)
    window.p7t2 = setTimeout(function() {
        $('.page7 .block1').show()
        $('.page7 .block1').addClass('fadeIn')
    }, 1000)
    window.p7t3 = setTimeout(function() {
        $('.page7 .block2').show()
        $('.page7 .block2').addClass('fadeIn')
    }, 1500)
    window.p7t4 = setTimeout(function() {
        $('.page7 .arrow').show()
    }, 2000)
    if (typeof(p6t5) == 'number') {
        clearTimeout(p6t5);
    }
}
var hidePage7 = function() {
    if (typeof(p7t1) == 'number') {
        clearTimeout(p7t1);
    }
    if (typeof(p7t2) == 'number') {
        clearTimeout(p7t2);
    }
    if (typeof(p7t3) == 'number') {
        clearTimeout(p7t3);
    }
    if (typeof(p7t4) == 'number') {
        clearTimeout(p7t4);
    }
    if (typeof(p6t5) == 'number') {
        clearTimeout(p6t5);
    }
    $('.page7 .arrow').hide()
    $('.page7 .title').hide()
    $('.page7 .title img').removeClass('slideInRight')
    $('.page7 .block1').hide()
    $('.page7 .block1').removeClass('fadeIn')
    $('.page7 .block2').hide()
    $('.page7 .block2').removeClass('fadeIn')
}
var showPage8 = function() {
    window.p8t1 = setTimeout(function() {
        $('.page8 .title').show()
        $('.page8 .title img').addClass('slideInRight')
        $('.page8 .block1').show()
        $('.page8 .block1').addClass('fadeIn')
    }, 1000)
    window.p8t2 = setTimeout(function() {
        $('.page8 .block2').show()
        $('.page8 .block2').addClass('fadeIn')
    }, 1500)
    window.p8t3 = setTimeout(function() {
        $('.page8 .block3').show()
        $('.page8 .block3').addClass('fadeIn')
    }, 2000)
    window.p8t4 = setTimeout(function() {
        $('.page8 .arrow').show()
    }, 2500)

}
var hidePage8 = function() {
    if (typeof(p8t1) == 'number') {
        clearTimeout(p8t1);
    }
    if (typeof(p8t2) == 'number') {
        clearTimeout(p8t2);
    }
    if (typeof(p8t3) == 'number') {
        clearTimeout(p8t3);
    }
    if (typeof(p8t4) == 'number') {
        clearTimeout(p8t4);
    }
    $('.page8 .title').hide()
    $('.page8 .title img').removeClass('slideInRight')
    $('.page8 .block1').hide()
    $('.page8 .block1').removeClass('fadeIn')
    $('.page8 .block2').hide()
    $('.page8 .block2').removeClass('fadeIn')
    $('.page8 .title').removeClass('slideInRight')
    $('.page8 .block3').hide()
    $('.page8 .block3').removeClass('fadeIn')
    $('.page8 .arrow').hide()
}
var showPage9 = function() {
    console.log('ssss')
    window.p9t1 = setTimeout(function() {
        $('.page9 .title').show()
        $('.page9 .title img').addClass('fadeIn')
    }, 500)
    window.p9t2 = setTimeout(function() {
        $('.page9 #imgSlider').show()
        $('.page9 #imgSlider').addClass('fadeIn')
        // 以实例化的不需要再实例
        if($('ul.sw-bullet').length==0){
            $('#imgSlider').swipeslider({
                autoPlay:false
            });
        }
        $('.page9 .subfix').fadeIn()
    }, 1000)
    window.p9t3 = setTimeout(function() {
        $('.page9 .arrow').show()
    }, 1500)
}
var hidePage9 = function() {
    if (typeof(p9t1) == 'number') {
        clearTimeout(p9t1);
    }
    if (typeof(p9t2) == 'number') {
        clearTimeout(p9t2);
    }
    if (typeof(p9t3) == 'number') {
        clearTimeout(p9t3);
    }
    $('.page9 .title').hide()
    $('.page9 .title img').removeClass('fadeIn')
    $('.page9 #imgSlider').hide()
    $('.page9 #imgSlider').removeClass('fadeIn')
    $('.page9 .subfix').hide()
    $('.page9 .arrow').hide()
}
var showPage10 = function() {
    window.p10t1 = setTimeout(function() {
        $('.page10 .title').show()
        $('.page10 .title img').addClass('slideInRight')
    }, 500)
    window.p10t2 = setTimeout(function() {
        $('.page10 .block1').show()
        $('.page10 .block1 img').addClass('fadeIn')
    }, 1000)
    window.p10t3 = setTimeout(function() {
        $('.page10 .block2').show()
        $('.page10 .block2 img').addClass('fadeIn')
    }, 1500)
    window.p10t4 = setTimeout(function() {
        $('.page10 .block3').show()
        $('.page10 .block3 img').addClass('fadeIn')
    }, 2000)
    window.p10t5 = setTimeout(function() {
        $('.page10 .block4').show()
        $('.page10 .block4 img').addClass('fadeIn')
    }, 2500)
    window.p10t6 = setTimeout(function() {
        $('.page10 .arrow').show()
    }, 2800)
}
var hidePage10 = function() {
    if (typeof(p10t1) == 'number') {
        clearTimeout(p10t1);
    }
    if (typeof(p10t2) == 'number') {
        clearTimeout(p10t2);
    }
    if (typeof(p10t3) == 'number') {
        clearTimeout(p10t3);
    }
    if (typeof(p10t4) == 'number') {
        clearTimeout(p10t4);
    }
    if (typeof(p10t5) == 'number') {
        clearTimeout(p10t5);
    }
    $('.page10 .title').hide()
    $('.page10 .title img').removeClass('slideInRight')
    $('.page10 .block1').hide()
    $('.page10 .block1 img').removeClass('fadeIn')
    $('.page10 .block2').hide()
    $('.page10 .block2 img').removeClass('fadeIn')
    $('.page10 .block3').hide()
    $('.page10 .block3 img').removeClass('fadeIn')
    $('.page10 .block4').hide()
    $('.page10 .block4 img').removeClass('fadeIn')
    $('.page10 .arrow').hide()
}
var showPage11 = function() {
    window.p11t1 = setTimeout(function() {

    }, 1000)

}

var hidePage11 = function() {
    if (typeof(p11t1) == 'number') {
        clearTimeout(p11t1);
    }
}
var showPage12 = function() {
    window.p12t1 = setTimeout(function() {

    }, 1000)

}
var hidePage12 = function() {
    if (typeof(p12t1) == 'number') {
        clearTimeout(p12t1);
    }
}