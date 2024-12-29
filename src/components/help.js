import { useEffect, useState } from "react"
import AvatarHero from "./avatar-hero"
import HeroSelect, { findHeroObjectById } from "./hero-select"
import { countersIndex } from "../data/heros-avatar/heros"
import { TfiEmail } from "react-icons/tfi"

const Help = () => {


    const [team, setTeam] = useState([])
    const [heroIndex, setHeroIndex] = useState(0)
    const [counters, setCounters] = useState([])
    const [hero, setHero] = useState(null)

    const clearTeam = () => {
        setTeam([])
        setHeroIndex(0)
        setHero(null)
    }

    const addIfNotExists = (localHeroIdx) => {

        const ids = team.map(t => t.id)

        if (localHeroIdx > 0) {
            if (ids.includes(Number(localHeroIdx)) === false) {
                if (ids.length < 5) {
                    setTeam([...team, hero])
                } else {
                    alert('Lineup must have 5 heros the most')
                }
            } else {
                alert(hero.name + ' allready exists!')
            }
        }

    }

    useEffect(() => {
        if (heroIndex > 0) {
            const heroLocal = findHeroObjectById(heroIndex)
            setCounters(countersIndex[heroIndex].map(idx => findHeroObjectById(idx)))
            setHero(heroLocal)
        } else {
            console.log("set to zero")
            setCounters([])
            setHero(null)
        }
    }, [heroIndex])

    useEffect(() => {

        console.log('official team ', team.map(t => t.id).sort())

    }, [team])

    return (
        <>
            <div className="text-3xl">Helper</div>
            <div className="border ">
                <h1>Team</h1>
                {/* <div>Hero: {heroIndex}</div> */}
                <HeroSelect hero={hero} hIndex={heroIndex} setHeroIndex={setHeroIndex} />
                {team.map(hero => <AvatarHero key={hero.id} hero={hero} />)}
            </div>
            <MyButton title={"Add to Lineup"} callback={e => addIfNotExists(heroIndex)} />
            <MyButton title={"Clear Team"} callback={e => clearTeam()} />

        </>
    )
}


const MyButton = ({ title, callback }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={callback} >{title}</button>
    )
}

export default Help