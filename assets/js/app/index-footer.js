$(document).ready(function(){

    var controller,
        inicial,
        video,
        fondo,
        carrusel,
        carruselSelector;

    carruselSelector = $('#carrusel');


    controller = new ScrollMagic.Controller();

    inicial = new ScrollMagic.Scene({triggerElement: "header"})
                        // trigger animation by adding a css class
                        .setClassToggle(".bloque-inicial-formulario", "show")
                        .addTo(controller);

    video = new ScrollMagic.Scene({triggerElement: ".subBloque-video"})
                        // trigger animation by adding a css class
                        .setClassToggle(".subBloque-video", "show")
                        .addTo(controller);

    fondo = new ScrollMagic.Scene({triggerElement: ".subBloque-carrusel"})
                        // trigger animation by adding a css class
                        .setClassToggle(".bloque-secundario", "stop-background")
                        .addTo(controller);

    carrusel = new ScrollMagic.Scene({triggerElement: ".subBloque-carrusel"})
                        // trigger animation by adding a css class
                        .setClassToggle(".subBloque-carrusel", "show")
                        .addTo(controller);
                        
    /*var caracteristicas = new ScrollMagic.Scene({triggerElement: ".subBloque-caracteristicas"})
                        // trigger animation by adding a css class
                        .setClassToggle(".subBloque-caracteristicas", "show")
                        .addTo(controller);*/




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
                    dataLayer.push({'event': 'powerider-envio-exitoso'});

                    utiles.alerta({
                        titulo:'',
                        mensaje:'Gracias por dejarnos ser Tu Copiloto. <br /> Pronto recibirás nuestro boletín.',
                        btnCerrar:true,
                        close:function(){return false;}
                    });
                },
                error: function(){
                    dataLayer.push({'event': 'powerider-envio-error'});
                    alert("Ha ocurrido un error");
                }
            });
        }else{
            dataLayer.push({'event': 'powerider-envio-error'});
        }

        return false;
    });

    
    carruselSelector.on('init', function(slick){
        carruselSelector.addClass('loaded');
        cambiarCaracteristicas();
    });

    carruselSelector.on('afterChange', function(event, slick, currentSlide){
      cambiarCaracteristicas();
    });

    carruselSelector.slick({
                  dots: false,
                  arrows:true,
                  infinite: true,
                  speed: 1000,
                  /*autoplay: true,*/
                  autoplaySpeed: 3000,
                  pauseOnHover:false
                });
});

function cambiarCaracteristicas(){
    var info_id = $('.moto-recomendada.slick-active').data('info');
    $( "#interiorCaracteristicas" ).load( confSitio.BASE_URL+"data-demo/info_caracteristicas.html #info_"+info_id, 
      function( response, status, xhr ) {
        console.log(response);
        if ( status == "error" ) {
            var msg = "Sorry but there was an error: ";
            $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
        }
    });
}