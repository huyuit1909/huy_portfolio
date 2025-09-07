import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaGlobe } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#4f46e5' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.active ? '#4f46e5' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#a1a1aa'};
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #4f46e5;
    color: #ffffff;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: #4f46e5;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const ProjectIcon = styled.div`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  z-index: 1;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #a1a1aa;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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

const ProjectDetails = styled.div`
  margin-top: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #a1a1aa;
  font-size: 0.9rem;
`;

const DetailLabel = styled.span`
  color: #4f46e5;
  font-weight: 600;
  min-width: 80px;
`;

const DetailValue = styled.span`
  color: #d1d5db;
`;

const ProjectImpact = styled.div`
  background: rgba(79, 70, 229, 0.1);
  border-left: 3px solid #4f46e5;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

const ImpactTitle = styled.h4`
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ImpactText = styled.p`
  color: #a1a1aa;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'スーパーマーケット向けSalesforce開発',
      description: '大手小売業のスーパーマーケット向けSalesforce開発プロジェクト。Workatoを用いたデータ連携ロジック構築、検索画面・承認画面・ダッシュボード開発を担当。',
      image: <FaGlobe />,
      technologies: ['Salesforce', 'Workato', 'プロジェクト管理', 'UAT', '要件定義'],
      category: 'salesforce',
      details: {
        period: '2024年12月〜現在',
        team: '5名（日本・ベトナム）',
        role: 'デリバリーマネージャー',
        budget: '5000万円規模'
      },
      impact: {
        title: 'プロジェクト成果',
        text: 'データ連携処理時間を70%短縮、承認フローを完全自動化し、業務効率を大幅に向上。UAT通過率100%を達成。'
      }
    },
    {
      id: 2,
      title: '自動化支援アドイン開発',
      description: '株式会社ARENTでの自動化支援アドイン開発プロジェクト。顧客へのプロダクト導入支援、海外エンジニアとの協業、スケジュール管理を実施。',
      image: <FaMobile />,
      technologies: ['プロダクト管理', '海外チーム連携', '要件定義', '英語コミュニケーション'],
      category: 'product',
      details: {
        period: '2023年4月〜2024年11月',
        team: '8名（日本・インド）',
        role: 'プロダクトマネージャー',
        budget: '3000万円規模'
      },
      impact: {
        title: 'ビジネス成果',
        text: '顧客導入率を40%向上、開発期間を3ヶ月短縮。海外チームとのコミュニケーション効率を50%改善。'
      }
    },
    {
      id: 3,
      title: 'IoT設備点検アプリ開発',
      description: 'IoT設備点検アプリの開発プロジェクト。顧客ニーズに基づいた要件定義、海外開発チームとの連携、技術仕様の最適化を担当。',
      image: <FaCode />,
      technologies: ['IoT', 'プロダクト管理', '海外チーム連携', '要件定義', '技術調整'],
      category: 'product',
      details: {
        period: '2023年6月〜2024年8月',
        team: '6名（日本・ベトナム）',
        role: 'プロダクトマネージャー',
        budget: '2000万円規模'
      },
      impact: {
        title: '技術革新',
        text: 'IoTセンサーとの連携により点検精度を95%向上。リアルタイム監視機能で設備故障を80%削減。'
      }
    },
    {
      id: 4,
      title: '固定資産管理クラウド',
      description: 'マネーフォワードでの固定資産管理クラウドの新規機能開発。Figmaを用いたプロトタイプ作成、RPAツール活用による業務自動化を実施。',
      image: <FaGlobe />,
      technologies: ['プロダクト管理', 'Figma', 'RPA', 'Agile/Scrum', 'ビジネス分析'],
      category: 'management',
      details: {
        period: '2021年4月〜2023年3月',
        team: '12名（日本・ベトナム）',
        role: 'プロダクトマネージャー',
        budget: '8000万円規模'
      },
      impact: {
        title: 'プロダクト成果',
        text: 'ユーザー数10,000人突破、売上高を200%向上。RPA導入により定型業務を90%自動化。'
      }
    },
    {
      id: 5,
      title: 'AI日本語学習プラットフォーム',
      description: '個人開発プロジェクトとしてAIを活用した日本語学習プラットフォームを構築。ライティング支援、語彙学習、個別最適化機能を提供。',
      image: <FaMobile />,
      technologies: ['AI', '日本語学習', '個人開発', 'Web開発', '機械学習'],
      category: 'ai',
      details: {
        period: '2025年1月〜現在',
        team: '個人開発',
        role: 'フルスタック開発者',
        budget: '個人投資'
      },
      impact: {
        title: '社会貢献',
        text: '500+ユーザーが利用、学習効率を60%向上。AI技術を活用した革新的な日本語学習体験を提供。'
      }
    },
    {
      id: 6,
      title: 'ERPシステム開発',
      description: 'FPTソフトウェアでのERPシステム開発プロジェクト。顧客との連携、要件定義、開発チームへの要求伝達、ITドキュメント翻訳を担当。',
      image: <FaCode />,
      technologies: ['ERP', '要件定義', 'プロジェクト管理', '翻訳・通訳', 'チームマネジメント'],
      category: 'management',
      details: {
        period: '2018年4月〜2021年4月',
        team: '15名（日本・ベトナム）',
        role: 'ITビジネスアナリスト',
        budget: '1億円規模'
      },
      impact: {
        title: 'プロジェクト成功',
        text: '大規模ERPシステムを予定通りリリース。翻訳・通訳業務により国際チームのコミュニケーションを円滑化。'
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'すべて' },
    { key: 'salesforce', label: 'Salesforce' },
    { key: 'management', label: 'プロジェクト管理' },
    { key: 'product', label: 'プロダクト開発' },
    { key: 'ai', label: 'AI・自動化' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        主要プロジェクト
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        8年間の経験で手がけた主要プロジェクトをご紹介いたします
      </SectionSubtitle>
      
      <FilterButtons>
        {filters.map((filter) => (
          <FilterButton
            key={filter.key}
            active={activeFilter === filter.key}
            onClick={() => setActiveFilter(filter.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FilterButtons>
      
      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectImage>
              <ProjectIcon>{project.image}</ProjectIcon>
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <ProjectTech>
                {project.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>
              
              <ProjectDetails>
                <DetailItem>
                  <DetailLabel>期間:</DetailLabel>
                  <DetailValue>{project.details.period}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>チーム:</DetailLabel>
                  <DetailValue>{project.details.team}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>役割:</DetailLabel>
                  <DetailValue>{project.details.role}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>予算:</DetailLabel>
                  <DetailValue>{project.details.budget}</DetailValue>
                </DetailItem>
              </ProjectDetails>
              
              <ProjectImpact>
                <ImpactTitle>{project.impact.title}</ImpactTitle>
                <ImpactText>{project.impact.text}</ImpactText>
              </ProjectImpact>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
