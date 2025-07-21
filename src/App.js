import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import Botao from "./componentes/Botao";

function App() {
  const [times, setTimes] = useState([])
  const [colaboradores, setColaboradores] = useState([])
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() =>{
    fetch('https://687e400ec07d1a878c31e85d.mockapi.io/API/times')
    .then(resposta => resposta.json())
    .then(dados =>{
      setTimes(dados)
    })
  },[])

  useEffect(()=>{
    if(times.length > 0){
      fetch('https://687e400ec07d1a878c31e85d.mockapi.io/API/colaboradores')
      .then(resposta => resposta.json())
      .then(dados =>{
        setColaboradores(dados)
      })
    }
  },[times])

  const toggleFormulario = () => {
    setMostrarFormulario((visivel) => !visivel)
  }

  async function deletarColaborador(id){
    await fetch(`https://687e400ec07d1a878c31e85d.mockapi.io/API/colaboradores/${id}`,{
      method: 'DELETE'
    })
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }
 
  async function mudarCorDoTime(cor, id){
    await fetch(`https://687e400ec07d1a878c31e85d.mockapi.io/API/times/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cor})
    })
    setTimes(times.map(time =>{
      if(time.id === id){
        return{...time, cor}
      }
      return time
    }))
  }

   async function cadastrarTime(novoTime){
    await fetch('https://687e400ec07d1a878c31e85d.mockapi.io/API/times',{
      method: 'POST',
      headers: {
        'content-Type':'application/json'
      },
      body: JSON.stringify(novoTime)
    })
    setTimes([...times,{...novoTime}])
   }

   async function cadastrarColaborador(novoColaborador){
    await fetch('https://687e400ec07d1a878c31e85d.mockapi.io/API/colaboradores',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(novoColaborador)
    })
    setColaboradores([...colaboradores,{...novoColaborador}])
   }

  async function toggleFavorito(id){
  const colaborador = colaboradores.find(c => c.id === id)
  const novoFavorito = !colaborador.favorito

  await fetch(`https://687e400ec07d1a878c31e85d.mockapi.io/API/colaboradores/${id}`, {
    method: 'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({favorito: novoFavorito})
  })

  setColaboradores(colaboradores.map(colaborador => {
    if(colaborador.id === id){
      return {...colaborador, favorito:novoFavorito}
    }
    return colaborador
  }))
}


  return (
    <div>
      <Banner />
      {mostrarFormulario && (
        <Formulario 
          cadastrarTime={cadastrarTime} 
          times={times.map(time => time.nome)} 
          aoCadastrar={cadastrarColaborador} 
        />
      )}
      <Botao type='toggle' onClick={toggleFormulario}>
        <img src="/imagens/btn-icone.png" alt="toggle"/>
      </Botao>
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time) => 
          <Time 
            key={time.id} 
            time={time} 
            aoDeletar={deletarColaborador} 
            colaboradores={colaboradores.filter(colab => colab.time === time.nome)} 
            mudarCor={mudarCorDoTime}
            aoFavoritar={toggleFavorito}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
