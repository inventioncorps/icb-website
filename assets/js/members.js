$(document).ready(function () {
    $("#Iris").hover(function(){
        // $("g").not("#Iris").css("filter", "grayscale(100%)");
        // $("g").not("#Iris").css("-webkit-filter", "grayscale(100%)");
        $("svg").find("*").not("#Iris").css("opacity", "10%");
        $("#iris-label").css("font-weight", "bold");
      },
      function(){
        $("svg").find("*").not("#Iris").css("opacity", "100%");
        // $("svg").css("opacity", "100%");
        $("#iris-label").css("font-weight", "400");
      });
    $("#Tanthai").hover(function(){
    alert("Tanthai");
    },
    function(){
    
    });
    $("#Cool").hover(function(){
      alert("Cool");
      },
      function(){
      
      });
});