import { allHeros, counters, countersIndex } from "../data/heros-avatar/heros"
import { allPets } from "../data/pets-avatar/pets"
import blank from "../data/heros-avatar/0000.png"
import { useEffect, useState } from "react"


const findInHeros = (heroName) => {
    const val = allHeros.filter(hero => hero.name === heroName)
    return val[0] ? val[0].id : null
}

const findHeroObjectById = (id) => {
    const val = allHeros.filter(hero => hero.id === Number(id))
    return val[0] ? val[0] : null
}

const CTeams = () => {
    // const keyNames = Object.keys(counters);
    // const newCounters = {}
    // for (const key of keyNames) {
    //     const value = findInHeros(key)
    //     if (value !== null) {
    //         const herosIndex = counters[key].map((heroName) => {
    //             const valueOfHero = findInHeros(heroName)
    //             if (valueOfHero !== null) {
    //                 return valueOfHero
    //             }
    //         })
    //         newCounters[value] = herosIndex
    //     }
    // }
    // console.log(newCounters)
    const [heroIndex, setHeroIndex] = useState(0)
    const [counters, setCounters] = useState([])
    const [hero, setHero] = useState(null)

    useEffect(() => {
        if (heroIndex > 0) {
            const heroLocal = findHeroObjectById(heroIndex)
            console.log(heroLocal, countersIndex[heroIndex].map(idx => findHeroObjectById(idx)))
            setCounters(countersIndex[heroIndex].map(idx => findHeroObjectById(idx)))
            setHero(heroLocal)
        } else {
            console.log("set to zero")
            setCounters([])
            setHero(null)
        }
    }, [heroIndex])

    return <>
        <div className="flex justify-center">
            <div className="flex flex-col">
                <div>
                    <h1 className="text-3xl mt-5">Heros counters</h1>
                    <div>
                        <p>Choose an hero from the dropdown box, and you will see counter-heros for this one. </p>
                        <p>Keep in mind that these are suggestions from HeroWarsCentral site.</p>
                        <p>If something is wrong, report it to discord channel!</p>
                    </div>
                    <div className="mt-5 flex flex-row items-center">
                        <div>
                            <select className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={heroIndex} onChange={e => setHeroIndex(e.target.value)}>
                                <option value={0}> please choose a hero</option>
                                {
                                    (allHeros.map(hero => <option key={hero.id} value={hero.id}>{hero.name}</option>))
                                }
                            </select>
                        </div>
                        <div>
                            {hero ? <><img className="ml-2 rounded-full border-black border-2 " width={40} src={require('../data/heros-avatar/' + makeString(hero.id))} alt={hero.name} /></> : null}
                        </div>
                    </div>
                    <div className="mt-5">
                        {counters.length > 0 ? <div>Countered by these heros (best on the left): </div> : null}
                    </div>
                </div>
                <div className="flex justify-between">
                    {counters.map(hero =>
                        <AvatarHero key={hero.id} hero={hero} />
                    )}
                </div>


            </div>
        </div>
    </>
}

const makeString = (id) => {
    return String(id).padStart(4, '0') + '.png'
}
const AvatarHero = ({ hero }) => {
    return (
        <>
            {hero ?
                <div className="text-sm flex items-center mb-1 mx-1 border-2 py-1 pr-3 pl-1 rounded-xl shadow-md">
                    <img className="rounded-full border-black border-2 " width={48} src={require('../data/heros-avatar/' + makeString(hero.id))} alt={hero.name} />
                    <span className="font-semibold ml-1">{hero.name}</span>
                </div> : <img width={0} src={blank} alt="blank" />}
        </>
    )

}

const AvatarPet = ({ pet }) => {
    return (
        <>
            {pet ?
                <div className="text-sm flex items-center mb-1">
                    <img width={48} src={require('../data/pets-avatar/' + pet.name + '.png')} alt={pet.name} />
                    <span className="font-semibold ml-2">{pet.id} - {pet.name}</span>
                </div> : <img width={0} src={blank} alt="blank" />}
        </>
    )

}
export default CTeams