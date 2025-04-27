// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO




// todo: INSERIRE TUTTI I PRODOTTI CHE HANNO UN PARENT DENTRO IL PARENT STESSO
const pages = [
    {
        id: 1,
        item: "Home",
        parent: null
    },
    {
        id: 2,
        item: "Prodotti",
        parent: null
    },
    {
        id: 3,
        item: "Articoli",
        parent: null
    },
    {
        id: 99,
        item: "Auto",
        parent: 2
    },
    {
        id: 101,
        item: "Chi siamo",
        parent: 1
    },
    {
        id: 100,
        item: "Moto",
        parent: 2
    }
];


