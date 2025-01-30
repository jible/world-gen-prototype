let levels = [
    {
        name: "Limbo",
        palette: {
            'wall': '#211A1E',
            'floor': '#9BC53D',
            'water': '#5BC0EB'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
            matrix.applyPerimeter()
        },
    },
    {
        name: "Lust",
        palette: {
            'wall': '#51513D',
            'floor': '#1B2021',
            'water': '#A6A867'
        },
        generate(matrix,seed = 0) {
            matrix.applyRandomWalk(seed)
        },
    },
    {
        name: "Gluttony",
        palette: {
            'wall': '#4D5061',
            'floor': '#5C80BC',
            'water': '#E9EDDE'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
        },
    },
    {
        name: "Greed",
        palette: {
            'wall': '#0A122A',
            'floor': '#698F3F',
            'water': '#F2D492'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
        },
    },
    {
        name: "Anger",
        palette: {
            'wall': '#4D5061',
            'floor': '#5C80BC',
            'water': '#E9EDDE'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
        },
    },
    {
        name: "Heresy",
        palette: {
            'wall': '#A10702',
            'floor': '#FAA613',
            'water': '#FAA613'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
        },
    },
    {
        name: "Violence",
        palette: {
            'wall': '#191716',
            'floor': '#440D0F',
            'water': '#AF9BB6'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
        },
    },
    {
        name: "Fraud",
        palette: {
            'wall': '#EF6F6C',
            'floor': '#F2C57C',
            'water': '#7FB685'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
        },
    },
    {
        name: "Treachery",
        
        palette: {
            'wall': '#DF2935',
            'floor': '#83C5BE',
            'water': '#E6E8E6'
        },
        generate(matrix,seed = 0) {
            matrix.applyNoise(seed)
        },
    },
]
