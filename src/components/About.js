import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaHeart, FaGraduationCap } from 'react-icons/fa';

const AboutSection = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #ffffff;
  }
  
  p {
    color: #d1d5db;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #a1a1aa;
  font-size: 0.9rem;
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutCard = styled(motion.div)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #4f46e5;
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #4f46e5;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #a1a1aa;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const About = () => {
  const stats = [
    { number: '8+', label: '年のIT経験' },
    { number: '~10', label: 'プロジェクト完了' },
    { number: '10+', label: 'クライアント対応' },
    { number: '5+', label: '企業での経験（副業も含め）' }
  ];

  const cards = [
    {
      icon: <FaCode />,
      title: 'プロジェクト管理',
      description: '大規模プロジェクトの進捗管理、リソース管理、品質管理を専門としています'
    },
    {
      icon: <FaRocket />,
      title: '問題解決能力',
      description: '複雑な課題に直面した際も効果的な戦略を立案し、迅速に解決へと導きます'
    },
    {
      icon: <FaHeart />,
      title: '継続的学習',
      description: '常に新しい技術やトレンドを学習し、自己の成長に努めています'
    },
    {
      icon: <FaGraduationCap />,
      title: 'チームマネジメント',
      description: '異文化を持つチームメンバーとの協業経験も豊富で、効果的なコミュニケーションを実現'
    }
  ];

  return (
    <AboutSection id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        プロフィール
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        8年間のIT経験とキャリアパスについて詳しくご紹介いたします
      </SectionSubtitle>
      
      <AboutContent>
        <AboutText>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            輝く世界へようこそ（HUY＝輝）
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            私はLE QUANG HUY、8年間のIT経験を持つプロフェッショナルです。最初の3年間はFPTソフトウェアで
            大規模プロジェクトの進め方やプロジェクト遂行に必要なスキルを習得し、その後マネーフォワードで
            プロダクトマネージャーとして昇格いたしました。
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            現在は株式会社MADLAB JAPANでデリバリーマネージャーとして、大手小売業のスーパーマーケット向け
            Salesforce開発プロジェクトを統括しています。問題分析と解決能力に自信があり、複雑な課題に
            直面した際も効果的な戦略を立案し、迅速に解決へと導きます。
          </motion.p>
          
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </AboutText>
        
        <AboutCards>
          {cards.map((card, index) => (
            <AboutCard
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <CardIcon>{card.icon}</CardIcon>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </AboutCard>
          ))}
        </AboutCards>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
