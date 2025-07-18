import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';
import Botao from "./componentes/Botao";

function App() {

  const [times, setTimes] = useState([])
  const [colaboradores, setColaboradores] = useState([])

  useEffect(() =>{
    fetch('http://localhost:8080/times')
    .then(resposta => resposta.json())
    .then(dados =>{
      setTimes(dados)
    })
  },[])

  useEffect(()=>{
    if(times.length > 0){
      const inicial = [{
        favorito: false,
        id: uuidv4(),
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[0].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[0].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[0].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[0].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[1].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[1].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[1].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[1].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[2].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[2].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[2].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[2].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[3].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[3].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[3].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[3].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[4].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[4].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[4].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[4].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[5].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[5].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[5].nome
      },
      {
        favorito: false,
        id: uuidv4(),
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[5].nome
      }]
      setColaboradores(inicial)
    }
  },[times])

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario((visivel) => !visivel)
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor
      }
      return time;
    }))
  }

   function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
   }

  function toggleFavorito(id){
  setColaboradores(colaboradores.map(colaborador => {
    if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
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
          aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
        />
      )}
      <Botao type='toggle' onClick={toggleFormulario}>
        <img src="/imagens/btn-icone.png" alt="toggle"/>
      </Botao>
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time) => 
          <Time 
            key={time} 
            time={time} 
            aoDeletar={deletarColaborador} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
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
