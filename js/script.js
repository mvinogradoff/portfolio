
$(function () {
  'use strict'

  // Load demo images from flickr:
  $.ajax({
    url: '/data.json',
    dataType: 'json',
  }).done(function (data) {
    var linksContainer = $('#links')
    // Add the demo images as links with thumbnails to the page:
    $.each(data, function (index, photo) {
      $('<a/>')
        .prop('class', 'photo')
        .append($('<img>').prop('src',  photo.img.replace(".jpg","_t.jpg")))
        .prop('href', photo.img)
        .prop('title', photo.descr)
        .attr('data-gallery', '')
        .append($('<div>').prop('class', 'descr').text(photo.descr))
        .appendTo(linksContainer)
        .on('mouseenter', function() {
          $( this ).children(".descr").css("bottom",'0');
        }).on('mouseleave', function(){
          $( this ).children(".descr").css("bottom", '-'+ $(this).children(".descr").innerHeight() +'px');
        });
    })
  })
})
