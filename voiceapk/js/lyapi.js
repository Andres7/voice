// Detectar dispocitivo
var Ancho = screen.width,
	Alto = screen.height;
// dar dimenciones al dispocitivo
var Enc = Alto * 0.2,
	List = Alto * 0.3,
	Cont = Alto * 0.2,
	Opci = Alto * 0.3;



$(function () {
	//cargar dimenciones de la aplicacion
	$(".widthpantalla").css({"width": (Ancho - 2) + "px"});
	/*//pantalla
	$("#pantalla").css({"height": Alto + "px"})
	//encabezado
	$("#header").css({"height": Enc + "px"})
	//menu de lista
	$("#menulistas").css({"height": List + "px"})
	//control
	$("#menucontrol").css({"height": Cont + "px"})
	//menu de opciones
	$("#menuopcion").css({"height": Opci + "px"})*/
});