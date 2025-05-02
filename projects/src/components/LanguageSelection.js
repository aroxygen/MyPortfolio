import React from 'react';

const LanguageSelection = () => {
  const languages = [
    { code: 'US', name: 'English', flag: '🇺🇸' },
    { code: 'TR', name: 'Turkish', flag: '🇹🇷' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'FR', name: 'French', flag: '🇫🇷' },
    { code: 'DE', name: 'German', flag: '🇩🇪' },
    { code: 'JP', name: 'Japanese', flag: '🇯🇵' },
    { code: 'CN', name: 'Chinese', flag: '🇨🇳' },
    { code: 'KR', name: 'Korean', flag: '🇰🇷' },
    { code: 'RU', name: 'Russian', flag: '🇷🇺' },
    { code: 'BR', name: 'Portuguese', flag: '🇧🇷' },
  ];

  const handleLanguageSelect = (language) => {
    console.log(`Selected Language: ${language.name}`);
    // Additional logic for language selection
  };

  return (
    <div className="language-selection">
      <h1>CrownRealms</h1>
      <h2>Select Your Language</h2>
      <div className="flag-grid">
        {languages.map((lang) => (
          <button 
            key={lang.code} 
            onClick={() => handleLanguageSelect(lang)}
            className="flag-button"
          >
            {lang.flag}
          </button>
        ))}
      </div>
      <button className="continue-button">Continue</button>
    </div>
  );
};

export default LanguageSelection;