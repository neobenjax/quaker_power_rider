<div class="bloque-inicial-formulario">
	<div class="contenido-centrado">
		
		<h1 class="titulo-landing">
			Un aceite especial para cada tipo de <span class="verde-quaker">motocicleta</span>
		</h1>

		<div class="area-power-rider">
			<img src="assets/img/logo_power_rider.png" alt="Power Rider" class="logo-power-rider-secc">
			<p class="descriptivo-power">
				Las necesidades actuales de las motos cada vez exigen más, por lo que requieren un aceite que les ofrezca <strong>el mejor desempeño en cualquier circunstancia</strong>. 
			</p>
			<img src="assets/img/botellas_presentaciones.png" alt="Power Rider Presentaciones" class="botellas-presentaciones">
		</div>

		<div class="area-formulario">
			<strong class="titulo-formulario">
				RECIBE NUESTRO BOLETÍN
			</strong>
			<p class="instrucciones-form">
				Si quieres recibir más información acerca de nuestros productos, déjanos tus datos.
			</p>
			<form action="<?php echo $baseURL; ?>index" class="formulario-boletin" method="post" id="formBoletin">
				<p class="obligatorios">
					Todos los campos son obligatorios
				</p>
				<div class="campo-formulario">
					<input type="text" class="input-full no-bg blanco" id="nombre" name="nombre" placeholder="Nombre">
				</div>
				<div class="campo-formulario">
					<input type="text" class="input-full no-bg blanco" id="apellidos" name="apellidos" placeholder="Apellidos">
				</div>
				<div class="campo-formulario">
					<input type="email" class="input-full no-bg blanco" id="email" name="email" placeholder="E-mail">
				</div>
				<div class="campo-formulario">
					<textarea name="mensaje" class="textArea-full no-bg blanco" id="mensaje" placeholder="Mensaje"></textarea>
				</div>
				<div class="campo-formulario">
					<input type="hidden" name="action" value="send-form">
					<input type="submit" class="btn-submit-form bg-verde-quaker-2" value="ENVIAR">
				</div>
			</form>
		</div>

	</div>
</div>

<div class="bloque-secundario">
	<div class="contenido-centrado subBloque-video">
		
		<h2 class="subtitulo-landing">
			¿Por qué usar <strong>Power Rider<sup>MR</sup> 4</strong>?
		</h2>

		<div class="video-youtube">
			<iframe width="853" height="480" 
					src="https://www.youtube-nocookie.com/embed/z9Ul9ccDOqE?rel=0&amp;autoplay=0&amp;controls=0&amp;showinfo=0"
					frameborder="0" allowfullscreen></iframe>
		</div>

	</div>
	<div class="contenido-centrado subBloque-carrusel">
		
		<div id="carrusel" class="carrusel-motos">

			<?php 
	        foreach ($modos as $modo) {
	        ?>
			
				<div class="moto-recomendada ps-<?php echo $modo['clave_modo'];?>" data-info="<?php echo $modo['data_info'];?>">
					<h2 class="subtitulo-landing">
						<?php echo $modo['titulo_modo'];?>
					</h2>
					<div class="interior-ficha">
						
						<div class="caracteristicas">
							<p class="pleca-recomendado">
								<img src="assets/img/<?php echo $modo['icono'];?>" alt="m_deport" class="icono-moto">
								<span class="texto-recomendado">
									<?php echo $modo['texto_recomendado'];?>
								</span>
							</p>
							<p class="certificaciones">
								<?php echo $modo['texto_certificaciones'];?>
							</p>
							<?php if( count($modo['caracteristicas']) > 0 ){?>
								<ul class="caracteristicas-lista">
									<?php foreach($modo['caracteristicas'] as $caracteristica) {?>
										<li><span><?php echo $caracteristica;?></span></li>
									<?php } ?>
								</ul>
							<?php } ?>
						</div>
						<div class="moto-aceite">
							<img src="assets/img/<?php echo $modo['imagen_modo'];?>" alt="<?php echo $modo['clave_modo'];?>" class="foto-moto-aceite">
						</div>

					</div>


				</div>
			<?php } ?>

		</div>
	</div>

	<div class="contenido-centrado subBloque-caracteristicas">
		<div class="foto-motor">
			<img src="assets/img/motor.png" alt="Motor">
		</div>
		<div class="caracteristicas-power">

			<div class="interior" id="interiorCaracteristicas"></div>

		</div>
	</div>
</div>