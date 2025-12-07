import styled from 'styled-components';
import { Wrench, Car, Shield, Zap, Cog, Battery, Thermometer, Settings } from 'lucide-react';

const ServicesContainer = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesTitle = styled.h1`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const ServicesSubtitle = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 8px 25px ${props => props.theme.shadow};
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.primary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ServicePrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.accent};
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.li`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  &:before {
    content: '✓';
    color: ${props => props.theme.accent};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const ServiceButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const CategoriesSection = styled.div`
  background: ${props => props.theme.surface};
  padding: 3rem 1rem;
  border-radius: 12px;
  margin-bottom: 4rem;
`;

const CategoriesTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const CategoryCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}05;
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const CategoryTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const WhyChooseUs = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const WhyChooseUsTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const BenefitCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.border};
  text-align: center;
`;

const BenefitIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const BenefitTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      id: 'diagnostic',
      icon: <Settings />,
      title: 'Диагностика автомобиля',
      description: 'Компьютерная диагностика всех систем автомобиля с использованием современного оборудования.',
      price: 'от 1 500 ₽',
      features: [
        'Полная проверка всех систем',
        'Чтение кодов ошибок',
        'Анализ работы двигателя',
        'Проверка электроники'
      ]
    },
    {
      id: 'engine_repair',
      icon: <Cog />,
      title: 'Ремонт двигателя',
      description: 'Капитальный ремонт и обслуживание двигателей всех типов.',
      price: 'от 5 000 ₽',
      features: [
        'Разборка и дефектовка',
        'Замена изношенных деталей',
        'Балансировка коленвала',
        'Установка новых комплектующих'
      ]
    },
    {
      id: 'brake_system',
      icon: <Shield />,
      title: 'Тормозная система',
      description: 'Диагностика и ремонт тормозной системы для обеспечения безопасности.',
      price: 'от 2 500 ₽',
      features: [
        'Замена тормозных колодок',
        'Ремонт тормозных дисков',
        'Прокачка тормозной системы',
        'Проверка ABS'
      ]
    },
    {
      id: 'electrical',
      icon: <Zap />,
      title: 'Электрооборудование',
      description: 'Ремонт и обслуживание всей электрики автомобиля.',
      price: 'от 2 000 ₽',
      features: [
        'Диагностика электрики',
        'Ремонт проводки',
        'Замена предохранителей',
        'Ремонт генератора и стартера'
      ]
    },
    {
      id: 'suspension',
      icon: <Car />,
      title: 'Ремонт подвески',
      description: 'Замена и ремонт элементов подвески для комфортной езды.',
      price: 'от 4 000 ₽',
      features: [
        'Замена амортизаторов',
        'Ремонт рычагов',
        'Замена пружин',
        'Выравнивание развала-схождения'
      ]
    },
    {
      id: 'maintenance',
      icon: <Wrench />,
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО для поддержания автомобиля в отличном состоянии.',
      price: 'от 3 000 ₽',
      features: [
        'Замена масла и фильтров',
        'Проверка всех жидкостей',
        'Осмотр ходовой части',
        'Компьютерная диагностика'
      ]
    },
    {
      id: 'battery',
      icon: <Battery />,
      title: 'Аккумуляторы',
      description: 'Продажа и установка автомобильных аккумуляторов.',
      price: 'от 3 500 ₽',
      features: [
        'Подбор аккумулятора',
        'Тестирование старого АКБ',
        'Установка и подключение',
        'Гарантия на работу'
      ]
    },
    {
      id: 'cooling',
      icon: <Thermometer />,
      title: 'Система охлаждения',
      description: 'Ремонт и обслуживание системы охлаждения двигателя.',
      price: 'от 2 000 ₽',
      features: [
        'Замена антифриза',
        'Ремонт радиатора',
        'Замена термостата',
        'Проверка помпы'
      ]
    }
  ];

  const categories = [
    { icon: '⚙️', title: 'Двигатель', description: 'Ремонт и обслуживание' },
    { icon: '🔧', title: 'Трансмиссия', description: 'Коробка передач, приводы' },
    { icon: '🛞', title: 'Подвеска', description: 'Ходовая часть' },
    { icon: '🔌', title: 'Электрика', description: 'Электрооборудование' },
    { icon: '🚗', title: 'Кузов', description: 'Кузовные работы' },
    { icon: '🛑', title: 'Тормоза', description: 'Тормозная система' },
    { icon: '💡', title: 'Оптика', description: 'Фары и освещение' },
    { icon: '🛢️', title: 'ТО', description: 'Техобслуживание' }
  ];

  const benefits = [
    {
      icon: '⏰',
      title: 'Быстрое обслуживание',
      description: 'Выполняем работы в кратчайшие сроки без потери качества'
    },
    {
      icon: '🛡️',
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды выполненных работ'
    },
    {
      icon: '💰',
      title: 'Доступные цены',
      description: 'Оптимальное соотношение цены и качества услуг'
    },
    {
      icon: '🔧',
      title: 'Современное оборудование',
      description: 'Используем профессиональное диагностическое оборудование'
    }
  ];

  return (
    <ServicesContainer>
      <ServicesHeader>
        <ServicesTitle>Наши услуги</ServicesTitle>
        <ServicesSubtitle>
          Профессиональное обслуживание автомобилей с использованием современного оборудования и качественных запчастей
        </ServicesSubtitle>
      </ServicesHeader>

      <ServicesGrid>
        {services.map(service => (
          <ServiceCard key={service.id}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>{service.price}</ServicePrice>
            <ServiceFeatures>
              {service.features.map((feature, index) => (
                <ServiceFeature key={index}>{feature}</ServiceFeature>
              ))}
            </ServiceFeatures>
            <ServiceButton>Записаться</ServiceButton>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <CategoriesSection>
        <CategoriesTitle>Категории услуг</CategoriesTitle>
        <CategoriesGrid>
          {categories.map((category, index) => (
            <CategoryCard key={index}>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </CategoriesSection>

      <WhyChooseUs>
        <WhyChooseUsTitle>Почему выбирают нас</WhyChooseUsTitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </WhyChooseUs>
    </ServicesContainer>
  );
};

export default Services;
