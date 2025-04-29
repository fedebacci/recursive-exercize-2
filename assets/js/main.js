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




// const findPageParent = (page) => {
//     return pages.find(object => object.id === page.parent);
// };
const findPageParent = (pagesToSearch, page) => {
    // console.debug(`findPageParent pagesToSearch`, pagesToSearch);
    // console.debug(`findPageParent page`, page);




    // const pageParent = pagesToSearch.find(object => {
    //     // console.info(`findPageParent pagina di cui cercare genitore: ${page.id} (${page.parent})`);
    //     console.info(`____________________________________________________________________________________________`);
    //     console.info(`findPageParent pagina sotto controllo`, object);
    //     if (object.childPages === undefined) {
    //         return object.id === page.parent;
    //     } else {
    //         // console.info("findPageParent Pagina sotto controllo ha childPages, controllo prima loro");
    //         const parentInChildPages = findPageParent(object.childPages, page);
            
    //         if (parentInChildPages !== undefined) {
    //             console.debug("findPageParent parentInChildPages", parentInChildPages);
    //             // return object.id === parentInChildPages.id;
    //             // return object.id = parentInChildPages.id;
    //             // return object = parentInChildPages;
    //             return parentInChildPages.id === page.parent;
    //             // return object.id === parentInChildPages.id;
    //         } else {
    //             return object.id === page.parent;
    //         }

    //     }
    // });




    let pageParent = null;
    for (pageObject of pagesToSearch) {
        console.warn("pageObject.item", pageObject.item);
        if (pageObject.id === page.parent) {
            pageParent = pageObject;
        };
        if (pageParent === null && pageObject.childPages !== undefined) {
            pageParent = findPageParent(pageObject.childPages, page);
        };
    };
    if (pageParent === null) {
        console.error("ERRORE")
    };







    console.debug(`findPageParent pageParent di ${page.id}`, pageParent)

    if (pageParent !== null) {
        console.warn(`findPageParent ${page.id} pageParent TROVATO!`, page, pageParent);
    } else {
        console.error(`findPageParent ${page.id} pageParent NON TROVATO!`, page);
        console.error(`findPageParent ${page.id} pageParent NON TROVATO!`, pagesToSearch);
    }


    return pageParent;
};


const setChild = (parent, child) => {
    console.debug("setChild parent", parent);
    console.debug("setChild child", child);
    console.debug("setChild parent.childPages", parent.childPages);
    if (parent.childPages === undefined) {
        parent.childPages = [];
    };
    console.debug(`setChild PUSHO UN CHILD IN: ${parent.id}`, parent.childPages);
    parent.childPages.push(child);
};
const deletePage = (page) => {
    console.error(`deletePage pagina: ${page.id}`, page);
    console.error(`deletePage pages[pages.indexOf(page)]`, pages[pages.indexOf(page)]);
    console.error(`deletePage pages[pages.indexOf(page) + 1]`, pages[pages.indexOf(page) + 1]);
    pages.splice(pages.indexOf(page), 1);
};



