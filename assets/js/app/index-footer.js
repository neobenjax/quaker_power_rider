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

    $('#formBoletin').submit(function(event){
        event.preventDefault();
        var sender = $(this);

        if($(this).valid()){
            $.ajax({
                url: url+'includes/ajax.php',
                data: sender.serializeArray(),
                method: 'post',
                success: function(r){
                    $("#nombre").val("");
                    $("#apellidos").val("");
                    $("#email").val("");
                    $("#mensaje").val("");
                    $("#formBoletin")[0].reset();

                    utiles.alerta({
                        titulo:'',
                        mensaje:'Gracias por dejarnos ser Tu Copiloto. <br /> Pronto recibirás nuestro boletín.',
                        btnCerrar:true,
                        close:function(){return false;}
                    });
                },
                error: function(){
                    alert("Ha ocurrido un error");
                }
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