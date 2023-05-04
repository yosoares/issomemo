import React, { useState } from 'react';
function App() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    function handleFormulario() {
        alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
    }
    return (
        <div className='App'>
            <h1>Faça o seu cadastro</h1>
            <form onSubmit={handleFormulario}>
                <label>Nome: </label><input className='caixinha' type='text' value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                <label>Email: </label><input className='caixinha' type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Senha: </label><input className='caixinha' type='password' value={senha} onChange={(e) => setSenha(e.target.value)} /><br />
                <button className="button" type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default App;