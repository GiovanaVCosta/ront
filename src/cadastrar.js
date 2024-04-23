window.onload = () => {

    const button = document.getElementById('criarConta')

    button.addEventListener('click', () => {

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const comfirmar = document.getElementById('ccomfirmar').value;

        if (nome == '' || email == '' || senha == '' || comfirmar == '' || telefone == '') {
            alert(' Preencha os campos obrigatórios')
        } else {
            const user = {
                nome,
                email,
                senha,
            }


            const url = 'http://localhost:8080/usuario'

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }

            fetch(url, options)

            alert('Usuario Cadastrado')

        }

    })

}