$(function (){
    isNavbarHidden = true;
    $('#mobile_icon .menu_icon').click(function (){
        if(isNavbarHidden){
            $('body > header .nav_three .nav_bar').fadeIn("slow");
            isNavbarHidden = false;
        }
        else{
            $('body > header .nav_three .nav_bar').fadeOut("slow");
            isNavbarHidden = true;
        }
    });
    
    isSearchBoxHidden = true;
    $('#mobile_icon .search_box_icon').click(function (){
        if(isSearchBoxHidden){
            $('body > header .nav_two .search_box').fadeIn("slow");
            isSearchBoxHidden = false;
        }
        else{
            $('body > header .nav_two .search_box').fadeOut("slow");
            isSearchBoxHidden = true;
        }
    });
});
