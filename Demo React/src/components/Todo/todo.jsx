import TodoItems from "../Todo-items/todo-items.jsx";
import './todo.css';

const Todo = ({todoList = []}) => {
    // const { cours, eleves } = props;

    const todos = todoList.map(item => (
        <TodoItems
            key={item.id}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted} />
    ))
    return (
    <section className='todo'>
        <div className='todo__container'>
            <ul>
                {todos}
            </ul>
        </div>
    </section>




        // <section>
        //     <p>Composant To-do</p>
        //
        //     <h2 className='title'>
        //         Cours : {cours}
        //     </h2>
        //     <h3 style={{textDecoration: 'underline'}}>
        //         Donné par : {formateur}
        //     </h3>
        //     <p>
        //         Nombre d'élèves : {eleves}
        //     </p>
        // </section>
    )
}

export default Todo;
