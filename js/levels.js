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
        },
    },
    {

    }
]
