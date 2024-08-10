import React from "react";

function Login() {
  // Setar variáveis
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const dados = {
      login: user,
      password: password,
    };
    if (dados.login === "dog" && dados.password === "dog") {
      window.location.assign("./pages/historico/historico.html");
      window.location.replace("/historico");
    } else {
      setIsError(true);
    }
  }

  return (
    <div className="container-fluid h-100 w-100">
      <div className="row h-100">
        {/* Campo da imagem */}
        <div className="col d-none d-md-flex">
          {/* Imagem */}
          <div className="p-relative align-items-center h-100 d-flex">
            <img src="../images/login/veiculo.png" alt="" className="car-img" />
          </div>
          <div className="triangle"></div>
        </div>
        <div className="col">
          {/* Campo de Formulário */}
          <div className="central h-100">
            <h1 className="mx-auto mb-3">Bem vindo!</h1>
            <p className="mx-auto p-18 mb-5">Insira suas credenciais</p>
            <form onSubmit={handleSubmit}>
              {/* Campo de matricula*/}
              <label className="p-18 mb-2" htmlFor="matricula">
                Matrícula
              </label>
              <input
                type="text"
                id="matricula"
                name="matricula"
                placeholder="Digite sua matrícula"
                className="form-control mb-3 input-login"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
              {/* Campo de Senha */}
              <label className="p-18 mb-2" htmlFor="senha">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                className="form-control mb-3 input-login"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {/* Login incorreto */}
              {isError && <p className="p-17 text-center wrong-user">Usuário e/ou senha incorreto</p>}
              {/* Lembre-me */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label className="form-check-label p-16" htmlFor="remember">
                  Lembre de mim
                </label>
              </div>
              {/* Botão de envio do formulário */}
              <button className="btn btn-warning w-100 mt-5 btn-login">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
