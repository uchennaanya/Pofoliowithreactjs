import { Link } from 'react-router-dom'
import useFetch from './useFetch'

const CustomHook = () => {
    const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/todos')
    const [postdata] = useFetch('shttps://jsonplaceholder.typicode.com/comments?postId=1')

    const main = {
        margin: 'auto',
        width: '75vw'
    }

    return (
        <>
            <main style={main}>
                <Link to="/" >&lt; Back </Link>
                <hr />

                <h2>Custome Hook</h2>
                {isLoading && <span>Loading.....</span>}
                {!isLoading && error ? <span> {error} </span> :
                    (<ul className='data'>
                        {data.data && data.data.map((todo, i) => {
                            return (
                                <li key={i}>{todo.title}</li>
                            )
                        })}
                    </ul>)}

                <hr />
                <h2>Get Posts</h2>
                {isLoading && <span>Loading.....</span>}
                {!isLoading && error ? <span> {error} </span> :
                    (<ul className='data'>
                        {
                            postdata.data && postdata.data.map((posts, i) => {

                                return (
                                    <li key={i}>
                                        {posts.body}
                                    </li>
                                )
                            })
                        }
                    </ul>)}
            </main>

        </>
    )
}

export default CustomHook
