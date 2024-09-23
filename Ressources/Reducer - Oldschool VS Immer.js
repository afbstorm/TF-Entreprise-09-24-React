// Exemple d'interaction avec le state de Redux dans le reducer
// ************************************************************

// ↓ Le state de Redux
const state = {
    email: 'della.duck@gmail.com',
    person: {
        firstname : 'Della',
        lastname: 'Duck'
    },
    activities : [
        {
            activityId : 5,
            isViewer : false,
            nbGuest : 3
        },
        {
            activityId : 6,
            isViewer : true,
            nbGuest : 2
        }
    ]
}



// Opération a effectuer : "Inscription à l'activté 7"
// ↓ Action recu par le reducer
const action1 = {
    type: 'act/register',
    payload : {
        activityId : 7,
        nbGuest : 0,
        isViewer : false
    }
}

// Traitement à réaliser dans le reducer
// ↓ Version "Old-School"
const res1 = {
    ...state,
    activities: [
        ...state.activities,
        {
            ...action1.payload
        }
    ]
}

// ↓ Utilisation de Immer ♥
state.activities.push(action1.payload);