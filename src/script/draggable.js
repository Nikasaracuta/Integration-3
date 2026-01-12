$(document).ready(function () {
        $('.image_default').addClass('on-active');

    $("[class*='draggable_']").draggable({
        // snap: true,
        scroll: true,
    revert: true
            });

    $(".drag-container").droppable({
        over: function (event, ui) {
        $('.drop-area').addClass("on-hover");
                },
    out: function (event, ui) {
        $('.drop-area').removeClass("on-hover");
                },
    drop: function (event, ui) {
        $('.drop-area').removeClass("on-hover");
    $("[class*='image_']").removeClass('on-active');

                    const id = ui.draggable.attr('class').split(/\s+/).filter(className => { return className.startsWith('draggable'); })[0].split('_')[1];
    $('.image_' + id).addClass('on-active');
                }
            });
        });


