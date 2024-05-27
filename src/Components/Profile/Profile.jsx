import Avatar from "../../Avatars/AvatarLogo.jpg"
import SkillTag from "../SkillTag/SkillTag"
import Logos from "../JS/LogoSelector"
import Contacts from "../Contacts/Contacts"
import './Profile.scss'
var name = "Никита Наумов";
var age = "24 года"
const ProfileRender = () => {
    return (
        <div className="avatarCard">
            <div className="avatarLogo">
                <img src={Avatar} />
            </div>
            <div className="dataCard">
                <div className="personName">
                    <h1>{name}, {age}</h1>
                </div>
                <Contacts />
            </div>
        </div>

    )
}


export default ProfileRender;