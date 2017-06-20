$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    var inicial = new ScrollMagic.Scene({triggerElement: "header"})
                        // trigger animation by adding a css class
                        .setClassToggle(".bloque-inicial-formulario", "show")
                        .addTo(controller);

    var video = new ScrollMagic.Scene({triggerElement: ".subBloque-video"})
                        // trigger animation by adding a css class
                        .setClassToggle(".subBloque-video", "show")
                        .addTo(controller);

    var fondo = new ScrollMagic.Scene({triggerElement: ".subBloque-carrusel"})
                        // trigger animation by adding a css class
                        .setClassToggle(".bloque-secundario", "stop-background")
                        .addTo(controller);

    var carrusel = new ScrollMagic.Scene({triggerElement: ".subBloque-carrusel"})
                        // trigger animation by adding a css class
                        .setClassToggle(".subBloque-carrusel", "show")
                        .addTo(controller);
                        
    var caracteristicas = new ScrollMagic.Scene({triggerElement: ".subBloque-caracteristicas"})
                        // trigger animation by adding a css class
                        .setClassToggle(".subBloque-caracteristicas", "show")
                        .addTo(controller);




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
        }
    });

    $('#formBoletin').submit(function(){
        if($(this).valid()){
            utiles.alerta({
                titulo:'',
                mensaje:'GRACIAS POR SUSCRIBIRTE <br /> A NUESTRO BOLETÍN',
                btnCerrar:true,
                close:function(){location.reload();}
            });

            return true;
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