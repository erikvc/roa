function pegaBanners(){
    $.ajax({
        url: 'http://www.d-zyne.com/APPS/ROA/banners.php',
        type: 'post',
        dataType: 'json',
        crossDomain: true,
        success: function(dados){
            $("#recebeBanners").empty();
            for(var i=0;dados.length>i;i++){
                $("#recebeBanners").append(dados[i].image);
            }
        }
    })
}

function pegaRockNews(){
    $.ajax({
       type : "POST",
       dataType:"json",
       crossDomain: true,
       url:"http://www.d-zyne.com/APPS/ROA/rockNews.php",
       success:function(data){
				$("#iframeVideo").attr('src', 'http://player.vimeo.com/video/'+data[0].videoID+'?title=1&amp;byline=0&amp;portrait=0&amp;color=FFFFFF&amp;autoplay=0&amp;loop=0&amp;wmode=transparent');
       },
       error      : function() {
				//$("#u60895-2").append(console.error("error"));
				alert("Not Working");
       }
    });
}