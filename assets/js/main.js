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
        id: 4,
        item: "Auto",
        parent: 2
    },
    {
        id: 5,
        item: "Chi siamo",
        parent: 1
    },
    {
        id: 6,
        item: "Moto",
        parent: 2
    },
    {
        id: 7,
        item: "Utilitarie",
        parent: 4
    },
    {
        id: 8,
        item: "Furgoni da lavoro",
        parent: 4
    },
    {
        id: 404,
        item: "Errore 404 (parent non esiste)",
        parent: 0
    }
];
console.debug(pages);
console.table(pages);





const findPageParent = (pagesToSearch, page) => {
    // console.debug(`findPageParent pagesToSearch`, pagesToSearch);
    // console.debug(`findPageParent page`, page);

    let pageParent = null;
    for (pageObject of pagesToSearch) {
        // console.debug("pageObject.item", pageObject.item);
        if (pageObject.id === page.parent) {
            pageParent = pageObject;
        };
        if (pageParent === null && pageObject.childPages !== undefined) {
            pageParent = findPageParent(pageObject.childPages, page);
        };
    };
    if (pageParent === null) {
        // console.error(`Errore intermedio pagina ${page.id} (--> ${page.parent})`, page)
    };

    // console.debug(`findPageParent pageParent di ${page.id}`, pageParent)
    // if (pageParent !== null) {
    //     console.debug(`findPageParent ${page.id} pageParent TROVATO!`, page, pageParent);
    // } else {
    //     console.debug(`findPageParent ${page.id} pageParent NON TROVATO!`, page);
    //     console.debug(`findPageParent ${page.id} pageParent NON TROVATO!`, pagesToSearch);
    // }

    return pageParent;
};


const setChild = (parent, child) => {
    // console.debug("setChild parent", parent);
    // console.debug("setChild child", child);
    // console.debug("setChild parent.childPages", parent.childPages);
    if (parent.childPages === undefined) {
        parent.childPages = [];
    };
    // console.debug(`setChild PUSHO UN CHILD IN: ${parent.id}`, parent.childPages);
    parent.childPages.push(child);
};
const deletePage = (page) => {
    // console.debug(`deletePage pagina: ${page.id}`, page);
    // console.debug(`deletePage pages[pages.indexOf(page)]`, pages[pages.indexOf(page)]);
    // console.debug(`deletePage pages[pages.indexOf(page) + 1]`, pages[pages.indexOf(page) + 1]);
    pages.splice(pages.indexOf(page), 1);
};



for (let i = 0; i < pages.length; i ++) {
    const currentPage = pages[i];
    if (currentPage.parent !== undefined && currentPage.parent !== null) {
        // console.info("pagina con parent",currentPage);
        const pageParent = findPageParent(pages, currentPage);
        // console.debug("pageParent", pageParent);
        if (pageParent === null) {
            console.error(`ERRORE FINALE PAGINA ${currentPage.id} (--> ${currentPage.parent}). PARENT NON ESISTE`, currentPage)
        } else {
            setChild(pageParent, currentPage);    
            deletePage(currentPage);

            i--;
        }
        
    } else {
        // console.info("pagina senza parent",currentPage);
    }
};


console.debug(pages);
console.table(pages);