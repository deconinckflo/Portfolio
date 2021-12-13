(function($) {
    $.fn.timeline = function() {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function() {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function(i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);

$("#timeline-1").timeline();

//herder fixed

window.onscroll=function(){
    const docScrollTop = document.documentElement.scrollTop;
    if(window.innerWidth>991){
        if (docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

const navbar = document.querySelector(".navbar");
    a = navbar.querySelectorAll("a");

    a.forEach(function (element) {
        element.addEventListener("click",function () {
            for (let i=0; i<a.length; i++){
                a[i].classList.remove("active");
            }
            this.classList.add("active")
            document.querySelector(".navbar").classList.toggle("show");
        })
    })

// ham-burger

const hamBurger = document.querySelector(".ham-burger");

    hamBurger.addEventListener("click",function () {
        document.querySelector(".navbar").classList.toggle("show");
    })