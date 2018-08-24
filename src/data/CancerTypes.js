// Bladder 
// Breast  
// Colon     
// Lung    
// Melanoma    
// Pancreas    
// Prostate    
// Rectal  
// Stomach Ovary
// Uterine


const CancerTypes = [
    {
        id: 'bladder',
        name: 'Bladder Cancer',
        colors: ['#FABC3C', '#740070', '#0F1B47'],
        contrastColor: 'black',
    },
    {
        id: 'brain',
        name: 'Brain Cancer',
        colors: ['#444444'],
    },
    {
        id: 'breast',
        name: 'Breast Cancer',
        colors: ['#F87DB3'],
    },
    {
        id: 'colon',
        name: 'Colon Cancer',
        colors: ['#23395B'],  
    },
    {
        id: 'liver',
        name: 'Liver Cancer',
        colors: ['#0E402D'],    
    },
    {
        id: 'melanoma',
        name: 'Melanoma',
        colors: ['black'],   
    },
    {
        id: 'ovarian',
        name: 'Ovarian Cancer',
        colors: ['#3ECFCD'],
    },
     {
        id: 'pancreatic',
        name: 'Pancreatic Cancer',
        colors: ['#4E2572'],
    },
    {
        id: 'prostate',
        name: 'Prostate Cancer',
        colors: ['#4FCAFF'],
    },
    {
        id: 'rectal',
        name: 'Rectal Cancer',
        colors: ['#4F759B'],
    },
    {
        id: 'lymphoma',
        name: 'Lymphoma',
        colors: ['#D7FF75'],
        contrastColor: 'black',  
    },
    {
        id: 'stomach',
        name: 'Stomach Cancer',
        colors: ['#CACFE3'], 
        contrastColor: 'black',   
    },
    {
        id: 'thyroid',
        name: 'Thyroid Cancer',
        colors: ['#008080', '#FFC0CB', '0000FF'],   
    },
    {
        id: 'uterine corpus',
        name: 'Uterine Cancer',
        colors: ['#F99768'],
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
