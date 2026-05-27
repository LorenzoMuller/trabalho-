const formulario =
document.getElementById(
    "formulario"
);

formulario.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        alert(
            "Aula agendada com sucesso!"
        );

        formulario.reset();

    }
);