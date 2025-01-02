import { makeString } from "./avatar-hero"
import blank from "../data/heros-avatar/0000.png"

const AvatarHeroPet = ({ hero, pet }) => {
    return (
        <>
            {hero ?
                <div className="" >
                    <div className="relative"><img className="" width={60} src={require('../data/heros-avatar/' + makeString(hero.id))} alt={hero.name} />
                        <div className="absolute top-[-12px] ">{pet.id > 0 ? <img className=" rounded-full bg-black" width={24} src={require('../data/pets-avatar/' + pet.name + '.png')} alt={pet.name} /> : null}</div>
                    </div>
                </div > : <img width={0} src={blank} alt="blank" />
            }
        </>
    )

}

export default AvatarHeroPet