

$( document ).ready(function() {
    console.log( "ready!" );


var open = function(gallery, start){

var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    history: false,
    index: start // start at first slide
};



// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, gallery, options);
gallery.init();
}

// $('img').each(function(index, value){
// $(value).on('click', function(e){
//     console.log('???')
//     var items = []
//     var test = $(e.target).siblings()
//     console.log(test)
//     $(e.target).siblings().each(function(index, value){
//         var obj = {};
//         obj.src = $(value).attr('src')
//         obj.w = 600;
//         obj.h = 600;
//         items.push(obj)
//     })
//     open(items)
// })
// })

$('.picture_gallery').each(function(index, value){
    var images = $(value).children()
    images.each(function(index, value){
        $(value).on('click', function(){
            var items = [];
            images.each(function(index, value){
                var obj = {};
                obj.src = $(value).attr('src')
                obj.w = 600;
                obj.h = 600;
                items.push(obj)
            })
            open(items, index)
        })

    })
})

});
