
const Todo = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.completed}</p>
        </div>
    )

}

export default Todo;