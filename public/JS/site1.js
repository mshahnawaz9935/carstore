console.log("JS file added");
var videos = [];
var video_data = [];
$.fn.initList = function () {
    $("#videoList > li > a").on("click", function (e) {
        e.preventDefault();
        // get the url href from the link
        var url = $(this).attr("href");
        //alert('change: ' + url);
        new_url = "https://www.youtube.com/embed/" + url + "?fs=1&autoplay=0&loop=0&html5=1";

        // get a reference to the iframe element on the page
        var iframe = $('#player');
        // change the src of the iframe to the new video url
        iframe.attr('src', new_url);
    })
}
    function writeContentToPage(id, content) {
        $("#" + id).html(content).initList();
    }
function genVideoList(data) {
    console.log('genVideoList');
    var video_array = data.videos;
    var html_string = "";

    for (var i = 0; i < video_array.length; i++) {
        var obj = video_array[i];
        url = obj;
        tmp = "<li><a href='" + url + "'>Video " + (i + 1) + "</a></li>";
        html_string += tmp;
    }
    console.log('genVideoList html: ' + html_string);
    writeContentToPage('videoList', html_string);
}
$("#videoList > li > a").on("click", function (e) {
    e.preventDefault();
    // get the url href from the link
    var url = $(this).attr("href");
    // get a reference to the iframe element on the page
    var iframe = $('#player');
    // change the src of the iframe to the new video url
    iframe.attr('src', url);
});
$(document).ready(function () {
    console.log('Custom JS file added 2');
    $.ajax({
        url: 'videos.js',
        dataType: "json",
        success: function (data) {
            console.log('Load complete');
            genVideoList(data);
        },
        error: function (e) { console.log('Error - ' + e.responseText); }
    });
});
