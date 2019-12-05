//strongMan 
(function ($) {

    var self = $.strongMan = new function () { };

    $.extend(self, {

        strongManBackgrounds: [
            'https://purepng.com/public/uploads/large/purepng.com-muscle-manmusclemuscle-manbody-builderssix-packmuscle-boys-1421526926651yew7h.png'
        ],

        strongManImgs: [
            "https://i.imgur.com/0d5vO3L.jpg",
            "https://i.imgur.com/diE3UwY.jpg",
            "https://i.imgur.com/Tr0LZbm.png",
            "https://i.imgur.com/5zlagQL.jpg",
            "https://i.imgur.com/ZG9R3aG.jpg",
            "https://i.imgur.com/7Q4mso7.jpg",
            "https://i.imgur.com/AhYiKpQ.jpg",
            "https://i.imgur.com/f7ryV46.jpg",
            "https://i.imgur.com/EnZFecQ.jpg",
            "https://i.imgur.com/V4IfPNY.jpg",
            "https://i.imgur.com/PcCogLJ.jpg",
            "https://i.imgur.com/uwuqjQd.jpg",
            "https://i.imgur.com/dtLTD1R.jpg",
            "https://i.imgur.com/498ppI7.jpg",
            "https://i.imgur.com/g297tCM.jpg",
            "https://i.imgur.com/VppjOe1.jpg",
            "https://i.imgur.com/pSqRNL8.jpg",
            "https://i.imgur.com/4cRzTmC.jpg",
            "https://i.imgur.com/HW8uN6j.jpg",
            "https://i.imgur.com/VlajAKj.jpg",
            "https://i.imgur.com/oEZRyU4.jpg",
            "https://i.imgur.com/IfXFQeu.jpg",
            "https://i.imgur.com/FGejQaE.jpg",
            "https://i.imgur.com/pLFvOOh.png",
            "https://i.imgur.com/8141SMv.jpg",
            "https://i.imgur.com/CWkhEuX.jpg",
            "https://i.imgur.com/56cWhsg.jpg",
            "https://i.imgur.com/Y3gldLd.jpg",
            "https://i.imgur.com/9VbZPBf.jpg",
            "https://i.imgur.com/4exRDE1.jpg",
            "https://i.imgur.com/DJqd62Y.jpg",
            "https://i.imgur.com/TLzX7C2.jpg",
            "https://i.imgur.com/cKxdV63.jpg",
            "https://i.imgur.com/FYzxJKR.jpg",
            "https://i.imgur.com/86vzPZL.jpg",
            "https://i.imgur.com/Kmz7JYv.jpg",
            "https://i.imgur.com/Mnmy7rd.jpg",
            "https://i.imgur.com/hz9Fgwi.png",

        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.strongManImgs, 3000);
        self.handleLogo(self.strongManBackgrounds, 3000);
    });
})(jQuery);
