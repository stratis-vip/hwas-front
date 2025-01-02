import Battles from './battles'
import { getFromDate } from './functions'
import TeamCreator from "./team-creator"

console.log(getFromDate("2024-12-25", true))

const Help = () => {
    return (
        <div className=" flex flex-col items-center w-full">
            <Battles />
            <TeamCreator />
        </div>
    )
}






export default Help

