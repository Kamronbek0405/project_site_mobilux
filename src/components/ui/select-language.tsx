import React from 'react'

interface SelectLanguageType {
  className?: string;
}

export const SelectLanguage: React.FC<SelectLanguageType> = ({ className }) => {
  return (
    <select className={className}>
      <option value="uz">O'zbek</option>
      <option value="ru">Rus</option>
      <option value="en">Ingliz</option>
    </select>
  )
}
