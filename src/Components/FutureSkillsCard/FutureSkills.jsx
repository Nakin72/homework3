import SkillTag from "../SkillTag/SkillTag"
import Logos from "../JS/LogoSelector"
import './FutureSkills.scss'
const FutureSkills = () => {
    return (
        <>
        
            <div className="FutureSkills_tab">
            <h1>Желаемые навыки</h1>
                <SkillTag name={Logos[6]["name"]} img={Logos[6]["img"]} />
                <SkillTag name={Logos[7]["name"]} img={Logos[7]["img"]} />
                <SkillTag name={Logos[8]["name"]} img={Logos[8]["img"]} />
                <SkillTag name={Logos[9]["name"]} img={Logos[9]["img"]} />
                <SkillTag name={Logos[10]["name"]} img={Logos[10]["img"]} />
                <SkillTag name={Logos[11]["name"]} img={Logos[11]["img"]} />
                <SkillTag name={Logos[12]["name"]} img={Logos[12]["img"]} />
                <SkillTag name={Logos[13]["name"]} img={Logos[13]["img"]} />
                <SkillTag name={Logos[14]["name"]} img={Logos[14]["img"]} />
                <SkillTag name={Logos[15]["name"]} img={Logos[15]["img"]} />
            
            </div>
        </>
    )
}


export default FutureSkills;