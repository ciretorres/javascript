// formulario que envía datos cuando hace click en enviar
// o submit en el modal
var formulario = document.getElementById('formulario');
var varJS;

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    var datos = new FormData(formulario);

    varJS = $('#startdate').val();
    document.cookie = 'variable='+varJS;

    console.log(varJS);
    console.log(typeof(varJS));
    console.log(datos.get('name'));
    console.log(datos.get('email'));
    console.log(datos.get('phone'));
    console.log(datos.get('country'));

    // tiene que existir este archivo
    fetch('post.php',{
        method: 'POST',
        body: datos
    })
})
