import results from '../data/results.json'
import { allHeros } from "../data/heros-avatar/heros"
import { allPets } from "../data/pets-avatar/pets"

import { DateTime } from 'luxon'


const getDatesFromResults = (reversed = true) => {
    const t = Object.keys(results).filter(p => p !== "").sort()
    if (reversed === true) { return t.reverse() } else { return t }
}

export const fromYYYYMMDD = (dateStr => {
    return DateTime.fromFormat(dateStr, 'yyyyMMdd').toFormat('yyyy-MM-dd')
})

export const getFirstDateFromResults = (reversed) => {
    return getDatesFromResults(reversed)[0]
}

//date must be in yyyy-mm-dd format from input (date type)
export const getFromDate = (date, include = true) => {
    const dates = getDatesFromResults()
    const toDate = DateTime.fromFormat(String(date), 'yyyy-mm-dd').toFormat('yyyymmdd')
    const ret = []
    let ar = []
    if (include) {
        ar = dates.filter(d => Number(d) >= Number(toDate))
    } else {
        ar = dates.filter(d => Number(d) > Number(toDate))
    }
    let battleCounter = 0

    for (const a of ar) {
        const battlesOfDay = results[a]
        const tempBattles = battlesOfDay.map((battle) => {
            const att = battle.attacker
            att.date = a
            const def = battle.defender
            def.date = a
            return { attacker: att, defender: def }
        })
        for (const battle of tempBattles) {
            ret.push(battle)
        }
        battleCounter += results[a].length
    }
    // console.log(toDate)

    return ret
}


export const getHeroNumberFromShortName = (srt) => {
    const r = allHeros.filter((hero) => {
        return hero.short.toLowerCase() === srt.toLowerCase()
    })
    return Number(r[0].id)
}

export const getPetNumberFromShortName = (srt) => {
    // debugger
    if (srt !== "") {
        const r = allPets.filter((pet) => {

            return pet.short.toLowerCase() === srt.toLowerCase()
        })
        if (r[0]?.id === undefined) { debugger }
        return Number(r[0].id)
    }
}