document.getElementById("btnEnviarCorreosSinMultihilos").addEventListener('click', async () => {
    let tiempoTranscurrido = 0;

    Swal.fire({
        title: 'Enviando correos...',
        text: "Espere por favor",
        timerProgressBar: true,
        backdrop: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    const intervalo = setInterval(() => {
        tiempoTranscurrido++;
        document.getElementById("contador").innerText = `${tiempoTranscurrido} segundo(s)`;
    }, 1000);

    const data = await fetch('http://localhost:8082/enviar-sin-multihilos', {
        method: 'POST'
    });

    const mensaje = await data.json();

    clearInterval(intervalo);

    Swal.fire({
        title: 'Acción realizada correctamente',
        text: mensaje,
        icon: 'success'
    });

    document.getElementById("contador").innerText = `${tiempoTranscurrido} segundo(s)`;
});

document.getElementById("btnEnviarConMultihilos").addEventListener('click', async () => {
    let tiempoTranscurrido = 0;

    Swal.fire({
        title: 'Enviando correos...',
        text: "Espere por favor",
        timerProgressBar: true,
        backdrop: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    const intervalo = setInterval(() => {
        tiempoTranscurrido++;
        document.getElementById("contador").innerText = `${tiempoTranscurrido} segundo(s)`;
    }, 1000);

    const data = await fetch('http://localhost:8082/enviar-con-multihilos', {
        method: 'POST'
    });

    const mensaje = await data.json();

    clearInterval(intervalo);

    Swal.fire({
        title: 'Acción realizada correctamente',
        text: mensaje,
        icon: 'success'
    });

    document.getElementById("contador").innerText = `${tiempoTranscurrido} segundo(s)`;
});