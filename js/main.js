$(document).ready(function() {

    $('.numbers .one').click(function(){
        //$('.result span').remove();
        $('.current').removeClass('first');

        var n = $(this).text();
        var r = $('.result').text();
        r = r + n;
        $('.result').text(r);

        var s = $('.show').html();
        s = s + n;
        $('.show').html(s);

        if ($('.current').hasClass('first')){
            $('.current').text(n);
        } else {
            var current = $('.current').text();
            current = current + n;
            $('.current').text(current);
        }

    });

    $('.numbers .sin').click(function(){
        $('.current').addClass('first');

        var n = $(this).attr('data');
        var sn = $(this).text();
        var r = $('.result').text();
        var s = $('.show').html();
        r = r + n;
        s = s + '<div class="arh">'+ sn +'</div>';
        $('.result').text(r);
        $('.show').html(s);
        $('.current').html(sn);
    });

    $('.numbers .res').click(function(){
        $('.current').addClass('first');

        var r = $('.result').text();
        var s = $('.show').html();
        var o = math.evaluate(r);
        r = r + ' = ' + o;
        s = s + '<div class="arh">=</div>' + o;
        $('.result').text(r);
        $('.show').html(s);
        $('.current').text(o);
    });
    $('.numbers .clear').click(function(){
        $('.current').addClass('first');

        $('.result').text('0');
        $('.current').text('0');
        $('.show').text('');
    });
});
