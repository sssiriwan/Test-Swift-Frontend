import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select defaultValue="en" onChange={changeLanguage} style={{ width: 120 }}>
      <Option value="en">English</Option>
      <Option value="th">ภาษาไทย</Option>
    </Select>
  );
};

export default LanguageSwitcher;
