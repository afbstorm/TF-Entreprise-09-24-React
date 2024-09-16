import TodoItems from "../Todo-items/todo-items.jsx";
import './todo.css';
import {useState} from "react";

const Todo = ({todoList = []}) => {


    // const { cours, eleves } = props;
    // const [isVisible, setIsVisible] = useState(false);
    //
    // const switchVisibility = () => {
    //     setIsVisible(!isVisible);
    //     console.log('DANS LA FONCTION : ', isVisible)
    // }
    // console.log('EN DEHORS DE LA FONCTION :', isVisible)
    // const [value, setValue] = useState();
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setValue(e.target.value);
    // }
    // console.log(value);

    const todos = todoList.map(item => (
        <TodoItems
            key={item.id}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted} />
    ))

    return (
        <>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    name="value"*/}
            {/*    value={value}*/}
            {/*    onChange={(e) => handleChange(e)}/>*/}
            {/*<button onClick={() => switchVisibility()}>*/}
            {/*    Cliques sur moi*/}
            {/*</button>*/}

            <section className='todo'>
                <div className='todo__container'>
                    <ul>
                        {todos}
                    </ul>
                </div>
            </section>
        </>



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
