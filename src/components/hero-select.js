import { makeString } from "./avatar-hero"
import { allHeros,  countersIndex } from "../data/heros-avatar/heros"

export const findHeroObjectById = (id) => {
    const val = allHeros.filter(hero => hero.id === Number(id))
    return val[0] ? val[0] : null
}

const HeroSelect = ({hIndex, setHeroIndex, hero}) => {

    return (
        <div className="mt-5 flex flex-row items-center">
            <div>
                <select className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={hIndex} onChange={e => setHeroIndex(e.target.value)}>
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
    )
}

export default HeroSelect