import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAward, FaLanguage } from 'react-icons/fa';

const CertificationsSection = styled.section`
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #4f46e5;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: #4f46e5;
`;

const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const CardDate = styled.div`
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #a1a1aa;
  line-height: 1.6;
  margin: 0;
`;

const Certifications = () => {
  const certifications = [
    {
      icon: <FaLanguage />,
      title: '日本語能力試験 N1',
      date: '2020年12月',
      description: '日本語の最高レベルの資格を取得。ビジネスレベルでの日本語コミュニケーションが可能。'
    },
    {
      icon: <FaCertificate />,
      title: 'TOEIC 740点',
      date: '2019年10月',
      description: '英語でのビジネスコミュニケーション能力を証明。海外チームとの協業に活用。'
    },
    {
      icon: <FaAward />,
      title: 'Google Project Management',
      date: '2021年10月',
      description: 'Google認定のプロジェクトマネジメント資格。Courseraで取得した専門資格。'
    },
    {
      icon: <FaCertificate />,
      title: '基本情報技術者試験（FE）',
      date: '2024年8月',
      description: 'ITエンジニアとしての基礎的な知識と技術力を証明する国家資格。'
    },
    {
      icon: <FaAward />,
      title: '情報セキュリティマネジメント試験',
      date: '2025年4月予定',
      description: '情報セキュリティの管理・運用に関する専門知識を証明する資格。'
    },
    {
      icon: <FaGraduationCap />,
      title: '大手前大学 社会現代学科',
      date: '2023年4月 - 2025年3月',
      description: '社会人学生として編入し、現代社会について学びながらIT業界での経験を積む。'
    }
  ];

  return (
    <CertificationsSection id="certifications">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        資格・学歴
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        取得した資格と学歴をご紹介いたします
      </SectionSubtitle>
      
      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <CardHeader>
              <CardIcon>{cert.icon}</CardIcon>
              <CardTitle>{cert.title}</CardTitle>
            </CardHeader>
            <CardDate>{cert.date}</CardDate>
            <CardDescription>{cert.description}</CardDescription>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsSection>
  );
};

export default Certifications;
