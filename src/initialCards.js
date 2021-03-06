function shuffle(array) {
    const _array = array.slice(0)
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1)) 
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }

    return _array
}

export function initialCards() {
    let id = 0;
    const cards = [
        "mickey-mouse",
        "minnie-mouse",
        "donald-duck",
        "winnie-the-pooh",
        "maleficent",
        "pluto",
        "jasmine",
        "pocahontas"
    ].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}

export function initialCardsMedium() {
    let id = 0;
    const cards = [
        "mickey-mouse",
        "minnie-mouse",
        "donald-duck",
        "winnie-the-pooh",
        "maleficent",
        "pluto",
        "jasmine",
        "pocahontas",
        "belle",
        "ariel"
    ].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}

export function initialCardsHard() {
    let id = 0;
    const cards = [
        "mickey-mouse",
        "minnie-mouse",
        "donald-duck",
        "winnie-the-pooh",
        "maleficent",
        "pluto",
        "jasmine",
        "pocahontas",
        "belle",
        "ariel",
        "prince-eric",
        "captain-john-smith"
    ].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}