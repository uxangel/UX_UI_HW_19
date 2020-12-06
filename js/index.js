console.log("Your index.js file is loaded correctly!");

$("#downloadButton").click(function() {
    console.log("Hey! I was clicked!");  
});

$(".aboutNav").click(function() {
    console.log("Hey! AboutNav was clicked!");  
    var section = "#aboutSection";
    $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 800, function(){});
});

$(".skillsNav").click(function() {
    var section = "#mySkillsSection";
    $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 800, function(){});
});

$(".workNav").click(function() {
    var section = "#myWorkSection";
    $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 800, function(){});
});



