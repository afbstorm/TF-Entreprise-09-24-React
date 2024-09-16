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
            <div>
            <h2>
                    {title}
                </h2>
            </div>
            <div>
                {ternaryExample()}
                {/*{andExample()}*/}
                {/*{ifElseExample()}*/}
                {/*{switchExample()}*/}
            </div>
        </li>
    )
}

export default TodoItems;
