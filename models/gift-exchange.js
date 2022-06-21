const { BadRequestError } = require("../utils/errors")

class GiftExchange {
    static pairs(names) {
        if (names.length % 2 === 1) {
            throw new BadRequestError;
        }
        const namedPairs = []

        while (names.length) {
            const currentPair = []

            while (currentPair.length < 2 && names.length > 0) {
                const nameIndex = Math.floor(Math.random() * names.length)
                const nameSelected = names[nameIndex]
                names.splice(nameIndex, 1)
                currentPair.push(nameSelected)
            }
            namedPairs.push(currentPair);
        }
        return namedPairs;
    }

    static traditional(names) {
        const currentIndex = names.length

        for (let i = currentIndex - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            const temp = names[i]
            names[i] = names[randomIndex]
            names[randomIndex] = temp
        }

        let arrayPairing = []

        for (let i = 0; i < names.length; i++) {
            const gifter = names[i];
            const receiver = (i === names.length - 1) ? names[0] : names[i + 1]
            arrayPairing.push(`${gifter} is giving a gift to ${receiver}`)
        }

        return arrayPairing;
    }
}

module.exports = GiftExchange

