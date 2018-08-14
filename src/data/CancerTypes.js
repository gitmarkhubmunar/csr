const CancerTypes = [
    {
        id: 'bladder',
        name: 'Bladder Cancer',
        colors: ['orange', 'purple', 'green'],
    },
    {
        id: 'brain',
        name: 'Brain Cancer',
        colors: ['grey'],
    },
    {
        id: 'breast',
        name: 'Breast Cancer',
        colors: ['grey'],
    },
    {
        id: 'colon',
        name: 'Colon Cancer',
        colors: ['darkblue'],  
    },
    {
        id: 'liver',
        name: 'Liver Cancer',
        colors: ['green'],    
    },
    {
        id: 'melanoma',
        name: 'Melanoma',
        colors: ['black'],   
    },
    {
        id: 'ovarian',
        name: 'Ovarian Cancer',
        colors: ['teal'],
    },
     {
        id: 'pancreatic',
        name: 'Pancreatic Cancer',
        colors: ['blue'],
    },
    {
        id: 'prostate',
        name: 'Prostate Cancer',
        colors: ['lightblue'],
    },
    {
        id: 'rectal',
        name: 'Rectal Cancer',
        colors: ['darkblue'],
    },
    {
        id: 'lymphoma',
        name: 'Lymphoma',
        colors: ['limegreen'],  
    },
    {
        id: 'stomach',
        name: 'Stomach Cancer',
        colors: ['lavender'],    
    },
    {
        id: 'thyroid',
        name: 'Thyroid Cancer',
        colors: ['teal', 'pink'],   
    },
    {
        id: 'uterine',
        name: 'Uterine Cancer',
        colors: ['purple'],
    },
    {
        id: 'generic',
        name: 'Unspecified Cancer',
        colors: ['purple'],
    },
]

export default CancerTypes


// To use this, in your component, import lodash, then use this kind of id
// to get the name, colors, etc. from the cancer type.

// const currentCancerTypes = _.find(CancerTypes, { id: 'uterine' })
// const colorPrimary = currentCancerType.colorPrimary
// const colorSecondary = currentCancerType.colorSecondary
// const name = currentCancerType.name
