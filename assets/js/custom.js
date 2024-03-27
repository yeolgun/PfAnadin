/*Banner Change Image */

$("div.bWrap1Back, div.bWrap2Back, div.bWrap3Back, div.bWrap4Back").hide();

$("div.bWrap1").hover(function () {
    $("div.bWrap1Front, p.brandPackTxt1, img.brandPackImg1").hide();
    $("div.bWrap1Back").show();  
    }, function () {
        $("div.bWrap1Back").hide();
        $("div.bWrap1Front, p.brandPackTxt1, img.brandPackImg1").show();
    }
);

$("div.bWrap2").hover(function () {
    $("div.bWrap2Front, p.brandPackTxt2, img.brandPackImg2").hide();
    $("div.bWrap2Back").show();  
    }, function () {
        $("div.bWrap2Back").hide();
        $("div.bWrap2Front, p.brandPackTxt2, img.brandPackImg2").show();
    }
);

$("div.bWrap3").hover(function () {
    $("div.bWrap3Front, p.brandPackTxt3, img.brandPackImg3").hide();
    $("div.bWrap3Back").show();  
    }, function () {
        $("div.bWrap3Back").hide();
        $("div.bWrap3Front, p.brandPackTxt3, img.brandPackImg3").show();
    }
);

$("div.bWrap4").hover(function () {
    $("div.bWrap4Front, p.brandPackTxt4, img.brandPackImg4").hide();
    $("div.bWrap4Back").show();  
    }, function () {
        $("div.bWrap4Back").hide();
        $("div.bWrap4Front, p.brandPackTxt4, img.brandPackImg4").show();
    }
);

