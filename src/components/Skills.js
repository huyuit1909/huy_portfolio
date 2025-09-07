import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaDatabase,
  FaMobile,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaRocket,
  FaCode,
  FaLanguage,
  FaUsers,
  FaHandshake,
  FaCogs,
  FaCloud,
  FaProjectDiagram,
  FaCogs as FaGears,
  FaFileAlt,
  FaSitemap,
  FaLightbulb,
  FaChartLine
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiRedis } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: #a1a1aa;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const TabButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.isActive ? '#4f46e5' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.isActive 
    ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' 
    : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.isActive ? '#ffffff' : '#a1a1aa'};
  border-radius: 2rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    border-color: #4f46e5;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const TabContent = styled(motion.div)`
  min-height: 200px;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.isHighlight 
    ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(124, 58, 237, 0.1))' 
    : 'rgba(255, 255, 255, 0.03)'};
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: ${props => props.isHighlight 
    ? '2px solid rgba(79, 70, 229, 0.3)' 
    : '1px solid rgba(255, 255, 255, 0.08)'};
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.isHighlight 
      ? 'linear-gradient(90deg, #4f46e5, #7c3aed, #4f46e5)' 
      : 'transparent'};
    background-size: 200% 100%;
    animation: ${props => props.isHighlight ? 'shimmer 3s ease-in-out infinite' : 'none'};
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: ${props => props.isHighlight ? '#6366f1' : '#4f46e5'};
    box-shadow: ${props => props.isHighlight 
      ? '0 20px 40px rgba(79, 70, 229, 0.3)' 
      : '0 10px 30px rgba(0, 0, 0, 0.2)'};
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const CategoryTitle = styled.h3`
  color: ${props => props.isHighlight ? '#ffffff' : '#a1a1aa'};
  font-size: ${props => props.isHighlight ? '1.6rem' : '1.3rem'};
  font-weight: ${props => props.isHighlight ? '700' : '600'};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  z-index: 1;
  
  ${props => props.isHighlight && `
    background: linear-gradient(135deg, #ffffff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    &::after {
      content: '★';
      position: absolute;
      right: -2rem;
      top: 50%;
      transform: translateY(-50%);
      color: #4f46e5;
      font-size: 1.2rem;
      animation: pulse 2s ease-in-out infinite;
    }
  `}
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
    50% { opacity: 0.7; transform: translateY(-50%) scale(1.1); }
  }
`;

const SkillsList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #4f46e5 rgba(255, 255, 255, 0.1);
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #4f46e5;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #6366f1;
  }
  
  /* Hide scrollbar for mobile */
  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-width: 110px;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: rgba(79, 70, 229, 0.08);
    border-color: rgba(79, 70, 229, 0.3);
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 25px rgba(79, 70, 229, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 2.2rem;
  color: #4f46e5;
  margin-bottom: 0.8rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  
  ${SkillItem}:hover & {
    color: #6366f1;
    transform: scale(1.1);
  }
`;

const SkillName = styled.span`
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 1;
  line-height: 1.3;
  transition: color 0.3s ease;
  
  ${SkillItem}:hover & {
    color: #a5b4fc;
  }
`;


const Skills = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const skillCategories = [
    {
      title: 'プロジェクト管理',
      isHighlight: true,
      skills: [
        { name: 'プロジェクト統括', icon: <FaRocket /> },
        { name: 'Agile/Scrum', icon: <FaCode /> },
        { name: 'リソース管理', icon: <FaDatabase /> },
        { name: '品質管理', icon: <FaRocket /> },
        { name: 'リスク管理', icon: <FaCode /> },
        { name: '進捗管理', icon: <FaDatabase /> },
        { name: '予算管理', icon: <FaRocket /> },
        { name: 'ステークホルダー管理', icon: <FaUsers /> }
      ]
    },
    {
      title: '上流工程',
      isHighlight: true,
      skills: [
        { name: '要件定義', icon: <FaFileAlt /> },
        { name: '要件分析', icon: <FaChartLine /> },
        { name: 'システム設計', icon: <FaProjectDiagram /> },
        { name: 'アーキテクチャ設計', icon: <FaSitemap /> },
        { name: 'プロトタイプ設計', icon: <FaLightbulb /> },
        { name: 'ユーザーストーリー作成', icon: <FaFileAlt /> },
        { name: 'ビジネス分析', icon: <FaChartLine /> },
        { name: '技術選定', icon: <FaGears /> }
      ]
    },
    {
      title: '技術スキル',
      isHighlight: false,
      skills: [
        { name: 'Salesforce', icon: <FaCloud /> },
        { name: 'Workato', icon: <FaCogs /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Flask', icon: <FaPython /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Figma', icon: <FaCode /> },
        { name: 'RPA', icon: <FaCogs /> },
        { name: 'API連携', icon: <FaDatabase /> }
      ]
    },
    {
      title: '言語・コミュニケーション',
      isHighlight: false,
      skills: [
        { name: '日本語（N1）', icon: <FaLanguage /> },
        { name: '英語（TOEIC640）', icon: <FaLanguage /> },
        { name: 'ベトナム語', icon: <FaLanguage /> },
        { name: '通訳・翻訳', icon: <FaLanguage /> }
      ]
    },
    {
      title: 'マネジメント',
      isHighlight: false,
      skills: [
        { name: 'チーム統括', icon: <FaUsers /> },
        { name: '海外チーム連携', icon: <FaUsers /> },
        { name: 'クライアント折衝', icon: <FaHandshake /> },
        { name: '要件定義', icon: <FaCode /> }
      ]
    }
  ];


  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        スキル・専門性
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        8年間の経験で培った技術力とマネジメントスキルをご紹介いたします
      </SectionSubtitle>
      
      <TabContainer>
        <TabButtons>
          {skillCategories.map((category, index) => (
            <TabButton
              key={category.title}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </TabButton>
          ))}
        </TabButtons>
        
        <TabContent
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SkillCategory
            isHighlight={skillCategories[activeTab].isHighlight}
            whileHover={{ scale: 1.02 }}
          >
            <CategoryTitle isHighlight={skillCategories[activeTab].isHighlight}>
              {skillCategories[activeTab].title}
            </CategoryTitle>
            <SkillsList>
              {skillCategories[activeTab].skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: skillIndex * 0.05 
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        </TabContent>
      </TabContainer>
      
    </SkillsSection>
  );
};

export default Skills;
