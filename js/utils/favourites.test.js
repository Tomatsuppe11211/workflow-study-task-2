import { expect, describe, it, beforeEach, afterEach} from "vitest"
import { getFavourites } from "./favourites.js"
import { isFavourite } from "./favourites.js"
import { toggleFavourite } from "./favourites.js"
import { FAVOURITES_KEY } from "./favourites.js"

describe ('testing the functions to favourites.js', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('Check if anything is in localStorage', () => {
        localStorage.setItem(FAVOURITES_KEY, JSON.stringify([]))
        const result = getFavourites()
        expect(result).toEqual([])
        console.log('clearing localStorage...')
    })//Test pass
    

    it('Checking if something is saved as a favourite.', () => {
        localStorage.setItem(FAVOURITES_KEY, JSON.stringify([
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]))
        const result = isFavourite(4)
        expect(result).toBe(false)
    }) //Test pass if set to fail


    it('Checking if we can toggle favourites', () => {
        toggleFavourite(1, { id: 1})
        const result = getFavourites()
        expect(result).toEqual([ { id: 1 } ])
    }) //test pass
})