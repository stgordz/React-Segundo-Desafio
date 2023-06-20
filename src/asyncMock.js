const products = [

    // EQUIPOS
    { id: "1", name: "Vaporesso SKY Solo", price: 14000, category: "equipos", img: "/equipos/equipos-01.png", stock: 10, description: "Equipo vaporizador para liquidos", },
    { id: "2", name: "UWELL Aeglos P1", price: 15000,  category: "equipos", img: "/equipos/equipos-02.png", stock: 10, description: "Equipo vaporizador para liquidos, con entrada de aire regulable", },
    { id: "3", name: "UWELL Whirl", price: 12000, category: "equipos", img: "/equipos/equipos-03.png", stock: 10, description: "Equipo vaporizador para sales de nicotina", },
    { id: "12", name: "SMOK Novo 2 KIT", price: 16000, category: "equipos", img: "/equipos/equipos-04.png", stock: 10, description: "Equipo vaporizador para liquidos y sales", },
    // LIQUIDOS
    { id: "4", name: "Sales EVIL", price: 4000, category: "liquidos", img: "/liquidos/liquidos-01.jpg", stock: 10, description: "Sales de nicotina marca EVIL, variedad de sabores", },
    { id: "5", name: "Liquidos EVIL", price: 4000, category: "liquidos", img: "/liquidos/liquidos-02.jpg", stock: 10, description: "Liquidos EVIL, variedad de sabores", },
    { id: "6", name: "Liquidos ZOMO", price: 4000, category: "liquidos", img: "/liquidos/liquidos-10.png", stock: 10, description: "Liquidos ZOMO, variedad de sabores", },


    // RESISTENCIAS
    { id: "7", name: "Resistencias de equipos", price: 2499.99, category: "resistencias", img: "/resistencias/resistencias-01.png", stock: 10, description: "Resistencias de equipos", },
    { id: "8", name: "Resistencias de equipos", price: 2499.99, category: "resistencias", img: "/resistencias/resistencias-02.png", stock: 10, description: "Resistencias de equipos", },
    { id: "9", name: "Resistencias de equipos", price: 2499.99, category: "resistencias", img: "/resistencias/resistencias-03.png", stock: 10, description: "Resistencias de equipos", },


    // BATERIAS
    { id: "10", name: "Baterias EFEST", price: 2499.99, category: "baterias", img: "/baterias/baterias-01.png", stock: 10, description: "Baterias EFEST", },
    { id: "11", name: "Baterias VAPCE", price: 2499.99, category: "baterias", img: "/baterias/baterias-02.png", stock: 10, description: "Baterias VAPCE", },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 100)
    })
}