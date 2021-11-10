import {useRef} from 'react'

const App = () => {

    const file =useRef()
    const input = useRef()
    const submit = () => {
        console.log(input.current.value)
        console.log(file.current.files[0])
        const form = new FormData()
        form.append('archivo', file.current.files[0])
        form.append('camppo', input.current.value)
        fetch('/lala', { method: 'POST', body: form })
    }

    return(
        <div>
            <div>
                <span>Lala</span>
                <input type='text' name='campo' ref={input} />
                <input type='file' name='campo' ref={file} />
            </div>
            <input type='submit' value='Enviar' onClick={submit} />
        </div>
    )
}

export default App