import styled from 'styled-components';
import { Award, Users, Clock, Star, MapPin, Phone, Mail, Globe } from 'lucide-react';

const AboutContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.accent} 100%);
  color: white;
  padding: 4rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 4rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 1.1rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentSection = styled.div`
  h2 {
    color: ${props => props.theme.text};
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  ul {
    color: ${props => props.theme.textSecondary};
    line-height: 1.7;
    margin-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const TeamSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const TeamTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const TeamAvatar = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.theme.primary};
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`;

const TeamName = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const TeamPosition = styled.div`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
`;

const TeamDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ValuesSection = styled.div`
  background: ${props => props.theme.surface};
  padding: 4rem 1rem;
  border-radius: 12px;
  margin-bottom: 4rem;
`;

const ValuesTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.text};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ValueIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const ValueTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

const ContactSection = styled.div`
  background: ${props => props.theme.surface};
  padding: 3rem 1rem;
  border-radius: 12px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const ContactInfo = styled.div`
  h3 {
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.textSecondary};
  }
`;

const About = () => {
  const stats = [
    { number: '5000+', label: 'Довольных клиентов' },
    { number: '10+', label: 'Лет опыта' },
    { number: '50+', label: 'Специалистов' },
    { number: '24/7', label: 'Поддержка' }
  ];

  const team = [
    {
      name: 'Фархат Яминов',
      position: 'Генеральный директор',
      description: 'Более 15 лет в автомобильной отрасли. Специалист по управлению автосервисами.',
      avatar: '👨‍💼'
    },
    {
      name: 'Сергей Стрыгин',
      position: 'Главный механик',
      description: 'Эксперт по ремонту двигателей и трансмиссии. Сертифицированный специалист.',
      avatar: '👨‍🔧'
    },
    {
      name: 'Алексей Козлов',
      position: 'Менеджер по качеству',
      description: 'Отвечает за контроль качества работ и соблюдение стандартов обслуживания.',
      avatar: '👨‍💼'
    },
    {
      name: 'А Р',
      position: 'Генеральный директор',
      description: 'Эксперт по компьютерной диагностике всех систем автомобиля.',
      avatar: '🧑‍💻'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Качество превыше всего',
      description: 'Мы стремимся к совершенству в каждой детали ремонта и обслуживания вашего автомобиля.'
    },
    {
      icon: '🤝',
      title: 'Доверие и честность',
      description: 'Открытость в работе, честные цены и прозрачность всех процессов.'
    },
    {
      icon: '🚀',
      title: 'Инновации',
      description: 'Используем современное оборудование и передовые технологии для лучшего результата.'
    },
    {
      icon: '❤️',
      title: 'Забота о клиентах',
      description: 'Ваше удобство и удовлетворенность - наш главный приоритет.'
    }
  ];

  const contacts = [
    {
      icon: <MapPin />,
      title: 'Адрес',
      info: 'Тюмень, ул. Индустриальная, 5'
    },
    {
      icon: <Phone />,
      title: 'Телефон',
      info: '7 (909) 999-66-66'
    },
    {
      icon: <Mail />,
      title: 'Email',
      info: 'admin@avtohause.ru'
    },
    {
      icon: <Globe />,
      title: 'Сайт',
      info: 'avtohaus.ru'
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle>О компании Автохаус Форт</HeroTitle>
        <HeroText>
          Мы - современный автосервис с многолетним опытом работы. Наша команда профессионалов
          обеспечивает качественное обслуживание и ремонт автомобилей всех марок.
        </HeroText>
      </HeroSection>

      <StatsSection>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsSection>

      <ContentGrid>
        <ContentSection>
          <h2>Наша история</h2>
          <p>
            Компания Автохаус Форт была основана в 2013 году группой энтузиастов автомобильной отрасли.
            За годы работы мы выросли из небольшого гаража в современный многопрофильный автосервис,
            оборудованный по последнему слову техники.
          </p>
          <p>
            Сегодня мы обслуживаем более 5000 клиентов ежегодно и продолжаем развиваться,
            внедряя новые технологии и расширяя спектр услуг.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>Наши преимущества</h2>
          <ul>
            <li>Современное диагностическое оборудование</li>
            <li>Квалифицированные специалисты с опытом работы</li>
            <li>Использование оригинальных запчастей и расходников</li>
            <li>Гарантия на все виды работ</li>
            <li>Удобное расположение и гибкий график работы</li>
            <li>Прозрачное ценообразование без скрытых платежей</li>
          </ul>
        </ContentSection>
      </ContentGrid>

      <TeamSection>
        <TeamTitle>Наша команда</TeamTitle>
        <TeamGrid>
          {team.map((member, index) => (
            <TeamCard key={index}>
              <TeamAvatar>{member.avatar}</TeamAvatar>
              <TeamName>{member.name}</TeamName>
              <TeamPosition>{member.position}</TeamPosition>
              <TeamDescription>{member.description}</TeamDescription>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamSection>

      <ValuesSection>
        <ValuesTitle>Наши ценности</ValuesTitle>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      <ContactSection>
        <ContactTitle>Свяжитесь с нами</ContactTitle>
        <ContactGrid>
          {contacts.map((contact, index) => (
            <ContactItem key={index}>
              <ContactIcon>{contact.icon}</ContactIcon>
              <ContactInfo>
                <h3>{contact.title}</h3>
                <p>{contact.info}</p>
              </ContactInfo>
            </ContactItem>
          ))}
        </ContactGrid>
      </ContactSection>
    </AboutContainer>
  );
};

export default About;
