$(".recommendation-pics img").click(function(){
    $(".recommendation-pics img").removeClass("active");
    $(this).addClass("active");

    $(".recommendation-text").removeClass("active");
    console.log($(this).attr("alt"));
    $("#"+$(this).attr("alt")).addClass("active");

});