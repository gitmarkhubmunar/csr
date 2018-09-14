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
        ribbonFile: ['ribbon.bladder.svg'],
    },
    {
        id: 'Bone & Joint',
        name: 'Bone & Joint',
        // colors: ['#FFFF00'],
        colors: ['#508fcc'],
        contrastColor: 'black',
        ribbonFile: ['ribbon.bonejoint.svg'],

    },
    {
        id: 'brain',
        name: 'Brain',
        colors: ['#508fcc'],
        // colors: ['#444444'],
        ribbonFile: ['ribbon.brain.svg'],

    },
    {
        id: 'breast',
        name: 'Breast',
         colors: ['#508fcc'],
        // colors: ['#F87DB3'],
        ribbonFile: ['ribbon.breast.svg'],
    },
    {
        id: 'colon',
        name: 'Colon',
         colors: ['#508fcc'],
        // colors: ['#23395B'],
        ribbonFile: ['ribbon.colon.svg'],  
    },
      {
        id: 'Esophagus',
        name: 'Esophagus',
         colors: ['#508fcc'],
        // colors: ['#CCCCFF'],
        ribbonFile: ['ribbon.esophagus.svg'],   
    },
    {
        id: 'Eye',
        name: 'Eye',
         colors: ['#508fcc'],
        // colors: ['#23395B'],
        ribbonFile: ['ribbon.eye.svg'],  
    },
    {
        id: 'Hodgkins Lymphoma',
        name: 'Hodgkins Lymphoma',
         colors: ['#508fcc'],
        // colors: ['#23395B'],
        ribbonFile: ['ribbon.hodgkinslymphoma.svg'],   
    },
    {
        id: 'Kidney',
        name: 'Kidney',
         colors: ['#508fcc'],
        // colors: ['#23395B'],
        ribbonFile: ['ribbon.kidney.svg'],   
    },
     {
        id: 'leukemia',
        name: 'leukemia',
         colors: ['#508fcc'],
        // colors: ['#23395B'], 
        ribbonFile: ['ribbon.leukemia.svg'], 
    },

    {
        id: 'liver',
        name: 'Liver',
        colors: ['#508fcc'],
        // colors: ['#0E402D'],
        ribbonFile: ['ribbon.liver.svg'],    
    },
    {
        id: 'lung',
        name: 'Lung',
        colors: ['#508fcc'],
        // colors: ['#white'],
        ribbonFile: ['ribbon.lung.svg'],    
    },
     {
        id: 'Lymphoma',
        name: 'Lymphoma',
        colors: ['#508fcc'],
       // contrastColor: 'black', 
       ribbonFile: ['ribbon.hodgkinslymphoma.svg'],    
    },
    {
        id: 'melanoma',
        name: 'Melanoma',
        // colors: ['black'],  
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.melanoma.svg'], 
    },
    {
        id: 'myeloma',
        name: 'Myeloma',
        // colors: ['800020'],  
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.myeloma.svg'], 
    },
     {
        id: 'Non-Hodgkins Lymphoma',
        name: 'Non-Hodgkins Lymphoma',
        // colors: ['black'],  
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.hodgkinslymphoma.svg'],  
    },
    {
        id: 'Oral',
        name: 'Oral',
        // colors: ['black'],  
         colors: ['#508fcc'],
        ribbonFile: ['ribbon.oral.svg'], 
    },
    {
        id: 'Other Digestive',
        name: 'Other Digestive',
        // colors: ['black'],  
         colors: ['#508fcc'],
        ribbonFile: ['ribbon.oral.svg'], 
    },
    {
        id: 'Other Endocrine',
        name: 'Other Endocrine',
        // colors: ['zebra'],  
         colors: ['#508fcc'],
        ribbonFile: ['ribbon.oral.svg'], 
    },
    {
        id: 'Other Genital',
        name: 'Other Genital',
        // colors: ['B163A3'],  
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.genital.svg'], 
    },
    {
        id: 'Other Respitory',
        name: 'Other Respitory',
        // colors: ['black'],  
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.respitory.svg'],

    },
    {
        id: 'Other Skin',
        name: 'Other Skin',
        // colors: ['black'],  
        colors: ['#508fcc'], 
        ribbonFile: ['ribbon.respitory.svg'], 
    },
    {
        id: 'Other/Unspecified',
        name: 'Other/Unspecified',
        // colors: ['black'],  
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.respitory.svg'], 
    },
    {
        id: 'Ovary',
        name: 'Ovary',
        // colors: ['#3ECFCD'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.ovarian.svg'],
    },
    {
        id: 'Pancreas',
        name: 'Pancreas',
          // colors: ['#4E2572']
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.pancreas.svg'],
    },
     {
        id: 'Prostate',
        name: 'Prostate',
           // colors: ['#4FCAFF'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.prostate.svg'],
    },
      {
        id: 'Rectal',
        name: 'Rectal',
          // colors: ['#4F759B'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.rectal.svg'],
    },
    {
        id: 'Soft Tissue',
        name: 'Soft Tissue',
        // colors: ['#3ECFCD'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.softtissue.svg'],

    },
     {
        id: 'Stomach',
        name: 'Stomach',
        // colors: ['#3ECFCD'],
         colors: ['#508fcc'],
        ribbonFile: ['ribbon.stomach.svg'],
    },
    {
        id: 'Thyroid',
        name: 'Thyroid',
            // colors: ['#008080', '#FFC0CB', '0000FF'],   
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.thyroid.svg'],
    },
    {
        id: 'Ureter & urinary',
        name: 'Ureter & urinary',
        // colors: ['#3ECFCD'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.ureterurinary.svg'],
    },
     {
        id: 'Uterine cervix',
        name: 'Uterine cervix',
        // colors: ['#3ECFCD'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.uterine.cervix.svg'],
    },
    {
        id: 'Uterine Corpus',
        name: 'Uterine Corpus',
      // colors: ['#F99768'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.uterinecorpus.svg'],
    },
    {
        id: 'generic',
        name: 'Unspecified Cancer',
        // colors: ['purple'],
        colors: ['#508fcc'],
        ribbonFile: ['ribbon.uterinecorpus.svg'],
    },
]

export default CancerTypes


// To use this, in your component, import lodash, then use this kind of id
// to get the name, colors, etc. from the cancer type.

// const currentCancerTypes = _.find(CancerTypes, { id: 'uterine' })
// const colorPrimary = currentCancerType.colorPrimary
// const colorSecondary = currentCancerType.colorSecondary
// const name = currentCancerType.name
