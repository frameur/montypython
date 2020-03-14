$(document).ready(function(){

    $(".nav-item").click(function(){
        var value = $(this).attr('data-nav-link');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.nav-link').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".nav-link").not('.'+value).hide('3000');
            $('.nav-link').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".nav-item").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});