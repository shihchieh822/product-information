
$(document).ready(function () {

    //倒數計時
var timer = 60;
    var interval = setInterval(function () {
        timer--;
        $('.timer span').text(timer);
        if (timer === 0) {
             $('.sold-out').css('display','block');
             $('.buy').css('display','none');
             $('.pre-sale').hide();
             $('#apple').modal('hide');
             $('#sale-pre').modal('hide');
             clearInterval(interval);
        }
    },1000);

    $('.buy').on('click', function () {
        $('.quantity').val('0');
    });

    $('.pre-sale').on('click', function () {
        $('.pre-quantity').val('0');
    });
   
    ////商品數量增加減少
    $('#del').on('click', function () {
        var num = parseInt($('.quantity').val()) - 1;
        if (num < 1) {
            $('.quantity').val(0);
        } else {
            $('.quantity').val(num);
        }
    });

    $('#add').on('click', function () {
        var num = parseInt($('.quantity').val()) + 1;
        if (num <= 10) {
            $('.quantity').val(num);
        } 
    });
  //預售商品
$('#pre-del').on('click', function () {
        var prenum = parseInt($('.pre-quantity').val()) - 1;
        if (prenum < 1) {
            $('.pre-quantity').val(0);
        } else {
            $('.pre-quantity').val(prenum);
        }
    });

    $('#pre-add').on('click', function () {
        var prenum = parseInt($('.pre-quantity').val()) +1;
        if (prenum <= 10) {
            $('.pre-quantity').val(prenum);
        }
    });

    //確認購入商品數量
    $('.buy-check').on('click', function () {
        var qty = $('.quantity').val();
        var mod = $('.remainder').val();
         var total = (mod)-(qty);
       $('.remainder').val(total);
       $('#apple').modal('hide');
       if (total <= 0) {
           $('.buy').hide();
          $('.pre-sale').css('display','block');
          $('.pre-order').addClass('d-inline-block');
            $('.remainder').val('0');
       } else {
           $('.remainder').val(total);
           $('.pre-sale').hide();
           $('.buy').css('display', 'block');
       }
         
    });
   
    //確認預購商品數量
    $('.pre-check').on('click', function () {
        var preqty = parseInt($('.pre-quantity').val());
        var premod = parseInt($('.pre-qty').val());
        var mod = parseInt($('.remainder').val());
        var buytotal = (preqty) + (mod);
        var pretotal = (premod) - (preqty);
        $('.pre-qty').val(pretotal);
        $('.remainder').val(buytotal);
        $('#sale-pre').modal('hide');
        if (mod => 10) {
        $('.pre-order').removeClass('d-inline-block').addClass('d-none');
        $('.pre-sale').hide();
        $('.buy').css('display','block');
        } 

    });
    
});