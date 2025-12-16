import Swal from 'sweetalert2';

const handleNotificacion = (objetoMensaje, callback) => {
    Swal.fire({
        title: objetoMensaje.textoPrincipal,
        text: objetoMensaje.descripcion,
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar todo!"
            }).then((result) => {
        if (result.isConfirmed) {
            callback();
          Swal.fire({
            title: objetoMensaje.textoSecundario,
            text: objetoMensaje.descripcionSecundaria,
            icon: "success"
          });
  }
});
}
export default handleNotificacion

