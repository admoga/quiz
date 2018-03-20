function flotante(tipo) {

    if (tipo == 1) {
        $('html, body').css('overflow-y','visible');
        $('html, body').css('overflow-x','hidden');
        $('#contenedor').show();
        $('#flotante').animate({
            marginTop: "-122px"
        });
    }
    if (tipo == 2) {
        $('html, body').css('overflow-y','hidden');

        $('#flotante').animate({
            marginTop: "-756px"
        });
        setTimeout(function () {
            $('#contenedor').hide();
            $('.pass_page').show();

        }, 500)
    }
    $('.contact').on("click", function () {
        $('.pass_page').hide();

    });

}