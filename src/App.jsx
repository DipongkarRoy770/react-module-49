import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'



function App() {
  return (
    <div className="App">
      <ReactProject></ReactProject>
      <Device name="Iphone pro max"></Device>
      <Device name="OnePlus pro"></Device>
      <Watch></Watch>
    </div>
  )
}
function ReactProject(){
  return(
    <div>
      <h3>Wellcome To React JS </h3>
    </div>
  )
}

export default App
