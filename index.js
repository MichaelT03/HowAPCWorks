let scrollBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of comment
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        scrollBtn.style.display = "block";
    }
    else
    {
        scrollBtn.style.display = "none";
    }
}

scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});