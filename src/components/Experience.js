import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  
  &:nth-child(odd) {
    left: 0;
    padding-right: 2rem;
    
    @media (max-width: 768px) {
      left: 0;
      width: 100%;
      padding-right: 0;
      padding-left: 3rem;
    }
  }
  
  &:nth-child(even) {
    left: 50%;
    padding-left: 2rem;
    
    @media (max-width: 768px) {
      left: 0;
      width: 100%;
      padding-left: 3rem;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #4f46e5;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    
    ${props => props.isEven ? `
      right: -20px;
      border-left-color: rgba(255, 255, 255, 0.05);
    ` : `
      left: -20px;
      border-right-color: rgba(255, 255, 255, 0.05);
    `}
    
    @media (max-width: 768px) {
      left: -20px;
      right: auto;
      border-right-color: rgba(255, 255, 255, 0.05);
      border-left-color: transparent;
    }
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  z-index: 2;
  
  ${props => props.isEven ? `
    right: -25px;
  ` : `
    left: -25px;
  `}
  
  @media (max-width: 768px) {
    left: -25px;
    right: auto;
  }
`;

const TimelineDate = styled.div`
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.div`
  color: #a1a1aa;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TimelineTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(79, 70, 229, 0.15);
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(79, 70, 229, 0.2);
`;

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: <FaBriefcase />,
      date: '2024年12月～',
      title: 'デリバリーマネージャー',
      company: '株式会社MADLAB JAPAN',
      description: '大手小売業のスーパーマーケット向けSalesforce開発プロジェクトを統括。プロジェクト全体の進捗管理、予算・リソース管理、UAT計画・実施・管理を担当。',
      technologies: ['Salesforce', 'Workato', 'BigQuery','プロジェクト管理', '品質管理', '要件定義']
    },
    {
      type: 'work',
      icon: <FaCode />,
      date: '2023年04月～2024年11月',
      title: 'プロダクトマネージャー',
      company: '株式会社ARENT',
      description: '自動化支援アドイン開発とIoT設備点検アプリ開発を担当。顧客へのプロダクト導入支援、スケジュール管理、海外エンジニアとの協業を実施。',
      technologies: ['Revit','C#','プロジェクト管理', '要件定義', '英語コミュニケーション']
    },
    {
      type: 'work',
      icon: <FaGraduationCap />,
      date: '2021年04月～2023年03月',
      title: 'プロダクトマネージャー',
      company: '株式会社マネーフォワード',
      description: '固定資産管理クラウドの新規機能開発とプロダクトロードマップ策定を担当。Figmaを用いたプロトタイプ作成、RPAツール活用による業務自動化を実施。',
      technologies: ['プロダクト管理', 'Figma', 'RPA', 'Agile/Scrum', 'ビジネス分析']
    },
    {
      type: 'work',
      icon: <FaTrophy />,
      date: '2018年04月～2021年04月',
      title: 'ITビジネスアナリスト',
      company: '株式会社FPTソフトウェア',
      description: 'ERPシステム開発プロジェクトで顧客との連携、要件定義、開発チームへの要求伝達を担当。ITドキュメント翻訳、会議通訳、チームマネジメントを実施。',
      technologies: ['ERP', '要件定義', 'プロジェクト管理', '翻訳・通訳', 'チームマネジメント', '品質保証']
    }
  ];

  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        職務経歴
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        8年間のIT経験とキャリアアップの軌跡をご紹介いたします
      </SectionSubtitle>
      
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TimelineIcon isEven={index % 2 === 1}>
              {exp.icon}
            </TimelineIcon>
            
            <TimelineContent isEven={index % 2 === 1}>
              <TimelineDate>{exp.date}</TimelineDate>
              <TimelineTitle>{exp.title}</TimelineTitle>
              <TimelineCompany>{exp.company}</TimelineCompany>
              <TimelineDescription>{exp.description}</TimelineDescription>
              <TimelineTech>
                {exp.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TimelineTech>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
