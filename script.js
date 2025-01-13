document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");

    
    audio.play().catch(error => {
        console.log("يحتاج المستخدم إلى التفاعل مع الصفحة أولاً.");
    });

    
    document.body.addEventListener("click", function() {
        audio.play();
    }, { once: true }); 
});