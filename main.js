$(function () {
    $("nav .mini-btn button").click(function () {
      $(".mini-menu").slideToggle();  
    });
    $(".mini-menu").click(function () {
        $(".mini-menu").slideToggle(100);
    });
var n = -1;
    $("body").ready(function () {
        window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    
    
    if (document.body.scrollTop >= 130 || document.documentElement.scrollTop > 130) {
        $(".line").css({"right":"0%"});
        $(".ltop").fadeIn();
        
    }
    
        
    
    else{
        $(".line").css({"right":"100%"});
        $(".ltop").fadeOut();
    }
    
    
}

var scn = -1;
function slider() {
    
    var sc = ["images/10c37d1ba888511c19b419ca24b00973.jpg","images/DSC_0014-e1598544129191.jpg","images/2022-01-08.jpg"];
    if(scn != 2){
        scn++;
        $(".screen img").attr("src",sc[scn]);
    }
    else{
        scn = 0;
        $(".screen img").attr("src",sc[scn]);
    }
}
setInterval(slider,1500);

function ad() {
    

var gle = ["L","a","w","g","l","e ","U","s","h","e","r","i","n","g ","A","g","e","n","c","y","."];
$(".type").fadeToggle();
 
setTimeout(() => {
    if (n <= 19) {
        n++;
        $(".gle").append("<code>"+gle[n]+"</code>");
    }
}, 1000);

    }
    setInterval(ad, 100);
    });
    $(".cont").click(function () {
       $(".tutorial-drop").fadeIn(); 
    });
    $(".rela h2").click(function () {
        $(".tutorial-drop").fadeOut(); 
     });
     $(".more-b").click(function () {
        var more = $(".more");
       $(this).children().slideToggle(); 
       
       
    });
    $(".main").click(function () {
       $(".mini-menu").slideUp(100); 
    });
});