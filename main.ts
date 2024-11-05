//generate a simple ts code
const data = {
    a: Promise.resolve("x"),
    b: Promise.resolve("y"),
    c: Promise.resolve(null),
    d: 4,
    e: { a: 2 }, // Oggetto statico
    f: [1, 2, 3] // Array statico
};

// Funzione generica per risolvere tutte le promesse o mantenere i valori statici in un oggetto
async function resolveData(data) {
    // Risolve le promesse o mantiene i valori statici
    const entries = await Promise.all(
        Object.entries(data).map(async ([key, value]) => {
            // Se il valore è una promessa, attendiamo il risultato; altrimenti lo usiamo direttamente
            const resolvedValue = value instanceof Promise ? await value ?? null : value;
            return [key, resolvedValue];
        })
    );

    // Crea l'oggetto finale direttamente da entries
    return Object.fromEntries(entries);
}

// Funzione principale per eseguire il codice
async function main() {
    const result = await resolveData(data);
    console.log("[LOG]: Result finale:", result);
    // Output atteso: { a: "x", b: "y", c: null, d: 4, e: { a: 2 }, f: [1, 2, 3] }
}

// Eseguiamo la funzione principale
main();