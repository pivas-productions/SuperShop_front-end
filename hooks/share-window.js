/**
* Создание нового окна браузера для репоста в соц.сеть
*
* @param string social - социальная сеть, в которую будет сделан репост
* @param string url_share - url страницы, которая будет опубликована в соц.сети
*/
export default function share(social, url_share, media){
    var url_soc = false;
    switch (social) {
        case "vk":
            url_soc = "https://vk.com/share.php?url="+url_share;
            break;
        case "ok":
            url_soc = "https://connect.ok.ru/offer?url="+url_share;
            break;
        case "wa":
            url_soc = "https://api.whatsapp.com/send/?text="+url_share;
            break;
        case "tg":
            url_soc = "https://t.me/share/url?url="+url_share;
            break;
        case "pt":
            url_soc = `http://pinterest.com/pin/create/button/?url=${url_share}&media=${media}`;
            break;
        // TODO: case vb ? it`s work? 
        case 'vb':
            url_soc = "https://viber.com/forward?text="+url_share;
            break;
    }
    
    if(url_soc){
        var width = 800, height = 500;
        var left = (window.screen.width - width) / 2;
        var top = (window.screen.height - height) / 2;
        const social_window = window.open(url_soc, "share_window", "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left);
        social_window.focus();
    }
}