import React, {useState} from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login(){

    const[email,setEmail]=useState();
    const[senha,setSenha]=useState();

    function logar(){
       firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
        alert('Usuário logado');
       }).catch(erro => {
           alert(erro);

       });
    }
    return(
        <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
          <h1 className="h3 mb-3 font-weight-normal text-white font-weith-bold">Login</h1>
        
          <input onChange={(event)=>setEmail(event.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email"/>
          <label for="inputPassword" class="visually-hidden">Password</label>
          <input onChange={(event)=>setSenha(event.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
          
          <button onClick={logar} class="w-100 btn btn-lg btn-login" type="button">Logar</button>
          <div className="msg-login text-white text-center my-5">
              <span>Tudo certo<strong>Você está conectado! &#128526;</strong></span>
              <br></br>
              <span>Ops!<strong>Verifique se a senha e/ou usuário estão corretos &#128546;</strong></span>

          </div>
          <div className="opcoes-login mt-5 text-center">
          <a href='#' className="mx-2">Recuperar Senha</a>
          <span className="text-white">&#9733;</span>
          <a href='#' className="mx-2">Fazer Cadastro</a>
          </div>
        </form>
        </div>
    )
}

export default Login;