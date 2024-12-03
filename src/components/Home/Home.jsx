import Title from '../Title/Title.jsx'
import Counter from '../Counter/Counter.jsx'
import NewYear from '../../assets/new-year.jpg'
import useCountDown from '../../hooks/useCountDown.jsx'
import './Home.css'

function Home() {
  const anoAtual = new Date().getFullYear();
  const [day, hour, minute, second] = useCountDown(`Jan 1, ${anoAtual + 1} 00:00:00`)

  return (
    <div className='Home' style={{
      backgroundImage: `url(${NewYear})`
    }}>
      <div className='container'>
        <Title title={`Contagem até o fim de ${anoAtual}`} />
        <div className='countdown-container'>
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div >
  )
}

export default Home
