var template= '<div class="col s12 m12">'+
				   '<div class="card horizontal">'+
					   '<div class="card-image">'+
					   	'<img src="http://lorempixel.com/100/190/nature/6">'+
				       '</div>'+
					    '<div class="card-stacked">'+
						    '<div class="card-content">'+
							    '<p>Nombre : <span id="nombre">{{nombre}}</span></p>'+
							    '<p>Edad : <span id="edad">{{edad}}</span></p>'+
							    '<p>Nacionalidad : <span id="nacionalidad">{{nacionalidad}}</span></p>'+
						    '</div>'+
						    '<div class="card-action">'+
						    	'<a href="#">This is a link</a>'+
						    '</div>'+
					    '</div>'+
				    '</div>'+
			   '</div>';

$(document).ready(function(){
	$.get("http://localhost:8000/info.json", function(response){
		var templateEstud= "";
		$.each(response, function(i, estudiante){
			templateEstud += template
							.replace("{{nombre}}", estudiante.nombre)
							.replace("{{edad}}", estudiante.edad)
							.replace("{{nacionalidad}}", estudiante.nacionalidad);
		});
		$("#contenedor").html(templateEstud);
	});

  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

});