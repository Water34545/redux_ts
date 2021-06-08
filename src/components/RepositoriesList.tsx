import {useState} from 'react'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useActions'

const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('')
    const {SearchRepositories} = useActions()
    const {data, error, loading} = useTypedSelector((state) => state.repositories)
    console.log(data, error, loading)
 
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        SearchRepositories(term) 
    }
 
    return <div>
        <form onSubmit={event => onSubmit(event)}>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button> 
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data && <ul>
            {data.map(item => <li key={item}>{item}</li>)}
            </ul>}
    </div>
}

export default RepositoriesList