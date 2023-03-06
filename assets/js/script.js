// menu-rsponsive-togglebar
$(document).ready(function ()
{
    $('.menu-toggle').click(function ()
    {
        $('nav').addClass('active');
        $('body').addClass('body-overlay');
    })
    $('.menu-remove').click(function ()
    {
        $('nav').removeClass('active');
        $('body').removeClass('body-overlay');
    })
});
// product-quantity-count

var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

    var min = Number(input.getAttribute('min'));
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));

    function qtyminus(e)
    {
        var current = Number(input.value);
        var newval = (current - step);
        if (newval < min) {
            newval = min;
        } else if (newval > max) {
            newval = max;
        }
        input.value = Number(newval);
        e.preventDefault();
    }

    function qtyplus(e)
    {
        var current = Number(input.value);
        var newval = (current + step);
        if (newval > max) newval = max;
        input.value = Number(newval);
        e.preventDefault();
    }

    btnminus.addEventListener('click', qtyminus);
    btnplus.addEventListener('click', qtyplus);

} // End if test