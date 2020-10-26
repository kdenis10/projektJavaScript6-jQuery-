// Przy scrolowaniu wyjeżdza menu i chowa się
// jeżeli jesteśmy na początku:
$(document).on("scroll",function(){
    $('div.info').text('Zeskrolowałes aż : ' + $(window).scrollTop().toFixed() + "px" );
    //toFixed() - zaokrągla wartość
    if($(window).scrollTop() > 100){
        $('div.info').addClass("active")
    } else if($(window).scrollTop() == 0){
        $('div.info').removeClass("active")
    }
})



