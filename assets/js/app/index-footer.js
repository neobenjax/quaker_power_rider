$(document).ready(function(){

    $("#formBoletin").validate({
        rules: {
            nombre: {
                required: true
            },
            apellidos: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensaje:{
                required:true
            }
        },
        messages: {
            nombre:{
                required: "Debe introducir su nombre"
            },
            apellidos:{
                required: "Debe introducir su apellido"
            },
            email:{
                required: "Debe introducir el email",
                email: 'Debe ingresar un correo electrónico válido',
            },
            mensaje:{
                required: "Es necesario que escriba un mensaje"
            }
        }/*,
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        }*/
    });

    $('#formBoletin').submit(function(){
        if($(this).valid()){
            utiles.alerta({
                titulo:'',
                mensaje:'GRACIAS POR SUSCRIBIRTE <br /> A NUESTRO BOLETÍN',
                btnCerrar:true,
                close:function(){location.reload();}
            });
        }
        return false;
    });

    $('#carrusel').on('init', function(slick){
        $('#carrusel').addClass('loaded');
    });

    $('#carrusel').slick({
                  dots: false,
                  arrows:true,
                  infinite: true,
                  speed: 1000,
                  /*autoplay: true,*/
                  autoplaySpeed: 3000,
                  pauseOnHover:false
                });
});