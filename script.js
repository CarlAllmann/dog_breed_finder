 



$(document).ready(function() {
    
    //initialiaze the screens
    $(".welcome").show(); 
    $(".search").hide();
    $(".results").hide();


    //event handlers
   
    $("#start").click(function() {
        $(".welcome").hide();
        $(".search").show();
    })
});
