var doc;
doc = $(document);
doc.ready(StartLogin);



function StartLogin() {
    randombackground();

}

function randombackground() {
   
    var ran = Math.floor(Math.random() * 9);
    var imgBg = "dist/img/bg/"+ ran + ".jpg?1";

    $('body').css({ 'background-image': 'url(' + imgBg + ')' });

    $('body').css({ 'height': '100%' });
    $('body').css({ 'background-position':'center' });
    $('body').css({ 'background-repeat':'no-repeat'});
    $('body').css({ 'background-size':' cover'});

}