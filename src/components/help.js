import { useEffect, useState } from "react"
import AvatarHero  from "./avatar-hero"
import HeroSelect, { findHeroObjectById } from "./hero-select"
// import { countersIndex } from "../data/heros-avatar/heros"
import { allPets } from "../data/pets-avatar/pets"

const Help = () => {
    const [teamHero, setTeamHero] = useState([])
    const [heroIndex, setHeroIndex] = useState(0)
    // const [counters, setCounters] = useState([])
    const [hero, setHero] = useState(null)

    const [petIndex, setPetIndex] = useState(0)
    const [pet, setPet] = useState(null)

    useEffect(() => {

        if (petIndex > 0) {
            const petArray = allPets.filter(pt => pt.id === Number(petIndex))
            if (petArray.length === 1) {
                setPet(petArray[0])
            }
        } else {
            setPet(null)

        }
    }, [petIndex])

    const clearTeam = () => {
        setTeamHero([])
        setHeroIndex(0)
        setHero(null)
    }

    const addIfNotExists = (localHeroIdx) => {
        const ids = teamHero.map(t => t.id)

        if (localHeroIdx > 0) {
            if (ids.includes(Number(localHeroIdx)) === false) {
                if (ids.length < 5) {
                    setTeamHero([...teamHero, hero])
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
            // setCounters(countersIndex[heroIndex].map(idx => findHeroObjectById(idx)))
            setHero(heroLocal)
        } else {
            console.log("set to zero")
            // setCounters([])
            setHero(null)
        }
    }, [heroIndex])

    useEffect(() => {
        console.log('official team ', teamHero.map(t => t.id))
    }, [teamHero])

    return (
        <div className="w-1/2 flex flex-col items-center">
            <div className="text-3xl">Helper</div>
            <h1>Team</h1>
            <div className="border flex align-middle">
                <div className=" mx-3 p-1">

                    {/* <div>Hero: {heroIndex}</div> */}
                    <HeroSelect hero={hero} hIndex={heroIndex} setHeroIndex={setHeroIndex} />
                    {teamHero.map(hero => <AvatarHeroWithPet key={hero.id} hero={hero} />)}
                </div>
                <div className="flex flex-row items-center ml-1 p-1">
                    <div>
                        {pet ? <><img className="mr-2 rounded-full border-black border-2 " width={40} src={require('../data/pets-avatar/' + pet.name + '.png')} alt={pet.name} /></> : null}
                    </div>
                    <div>
                        <select className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={petIndex} onChange={e => setPetIndex(e.target.value)}>
                            <option value={0}> please choose a pet</option>
                            {
                                (allPets.map(hero => <option key={hero.id} value={hero.id}>{hero.name}</option>))
                            }
                        </select>
                    </div>

                </div>
            </div>
            <div className="flex mt-5">
                <div className="mr-2"><MyButton title={"Add to Lineup"} callback={e => addIfNotExists(heroIndex)} /></div>
                <div><MyButton title={"Clear Team"} callback={e => clearTeam()} /></div>
            </div>
        </div>
    )
}

const MyButton = ({ title, callback }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={callback} >{title}</button>
    )
}

const AvatarHeroWithPet = ({ hero }) => {


    return (
        <div className="flex align-middle my-5">
            <div><AvatarHero hero={hero} /></div>

        </div>
    )
}

export default Help