for (let i = 0; i < pages.length; i ++) {
    const currentPage = pages[i];
    if (currentPage.parent !== undefined && currentPage.parent !== null) {
        console.info("pagina con parent",currentPage);
        const pageParent = findPageParent(pages, currentPage);
        // console.debug("pageParent", pageParent);
        if (pageParent === null) {
            console.error("ERRORE", currentPage)
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








// const findParentPages = (pages) => {
//     // * IN FOREACH SALTA ELEMENTO 5 PERCHE DOPO AVER RIMOSSO IL 4 IL 5 OCCUPA LA SUA POSIZIONE LASCIATA LIBERA (CHE PERO E APPENA STATA CONTROLLATA DAL CICLO PER RIMUOVERE IL 4, QUINDI VIENE SALTATA). IN CICLO FOR POSSO FARE I-- PER TORNARE INDIETRO DI UN'ITERAZIONE E RICONTROLLARE LA STESSA POSIZIONE CON IL NUOVO CONTENUTO
//     // todo: CAPIRE COME FARE EQUIVALENTE DI I-- IN FOREACH
//     // pages.forEach(page => {
//     //     console.warn("page", page);
//     //     console.warn("pages", pages);
//     //     if (page.parent !== undefined && page.parent !== null) {
//     //         const pageParentObj = pages.find(object => object.id === page.parent);
//     //         console.debug(`pageParentObj ${page.id}`, pageParentObj);
            
//     //         if (pageParentObj.childPages === undefined) pageParentObj.childPages = [];
//     //         pageParentObj.childPages.push(page);
//     //         console.debug("pageParentObj.childPages", pageParentObj.childPages);
//     //         console.debug("pages.indexOf(page)", pages.indexOf(page));
//     //         pages.splice(pages.indexOf(page), 1);
//     //         console.warn("pages DOPO", pages);

//     //         return;
//     //     } else {
//     //         if (page.parent === null) {
//     //             console.info(`La pagina non ha genitore  ${page.id}`, page);
//     //         } else {
//     //             console.error(`Il genitore della seguente pagina non è stato trovato  ${page.id}`, page);
//     //             console.error(`Il genitore della seguente è UNDEFINED  ${page.id}`, page);
//     //         };
            
//     //     };
//     // });

//     // * TEST I-- IN FOREACH ___NON FUNZIONA___
//     // pages.forEach((page, index) => {
//     //     console.debug("page", page);
//     //     console.debug("index", index);
//     //     console.debug("pages", pages);
//     //     if (page.parent !== undefined && page.parent !== null) {
//     //         const pageParentObj = pages.find(object => object.id === page.parent);
//     //         console.debug(`pageParentObj ${page.id}`, pageParentObj);
            
//     //         if (pageParentObj.childPages === undefined) pageParentObj.childPages = [];
//     //         pageParentObj.childPages.push(page);
//     //         console.debug("pageParentObj.childPages", pageParentObj.childPages);
//     //         console.debug("pages.indexOf(page)", pages.indexOf(page));
//     //         pages.splice(pages.indexOf(page), 1);
//     //         console.debug("pages DOPO", pages);
            
//     //         console.warn("index PRIMA", index);
//     //         index--;
//     //         console.warn("index DOPO", index);
//     //     } else {
//     //         if (page.parent === null) {
//     //             console.info(`La pagina non ha genitore  ${page.id}`, page);
//     //         } else {
//     //             console.error(`Il genitore della seguente pagina non è stato trovato  ${page.id}`, page);
//     //             console.error(`Il genitore della seguente è UNDEFINED  ${page.id}`, page);
//     //         };
            
//     //     };
//     // });




//     // ! DEBUG
//     // let hasError = false;
//     for (let i = 0; i < pages.length; i ++) {
//         const currentPage = pages[i];
//         // console.debug("currentPage", currentPage);
//         // console.debug("pages", pages);
//         // console.debug("i", i);

//         // ! DEBUG
//         // if (hasError === true) {
//         //     console.error(`ESCO DAL CICLO ALL'ITERAZIONE: ${i}`)
//         //     return;  
//         // };

//         if (currentPage.parent !== undefined && currentPage.parent !== null) {
//             let pageParentObj = pages.find(object => object.id === currentPage.parent);
//             // console.debug(`pages`, pages);
//             // console.debug(`pageParentObj ${currentPage.id}`, pageParentObj);

//             if (pageParentObj !== undefined) {
//                 console.info(`La pagina viene aggiunta al suo ha genitore  ${currentPage.id} --> ${pageParentObj.id}`, currentPage);
//                 addPageToParent(currentPage, pageParentObj);
//                 i--;
//             } else {
//                 console.error(`Il genitore della seguente pagina non è stato trovato  ${currentPage.id}`, currentPage);


//                 console.debug(`pages`, pages);
//                 console.debug(`pages.includes(currentPage)`, pages.includes(currentPage));
//                 console.debug(`currentPage`, currentPage);
//                 console.debug(`pageParentObj ${currentPage.id}`, pageParentObj);

//                 // findParentPages()
//                 pages.forEach(page => {
//                     if (page.childPages !== undefined) {
//                         pageParentObj = page.childPages.find(object => object.id === currentPage.parent);
//                         if (pageParentObj !== undefined) {
//                             console.warn("TROVATO!", pageParentObj);
//                         } else {
//                             console.error("Non era questo:", page.id);
//                         }
//                     };
//                 });
//             };
            

//             // ! DEBUG
//             // hasError = true;

//         } else {
//             if (currentPage.parent === null) {
//                 console.info(`La pagina non ha genitore  ${currentPage.id}`, currentPage);
//             } else {
//                 console.error(`Il genitore della seguente è UNDEFINED  ${currentPage.id}`, currentPage);
//             };
            
//         };
//     };
// };












// const addPageToParent = (currentPage, pageParentObj) => {
//     if (pageParentObj.childPages === undefined) pageParentObj.childPages = [];
//     pageParentObj.childPages.push(currentPage);
//     // console.debug("pageParentObj.childPages", pageParentObj.childPages);
//     // console.debug("pages.indexOf(currentPage)", pages.indexOf(currentPage));
//     pages.splice(pages.indexOf(currentPage), 1);
//     // console.warn("pages DOPO", pages);
// };




// findParentPages(pages);



// console.debug(pages);