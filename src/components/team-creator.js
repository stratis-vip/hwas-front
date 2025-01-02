import { useEffect, useState } from "react"
import HeroSelect from "./hero-select"
import { findHeroObjectById, findPetObjectById } from "./hero-select"
import raw from '../data/data.csv'
import { allPets } from "../data/pets-avatar/pets"
import { getHeroNumberFromShortName, getPetNumberFromShortName } from "./functions"
import AvatarHero from "./avatar-hero"

const TeamCreator = () => {
    const [teamHero, setTeamHero] = useState([])
    const [teamPet, setTeamPet] = useState([])
    const [heroIndex, setHeroIndex] = useState(0)
    const [hero, setHero] = useState(null)

    const [petIndex, setPetIndex] = useState(-1)
    const [pet, setPet] = useState(null)
    const [script, setScript] = useState("")
    const [power, setPower] = useState(0)
    const [mainPet, setMainPet] = useState(0)

    useEffect(() => {
        if (heroIndex > 0) {
            const heroLocal = findHeroObjectById(heroIndex)
            setHero(heroLocal)
        } else {
            setHero(null)
        }
    }, [heroIndex])

    useEffect(() => {
        if (petIndex >= 0) {
            const petLocal = findPetObjectById(petIndex)
            setPet(petLocal)
        } else {
            setPet(null)
        }
    }, [petIndex])

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


    useEffect(() => {

        const obj = {
            team: teamHero.map(t => t.id),
            pets: teamPet.map(t => t.id),
            instructions: null,
            mainPet: mainPet,
            power: null
        }
        if (script !== "" && script.length > 1) {
            obj.instructions = script
        }
        if (Number(power) > 0) {
            obj.power = Number(power)
        }

        console.log('Final object', obj)

    }, [teamHero, teamPet, script, mainPet, power])


    const clearTeam = () => {
        setTeamHero([])
        setTeamPet([])
        setHeroIndex(0)
        setHero(null)
        setPetIndex(-1)
        setPet(null)
        setScript("")
    }


    const addHeroIfNotExists = (localHeroIdx, localPetIdx) => {
        const heroIds = teamHero.map(t => Number(t.id))
        const petIds = teamPet.map(t => Number(t.id))
        let isPetOk = false
        let isHeroOk = false
        const error = []
        if (petIndex < 0) {

            error.push('Must choose a pet, or "no pet"')
        } else {
            if (petIndex > 0) {
                if (petIds.includes(Number(localPetIdx)) === false) {
                    if (petIds.length < 5) {
                        isPetOk = true

                    } else {
                        error.push("Lineup must have 5 pets the most")
                    }
                } else {
                    error.push(pet.name + ' allready exists!')
                }
            } else {
                isPetOk = true
            }
        }

        if (localHeroIdx > 0) {
            if (heroIds.includes(Number(localHeroIdx)) === false) {
                if (heroIds.length < 5) {
                    isHeroOk = true

                } else {
                    error.push('Lineup must have 5 heros the most')
                }
            } else {
                error.push(hero.name + ' allready exists!')
            }
        }
        if (isHeroOk && isPetOk) {
            setTeamPet([...teamPet, pet])
            setTeamHero([...teamHero, hero])
            setHeroIndex(0)
            setPetIndex(-1)
        } else {
            alert('There are errors. Read console')
            console.log("Errors:", error)
        }
    }

    const calculateResults = () => {
        fetch(raw)
            .then(r => r.text())
            .then(text => {
                const array = text.split("\r\n")
                const obj = {}
                for (const line of array) {
                    const members = line.split(';')
                    const idx = members[0]
                    if (idx === "") { }
                    else {
                        if (idx !== "date time") {
                            if (obj[idx] === undefined) {
                                obj[idx] = []
                            }

                            const battle = {}
                            battle.attacker = {}
                            battle.attacker.id = members[1]
                            battle.attacker.name = members[2]
                            battle.attacker.power = members[3]
                            battle.attacker.team = {}
                            battle.attacker.team = {}
                            if (members[4] !== undefined) {
                                const heros = members[4].split(' ')
                                const [a, ...b] = heros
                                battle.attacker.team.pet = getPetNumberFromShortName(a)
                                battle.attacker.team.heros = b.map(h => getHeroNumberFromShortName(h))

                                if (members[9] !== undefined) {
                                    const pets = members[9].split(' ')
                                    const charPets = pets.map(a => a.substring(0, 3)).filter(p => p !== "")

                                    battle.attacker.team.patronage = charPets.filter(p => p !== "").map(p =>
                                        getPetNumberFromShortName(p)
                                    )
                                    // battle.attacker.team.patronage = pets.map(a => a.substring(0, 3)).map(p => getPetNumberFromShortName(p))
                                } else { debugger }


                            }

                            battle.defender = {}
                            battle.defender.id = members[5]
                            battle.defender.name = members[6]
                            battle.defender.power = members[7]
                            battle.defender.team = {}
                            battle.defender.team = {}
                            if (members[8] !== undefined) {
                                const heros = members[8].split(' ')
                                const p = heros.pop()
                                battle.defender.team.pet = getPetNumberFromShortName(p)
                                battle.defender.team.heros = heros.map(h => getHeroNumberFromShortName(h))
                                if (members[10] !== undefined) {
                                    const pets = members[10].split(' ')
                                    const charPets = pets.map(a => a.substring(0, 3))
                                    battle.defender.team.patronage = charPets.map(p => getPetNumberFromShortName(p))
                                }
                            }

                            obj[idx].push(battle)
                        }
                    }
                }
                console.log('text decoded:', obj);
            });
    }

    return (
        <div className="mt-2">
            <div className="flex flex-col">
                <h1 className="text-center text-4xl font-extrabold">Team Creator</h1>
                <div className="border flex align-middle">
                    <div className=" mx-3 p-1">

                        {/* <div>Hero: {heroIndex}</div> */}
                        <HeroSelect hero={hero} hIndex={heroIndex} setHeroIndex={setHeroIndex} />


                    </div>
                    <div className="flex flex-row items-center ml-1 p-1">
                        <div>
                            {pet?.id > 0 ? <><img className="mr-2 rounded-full border-black border-2 " width={40} src={require('../data/pets-avatar/' + pet.name + '.png')} alt={pet.name} /></> : null}
                        </div>
                        <div>

                            <select disabled={hero === null} className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={petIndex} onChange={e => setPetIndex(e.target.value)}>
                                <option value={-1}> Pease choose a Pet</option>
                                {
                                    (allPets.map(hero => <option key={hero.id} value={hero.id}>{hero.name}</option>))
                                }
                            </select>
                        </div>

                    </div>
                </div>
                <div>

                    {teamHero.map((hero, idx) => {
                        return <div className="flex items-center" key={hero.id}><AvatarHeroWithPet hero={hero} /> {teamPet[idx].name === "No Pet" ? teamPet[idx].name : null}
                            {teamPet[idx].name !== "No Pet" ? <img className="mr-2 rounded-full border-black border-2 " width={40} src={require('../data/pets-avatar/' + teamPet[idx].name + '.png')} alt={teamPet[idx].name} /> : null}

                        </div>
                    })
                    }

                </div>
                <div>
                    <label htmlFor="mainPet" className="mt-5">Main pet </label>
                    <select id="mainPet" className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={mainPet} onChange={e => setMainPet(e.target.value)}>
                        <option value={-1}> Pease choose a Pet</option>
                        {
                            (allPets.map(hero => <option key={hero.id} value={hero.id}>{hero.name}</option>))
                        }
                    </select>
                    {/* {findPetObjectById[mainPet].name !== "No Pet" ? <img className="mr-2 rounded-full border-black border-2 " width={40} src={require('../data/pets-avatar/' + findPetObjectById[mainPet].name+ '.png')} alt={findPetObjectById[mainPet].name} /> : null} */}

                </div>
                <label htmlFor="instructions" className="mt-5">Instructions (optional)</label>
                <textarea id="instructions" className="border py-3 px-2 text-lg font-light italic" rows="5" cols={50} value={script} onChange={e => setScript(e.target.value)} />
                <label htmlFor="power" className="mt-5">Team Power (optional)</label>
                <input id="power" type="number" className="border py-3 px-2 text-lg font-light italic" value={power} onChange={e => setPower(e.target.value)} />
                <div className="flex mt-5">
                    <div className={teamHero.length === 0 && hero === null ? "hidden" : "mr-2"}><MyButton title={"Add to Lineup"} callback={e => addHeroIfNotExists(heroIndex, petIndex)} /></div>
                    <div className={teamHero.length === 0 ? "hidden" : ""}><MyButton title={"Clear Team"} callback={e => clearTeam()} /></div>
                </div>
                {/* <Reader /> */}
                <MyButton title={"Calculate Results"} callback={calculateResults} />
            </div>
        </div>
    )
}


const AvatarHeroWithPet = ({ hero }) => {


    return (
        <div className="flex align-middle mt-1">
            <div><AvatarHero hero={hero} /></div>

        </div>
    )
}

const MyButton = ({ title, callback }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={callback} >{title}</button>
    )
}

export default TeamCreator