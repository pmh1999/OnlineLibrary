$(document).ready(() => {
    $('.add-to-cart').on('click', addToCart);
});

function addToCart() {
    var id = $(this).data('id');
    var quantity = $('#sst')? $('#sst').val() : 1;
    $.ajax({
        url: "/cart",
        type: 'POST',
        data: { id, quantity },
        success: function (result) {
            $('#cart-badge').html(result.totalQuantity);
        }
    })
}

function updateCart(id,quantity){
    if(quatity == 0)
    {
        removeCartItem(id);
    }else{
        updateCartItem(id,quantity);

    }
}

function removeCartItem(id){
    $.ajax({
        url: "/cart",
        type: 'DELETE',
        data: { id },
        success: function (result) {
            $('#cart-badge').html(result.totalQuantity);
            $(`#item${id}`).remove();

        }
    });
}

function updateCartItem(id,quatity){
    $.ajax({
        url: "/cart",
        type: 'PUT',
        data: { id,quatity },
        success: function (result) {
            $('#cart-badge').html(result.totalQuantity);

        }
    });
}
