import { useEffect, useState } from "react"
import AvatarHeroPet from "./avatar-hero-pet"
import { findHeroObjectById, findPetObjectById } from "./hero-select"
import { fromYYYYMMDD } from "./functions"

export const Team = ({ parentTeam }) => {
    const [info, setInfo] = useState(null)
    const [pet, setPet] = useState(null)
    const [attackerHeros, setAttackerHeros] = useState(null)

    useEffect(() => {
        if (parentTeam !== null) {
            const { date, id, name, power, team } = parentTeam
            setInfo({ date, id, name, power })
            const teamPet = findPetObjectById(team.pet)
            const teamAttackerHeros = team.heros.map(t => findHeroObjectById(t))
            const teamAttackerPets = team.patronage.map(t => findPetObjectById(t))
            const teamAttacker = []
            for (let i = 0; i < 5; i++) {
                teamAttacker.push({ hero: teamAttackerHeros[i], pet: teamAttackerPets[i] })
            }
            setAttackerHeros(teamAttacker)
            setPet(teamPet)
        }
    }, [parentTeam])


    return (
        <>
            <div className="flex items-center justify-end">
                <div className="text-sm mr-2 flex flex-col items-end ">
                    <div>{info ? fromYYYYMMDD(info.date) : null}</div>
                    <div>{info ? info.name : null}</div>
                    <div>{info ? Number(info.power).toLocaleString() : null}</div>
                </div>
                <div className="flex ">
                    <div className="flex pt-4 px-[5px] pb-[5px] rounded-xl border items-end">
                        {pet ? <img className=" rounded-full bg-black mr-1" width={44} src={require('../data/pets-avatar/' + pet.name + '.png')} alt={pet.name} /> : null}
                        {attackerHeros ? attackerHeros.map(p =>
                            <AvatarHeroPet key={p.hero.id} hero={p.hero} pet={p.pet} />
                        )
                            : null}
                    </div>

                </div>
            </div>

        </>
    )
}


export default Team