



import SkillTag from "../SkillTag/SkillTag"
import Logos from "../JS/LogoSelector"
import './Contacts.scss'
const Contacts = () => {
    return (
        <div className="contactCard">


            <h1>Контакты</h1>
            <div className="contactTags">
                <SkillTag name={Logos[16]["name"]} img={Logos[16]["img"]} />
                <SkillTag name={Logos[17]["name"]} img={Logos[17]["img"]} />
                <SkillTag name={Logos[18]["name"]} img={Logos[18]["img"]} />
            </div>
        </div >

    )
}


export default Contacts;