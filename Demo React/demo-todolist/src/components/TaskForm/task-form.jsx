import { nanoid } from 'nanoid';
import { useCallback, useState } from 'react';

const TaskForm = ({
    onTaskSubmit = () => { } // NOOP
}) => {

    const [newTask, setNewTask] = useState(
        {
            id: nanoid(),
            title: '',
            description: '',
            priority: '',
            isCompleted: false
        }
    );

    const handleChanges = useCallback((e) => {

        setNewTask(newTask => ({
            ...newTask,
            [e.target.name]: e.target.value
        }));

    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if (newTask.id && newTask.description) {
            //! Envoyer la tache vers le parent
            onTaskSubmit(newTask);
        }

        setNewTask({
            id: nanoid(),
            title: '',
            description: '',
            priority: '',
            isCompleted: false
        });

    }, [newTask, onTaskSubmit]);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                <input
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={(e) => handleChanges(e)} />
            </label>
            <label htmlFor="description">
                <textarea
                    name="description"
                    value={newTask.description}
                    onChange={(e) => handleChanges(e)}></textarea>
            </label>
            <label htmlFor="priority">
                <select
                    name="priority"
                    value={newTask.priority}
                    onChange={(e) => handleChanges(e)}>
                    <option value="" disabled>Selectionner une priorité</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <button type='submit'>Confirmer</button>
        </form>
    );
};

export default TaskForm;