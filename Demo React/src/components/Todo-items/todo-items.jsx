const TodoItems = ({title, description, isCompleted}) => {

    const ternaryExample = () => {
        return isCompleted ? (
            <p className='todo__description--isActive'>{description}</p>
        ) : (
            <p className='todo__description--isCompleted'>{description}</p>
        )
    }
    const andExample = () => {
        return isCompleted && (
            <p className='todo__description--isCompleted'>{description}</p>
        )
    }
    const ifElseExample = () => {
        if (isCompleted) {
           return <p className='todo__description--isCompleted'>{description}</p>
        } else {
           return <p className='todo__description--isActive'>{description}</p>
        }
    }
    const switchExample = () => {
        switch (isCompleted) {
            case false:
                return <p className='todo__description--isActive'>{description}</p>
            case true:
                return <p className='todo__description--isCompleted'>{description}</p>

        }
    }

    return (
        <li>
            <div className='todo__titre-container'>
                <h2 className='todo__titre'>
                    {title}
                </h2>
            </div>
            <div className='todo__description-container'>
                {ternaryExample()}
                {/*{andExample()}*/}
                {/*{ifElseExample()}*/}
                {/*{switchExample()}*/}
            </div>
        </li>
    )
}

export default TodoItems;
