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
        name: 'Bladder',
        // colors: ['#FABC3C', '#740070', '#0F1B47'],
        colors: ['#508fcc'],
        contrastColor: 'black',
    },
    {
        id: 'Bone & Joint',
        name: 'Bone & Joint',
        // colors: ['#FFFF00'],
        colors: ['#508fcc'],
        contrastColor: 'black',
    },
    {
        id: 'brain',
        name: 'Brain',
        colors: ['#508fcc'],
        // colors: ['#444444'],
    },
    {
        id: 'breast',
        name: 'Breast',
         colors: ['#508fcc'],
        // colors: ['#F87DB3'],
    },
    {
        id: 'colon',
        name: 'Colon',
         colors: ['#508fcc'],
        // colors: ['#23395B'],  
    },
      {
        id: 'Esophagus',
        name: 'Esophagus',
         colors: ['#508fcc'],
        // colors: ['#CCCCFF'],  
    },
    {
        id: 'Eye',
        name: 'Eye',
         colors: ['#508fcc'],
        // colors: ['#23395B'],  
    },
    {
        id: 'Hodgkins Lymphoma',
        name: 'Hodgkins Lymphoma',
         colors: ['#508fcc'],
        // colors: ['#23395B'],  
    },
    {
        id: 'Kidney',
        name: 'Kidney',
         colors: ['#508fcc'],
        // colors: ['#23395B'],  
    },
     {
        id: 'leukemia',
        name: 'leukemia',
         colors: ['#508fcc'],
        // colors: ['#23395B'],  
    },

    {
        id: 'liver',
        name: 'Liver',
        colors: ['#508fcc'],
        // colors: ['#0E402D'],    
    },
    {
        id: 'lung',
        name: 'Lung',
        colors: ['#508fcc'],
        // colors: ['#white'],    
    },
     {
        id: 'Lymphoma',
        name: 'Lymphoma',
        colors: ['#508fcc'],
       // contrastColor: 'black',    
    },
    {
        id: 'melanoma',
        name: 'Melanoma',
        // colors: ['black'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'myeloma',
        name: 'Myeloma',
        // colors: ['800020'],  
         colors: ['#508fcc'], 
    },
     {
        id: 'Non-Hodgkins Lymphoma',
        name: 'Non-Hodgkins Lymphoma',
        // colors: ['black'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Oral',
        name: 'Oral',
        // colors: ['black'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Other Digestive',
        name: 'Other Digestive',
        // colors: ['black'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Other Endocrine',
        name: 'Other Endocrine',
        // colors: ['zebra'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Other Genital',
        name: 'Other Genital',
        // colors: ['B163A3'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Other Respitory',
        name: 'Other Respitory',
        // colors: ['black'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Other Skin',
        name: 'Other Skin',
        // colors: ['black'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Other/Unspecified',
        name: 'Other/Unspecified',
        // colors: ['black'],  
         colors: ['#508fcc'], 
    },
    {
        id: 'Ovary',
        name: 'Ovary',
        // colors: ['#3ECFCD'],
         colors: ['#508fcc'],
    },
    {
        id: 'Pancreas',
        name: 'Pancreas',
          // colors: ['#4E2572']
         colors: ['#508fcc'],
    },
     {
        id: 'Prostate',
        name: 'Prostate',
           // colors: ['#4FCAFF'],
         colors: ['#508fcc'],
    },
      {
        id: 'Rectal',
        name: 'Rectal',
          // colors: ['#4F759B'],
         colors: ['#508fcc'],
    },
    {
        id: 'Soft Tissue',
        name: 'Soft Tissue',
        // colors: ['#3ECFCD'],
         colors: ['#508fcc'],
    },
     {
        id: 'Stomach',
        name: 'Stomach',
        // colors: ['#3ECFCD'],
         colors: ['#508fcc'],
    },
    {
        id: 'Thyroid',
        name: 'Thyroid',
            // colors: ['#008080', '#FFC0CB', '0000FF'],   
         colors: ['#508fcc'],
    },
    {
        id: 'Ureter & urinary',
        name: 'Ureter & urinary',
        // colors: ['#3ECFCD'],
         colors: ['#508fcc'],
    },
     {
        id: 'Uterine cervix',
        name: 'Uterine cervix',
        // colors: ['#3ECFCD'],
         colors: ['#508fcc'],
    },
    {
        id: 'Uterine Corpus',
        name: 'Uterine Corpus',
      // colors: ['#F99768'],
         colors: ['#508fcc'],
    },
    {
        id: 'generic',
        name: 'Unspecified Cancer',
        // colors: ['purple'],
         colors: ['#508fcc'],
    },
]

export default CancerTypes


// To use this, in your component, import lodash, then use this kind of id
// to get the name, colors, etc. from the cancer type.

// const currentCancerTypes = _.find(CancerTypes, { id: 'uterine' })
// const colorPrimary = currentCancerType.colorPrimary
// const colorSecondary = currentCancerType.colorSecondary
// const name = currentCancerType.name
