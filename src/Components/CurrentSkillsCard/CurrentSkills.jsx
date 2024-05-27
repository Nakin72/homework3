import SkillTag from "../SkillTag/SkillTag"
import Logos from "../JS/LogoSelector"
import './CurrentSkills.scss'
const CurrentSkills = () => {
    return (
        <>

            <div className="currentSkills_tab">
                <h1>Текущие навыки</h1>
                <SkillTag name={Logos[0]["name"]} img={Logos[0]["img"]} />
                <SkillTag name={Logos[1]["name"]} img={Logos[1]["img"]} />
                <SkillTag name={Logos[2]["name"]} img={Logos[2]["img"]} />
                <SkillTag name={Logos[3]["name"]} img={Logos[3]["img"]} />
                <SkillTag name={Logos[4]["name"]} img={Logos[4]["img"]} />
                <SkillTag name={Logos[5]["name"]} img={Logos[5]["img"]} />

            </div>
        </>
    )
}


export default CurrentSkills;