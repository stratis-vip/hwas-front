import { countersIndex } from "../data/heros-avatar/heros"
import { useEffect, useState } from "react"
import AvatarHero from "./avatar-hero"
import HeroSelect, { findHeroObjectById } from "./hero-select"

// const findInHeros = (heroName) => {
//     const val = allHeros.filter(hero => hero.name === heroName)
//     return val[0] ? val[0].id : null
// }

const CTeams = () => {
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
                    <div className="my-2 mb-4">
                        <p>Choose an hero from the dropdown box, and you will see counter-heros for this one. </p>
                        <p>Keep in mind that these are suggestions from <a className="text-blue-500 font-extralight" rel="noreferrer" target="_blank" href="https://www.herowarscentral.com/post/top-5-counters-to-every-hero">HeroWarsCentral site</a>.</p>
                        <p>Isaac, Julius and Polaris suggestions are from <a className="text-blue-500 font-extralight" rel="noreferrer" target="_blank" href="https://omg.rocks/hero-counters-hero-wars-dominion-era">omg.rocks site</a>.</p>
                        <p>If something is wrong, report it to discord channel!</p>
                    </div>
                    <HeroSelect hIndex={heroIndex} setHeroIndex={setHeroIndex} hero={hero} />
                    <div className="mt-5">
                        {counters.length > 0 ? <div>Countered by these heros (best on the left): </div> : null}
                    </div>
                </div>
                <div className="flex justify-between">
                    {heroIndex > 0 && counters.length === 0 
                    ? <span className="text-red-400 font-semibold">There is no known counter yet!</span>
                    : null}
                    {counters.map(hero =>
                        <AvatarHero key={hero.id} hero={hero} />
                    )}
                </div>


            </div>
        </div>
    </>
}




// const AvatarPet = ({ pet }) => {
//     return (
//         <>
//             {pet ?
//                 <div className="text-sm flex items-center mb-1">
//                     <img width={48} src={require('../data/pets-avatar/' + pet.name + '.png')} alt={pet.name} />
//                     <span className="font-semibold ml-2">{pet.id} - {pet.name}</span>
//                 </div> : <img width={0} src={blank} alt="blank" />}
//         </>
//     )

// }
export default CTeams