$(document).ready(function () {
    // $("#Iris").hover(function(){
    //     // $("g").not("#Iris").css("filter", "grayscale(100%)");
    //     // $("g").not("#Iris").css("-webkit-filter", "grayscale(100%)");
    //     $("svg").find("*").not("#Iris").css("opacity", "10%");
    //     $("#iris-label").css("font-weight", "bold");
    //   },
    //   function(){
    //     $("svg").find("*").not("#Iris").css("opacity", "100%");
    //     // $("svg").css("opacity", "100%");
    //     $("#iris-label").css("font-weight", "400");
    //   });
    $("#Anika_8").hover(function(){
      alert("Anika");
    },
    function(){
    
    });

    $("#Zeyad_42").hover(function(){
      alert("Z");
    },
    function(){
    
    });

    $("#Alan_24").hover(function(){
      // alert("Allan");
      $(".artpiece.colored").addClass("clip");

    },
    function(){
      $(".artpiece.colored").removeClass("clip");
    });

    $("#Jeffrey_20").hover(function(){
      alert("Jeffrey");
    },
    function(){
    
    });
});