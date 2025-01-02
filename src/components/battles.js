import { useEffect, useState } from "react"
import Team from './team'
import { getFromDate } from "./functions"


const setFiveDaysBefore = () => {
    let d = new Date()
    d.setDate(d.getDate() - 5)
    return d.toISOString().slice(0, 10)
}

const Battles = () => {
    const [battleObject, setBattleObject] = useState([])
    const [referenceBattleObject, setReferenceBattleObject] = useState([])
    const [dt, setDate] = useState(setFiveDaysBefore())
    const [filter, setFilter] = useState({ att: { name: null, team: null }, def: { name: null, team: null } })
    const [isFiltered, setIsFiltered] = useState(false)
    const [correctInput, setCorrectInput] = useState({ att: { name: false, team: false } })



    const resetBattles = (fromDate) => {
        if (fromDate !== "") {
            const battleObject = getFromDate(fromDate)
            setBattleObject([...battleObject])
            setReferenceBattleObject([...battleObject])
        } else {
            setBattleObject([])
            setReferenceBattleObject([])
        }
    }

    useEffect(() => {
        resetBattles(dt)
    }, [dt])

    useEffect(() => {

    })

    //info at console
    /////////////////////////////////////////////////////////////////

    useEffect(() => {
        if (dt) { console.log('Date chnged to ', dt) }
    }, [dt])

    useEffect(() => {
        if (filter) {
            console.log("Filter changed to ", filter.att)
        }
    }, [filter])

    useEffect(() => {
        console.log("CorrectInput", correctInput.att)
    }, [correctInput])

    useEffect(() => {
        if (battleObject) { console.log("battleObject is chanded to ", battleObject) }
    }, [battleObject])


    useEffect(() => {
        console.log("isFiltered ", isFiltered)
    }, [isFiltered])
    //end of info console
    /////////////////////////////////////////////////////////////////

    const isValidHeroName = (heroName) => {
        if (referenceBattleObject === null) return false;
        return referenceBattleObject.filter(bat => bat.attacker.name.toLowerCase() === heroName.toLowerCase()).length > 0;
    }


    const handleAttackerNameChange = (name) => {

        setFilter((prev) => ({
            ...prev,
            att: { ...prev.att, name }
        }));
        if (name.length > 2 && isValidHeroName(name)) {
            setCorrectInput((prev) => ({
                ...prev,
                att: { ...prev.att, name: true }
            }))
            setBattleObject(getFromDate(dt).filter(f => f.attacker.name.toLowerCase() === name.toLowerCase()))
            setIsFiltered(true)
        } else {
            setBattleObject(getFromDate(dt))
            setIsFiltered(false)
            setCorrectInput((prev) => ({
                ...prev,
                att: { ...prev.att, name: false }
            }));
        }
    };

    // const onChangeBattles = () => {
    //     let newObj = null
    //     if (!isFiltered) {
    //         newObj = getFromDate(dt).filter(f => f.attacker.name.toLowerCase() === filter.att.name.toLowerCase())
    //         setIsFiltered(true)
    //     } else {
    //         newObj = getFromDate(dt)
    //         setIsFiltered(false)
    //     }
    //     setBattleObject(newObj)

    // }

    const onChangeDate = (e) => {
        setDate(e.currentTarget.value)
    }

    return (
        <div>
            <div className="text-center text-4xl font-extrabold">Find Battles WON by our mates</div>
            <h1 className="text-2xl">Instructions</h1>
            <p className="mb-1">Set the date you want to check from! System automaticaly set 5 days before.</p>
            <p className="mb-1">Complete filters if you want to get results for certain user or team Line up. Whern a flter is entered correct, text is turn to green! </p>
            <p className="mb-1"><span className="font-semibold italic">Attacker</span> and <span className="font-semibold italic">Defender</span> texts is reffering to user name (for example stratis - case insensitive)</p>
            <p className="mb-1"><span className="font-semibold italic">Attacker</span> and <span className="font-semibold italic">Defender team</span> texts is reffering to heros. Heros must entered by 3first digits.</p>
            <p className="text-red-400 text-center font-extrabold text-3xl">Only attacker filter is working right now!!!! </p>


            <div className="flex items-center  my-2 justify-center mt-4">
                <label className="" htmlFor="fromDate">Search Battles from: </label>
                <input className="border rounded-lg px-2 py-1 mx-2" value={dt} type="date" onChange={onChangeDate} />
                <span>{battleObject.length > 0 ? battleObject.length + " battles won" : "no battles recorded"}</span>
            </div>

            <div className="flex justify-around items-center">
                <h1>Filters</h1>
                <div className="flex w-5/6 justify-around">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="attacker">Attacker</label>
                        <div className={correctInput.att.name === true ? "text-green-600" : "text-red-600"}>
                            <input className="border rounded-lg px-2 py-1  w-2/3" id="attacker" type="text" placeholder="attacker name"
                                value={filter.att?.name !== null ? filter.att?.name : ""} onChange={e => handleAttackerNameChange(e.currentTarget.value)} />
                        </div>
                        <label className="mt-2" htmlFor="attTeam">Attacker Team</label>
                        <input className="border rounded-lg px-2 py-1 w-[95%]" id="attTeam" type="attTeam" placeholder="attacker team"
                            value={filter.att?.team !== null ? filter.att?.name : ""} onChange={e => setFilter({ ...filter, att: { ...filter.att, team: e.currentTarget.value } })} />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="defender">Defender</label>
                        <input className="border rounded-lg px-2 py-1 w-2/3" id="defender" type="text" placeholder="defender name"
                            value={filter.def?.name !== null ? filter.def?.name : ""} onChange={e => setFilter({ ...filter, def: { ...filter.def, name: e.currentTarget.value } })} />
                        <label className="mt-2" htmlFor="defTeam">Defender Team</label>
                        <input className="border rounded-lg px-2 py-1 w-[95%]" id="defeTeam" type="attTeam" placeholder="defender team"
                            value={filter.def?.team !== null ? filter.def?.name : ""} onChange={e => setFilter({ ...filter, def: { ...filter.def, team: e.currentTarget.value } })} />
                    </div>
                </div>
            </div>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">results </span>
            </div>
            <div className="flex">
                <div className="mr-5 pr-12 border-black border-r-4">{battleObject.map((bat, idx) => {
                    return <Team key={idx} parentTeam={bat.attacker} />
                })}</div>
                <div>{battleObject.map((bat, idx) => {
                    return <Team key={idx} parentTeam={bat.defender} />
                })}</div>
            </div>
        </div>
    )
}

export default Battles