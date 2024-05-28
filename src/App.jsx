import { useState } from 'react'
import './App.css'
import UniversalButton from './Components/UniversalButton/UniversalButton'
import SkillsManager from './Components/JS/SkillManager.js'; // Adjust the path as necessary

import { useCallback } from 'react'
import React from 'react'

function App() {
  const [skills, setSkills] = useState([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillDescription, setNewSkillDescription] = useState('');

  function addNewSkill(skillNameText, skillDescription) {
    const newSkillCard = React.cloneElement(
      SkillsManager.createNewSkillCard(skillNameText, skillDescription),
      { removeCallback: () => setSkills(skills.filter((_, index) => index !== skills.indexOf(newSkillCard))) }
    );
    setSkills(prevSkills => [...prevSkills, newSkillCard]);
  }

  return (
    <div>
      {skills.map((skill, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(skill, {
            removeCallback: () => setSkills(skills.filter((_, i) => i !== index))
          })}
        </React.Fragment>
      ))}
      <input
        type="text"
        placeholder="Skill Name"
        value={newSkillName}
        onChange={(e) => setNewSkillName(e.target.value)}
      />
      <textarea
        placeholder="Skill Description"
        value={newSkillDescription}
        onChange={(e) => setNewSkillDescription(e.target.value)}
      />
      <button onClick={() => addNewSkill(newSkillName, newSkillDescription)}>Add Skill</button>
    </div>
  );
}

export default App
