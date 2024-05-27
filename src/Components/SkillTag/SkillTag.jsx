
import PropTypes from 'prop-types';
import './SkillTag.scss';

const SkillTag = ({ name, img }) => {
    return (
        <div className="skillContainer">
            <div className="skillIcon">
                <img src={img} alt={`Logo for ${name}`} />
            </div>
            <div className="skillName">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

SkillTag.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default SkillTag;