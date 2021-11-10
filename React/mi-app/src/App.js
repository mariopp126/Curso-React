import { Component } from "react"

class Button extends Component{
    state = {}
    constructor(props){
        super(props)
        console.log('constructor', props);
}

componentDidMount(){
    console.log('componentDidMount')
}

componentDidUpdate(prevProos, prevState){
    console.log('component did update', prevProos, prevState)
}

componentWillUnmount(){
    console.log('desmontando componente', this.props, this.state)
}

    render(){
        console.log('renderizando button');
        return(
            <button onClick={() => this.setState({ prop: 1 })}>
                Enviar
            </button>
        )
    }
}

class App extends Component {
    state = {
        valor: 3
    }
render() {
    console.log(this.state);
    return (
        <div>
            <p>
                Hola mundo
            </p>
            {this.state.valor === 3
            ? <Button chanchito='feliz'/>
            :null}
            <button 
            className={`${this.state.valor}`}
             onClick={() => this.setState({ valor:2 })}>
                Enviar en app</button>
        </div>
    )
}
}

export default App