const DateOfDay = () => {

    const today = new Date();
    const formatedDate = today.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    });

    return (
        <p>{formatedDate}</p>
    )
}; 

// const DateOfDay2 = () =>  (
//     <p>{new Date().toLocaleDateString(undefined, {
//         day: 'numeric',
//         month: 'long',
//         year: 'numeric',
//         weekday: 'long'
//     })}</p>
// );

export default DateOfDay;