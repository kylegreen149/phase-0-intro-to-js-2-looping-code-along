// Code your solutions in this file
function writeCards(names, partyType) {
    const thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${partyType} gift!`)
    }
    return thankYouCards
}

function countDown() {
    let i = 10
    while (i > -1) {
        console.log(i)
        i--
    }
}
