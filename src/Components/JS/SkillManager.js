// SkillsManager.js
import SkillCard from "../SkillCard/SkillCard"; // Adjust the import path as necessary
import { useCallback } from 'react'
const SkillsManager = {
    createNewSkillCard(skillNameText, skillDescription) {
        return <SkillCard skillNameText={skillNameText} skillDescription={skillDescription} />;
    },
    removeSkillCard(indexToRemove) {
        setSkills(prevSkills => prevSkills.filter((_, index) => index !== indexToRemove));
    },
};

export default SkillsManager;


