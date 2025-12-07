import styled from 'styled-components';
import { Search, Car, Wrench, Calendar, Star, Shield, Clock, Award } from 'lucide-react';
import carImg from '../images/camryred.png';
import heroBg from '../images/main-cars-tronk.webp';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  color: white;
  padding: 6rem 1rem;
  text-align: center;

  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.55) 100%
    ),
    url(${heroBg}) center/85% no-repeat;
`;




const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const SearchForm = styled.form`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const ServicesSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.surface};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
`;

const DiagnosticsSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.background};
`;

const DiagnosticsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CarSilhouette = styled.div`
  width: 100%;
  height: 400px;
  background: ${props => props.theme.surface};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: ${props => props.theme.primary};
`;

const DiagnosticsInfo = styled.div`
  text-align: center;
`;

const DiagnosticsButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const CategoriesSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.surface};
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const CategoryTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const BookingSection = styled.section`
  padding: 4rem 1rem;
  background: url('https://via.placeholder.com/1200x400/007bff/ffffff?text=Workshop') center/cover;
  color: white;
  text-align: center;
`;

const BookingContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(0,0,0,0.5);
  padding: 3rem;
  border-radius: 12px;
`;

const BookingTitle = styled.h2`
  margin-bottom: 2rem;
`;

const BookingForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BookingInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
`;

const BookingButton = styled.button`
  grid-column: span 2;
  background: ${props => props.theme.accent};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background: ${props => props.theme.accent}dd;
  }
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const AdvantagesSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.background};
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AdvantageCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

const AdvantageIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const AdvantageTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const AdvantageDescription = styled.p`
  color: ${props => props.theme.textSecondary};
`;

const ReviewsSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.surface};
`;

const ReviewsCarousel = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const ReviewCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 12px;
  min-width: 300px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ReviewAvatar = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.primary};
  border-radius: 50%;
  margin-right: 1rem;
`;

const ReviewName = styled.h4`
  color: ${props => props.theme.text};
`;

const ReviewRating = styled.div`
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
`;

const ReviewText = styled.p`
  color: ${props => props.theme.textSecondary};
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Быстрый подбор запчастей и диагностика онлайн</HeroTitle>
          <HeroSubtitle>Найдите нужные запчасти по OEM-коду или артикулу детали</HeroSubtitle>
          <SearchForm>
            <SearchInput type="text" placeholder="Введите OEM или артикул детали" />
            <SearchButton type="submit">Найти запчасти</SearchButton>
          </SearchForm>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>Популярные услуги</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon><Car /></ServiceIcon>
            <ServiceTitle>Диагностика</ServiceTitle>
            <ServiceDescription>Компьютерная диагностика всех систем автомобиля</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon><Wrench /></ServiceIcon>
            <ServiceTitle>ТО</ServiceTitle>
            <ServiceDescription>Техническое обслуживание по регламенту</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon><Shield /></ServiceIcon>
            <ServiceTitle>Ремонт подвески</ServiceTitle>
            <ServiceDescription>Замена амортизаторов, рычагов и других элементов</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon><Award /></ServiceIcon>
            <ServiceTitle>Электрика</ServiceTitle>
            <ServiceDescription>Ремонт и обслуживание электрооборудования</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon><Clock /></ServiceIcon>
            <ServiceTitle>Ремонт ДВС</ServiceTitle>
            <ServiceDescription>Капитальный ремонт двигателя</ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <DiagnosticsSection>
        <DiagnosticsContent>
        <CarSilhouette>
        <CarSilhouette>
              <img 
                src={carImg} 
                alt="camry_red" 
                style={{ width: "90%", height: "auto" }} 
              />
              </CarSilhouette>

              </CarSilhouette>
          <DiagnosticsInfo>
            <h2>Онлайн-диагностика автомобиля</h2>
            <p>Выберите зону автомобиля или симптом неисправности</p>
            <DiagnosticsButton>Начать диагностику</DiagnosticsButton>
          </DiagnosticsInfo>
        </DiagnosticsContent>
      </DiagnosticsSection>

      <CategoriesSection>
        <SectionTitle>Категории автозапчастей</SectionTitle>
        <CategoriesGrid>
          <CategoryCard>
            <CategoryIcon>⚙️</CategoryIcon>
            <CategoryTitle>Двигатель</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🔧</CategoryIcon>
            <CategoryTitle>Трансмиссия</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🧷</CategoryIcon>
            <CategoryTitle>Подвеска</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🔌</CategoryIcon>
            <CategoryTitle>Электрика</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🚗</CategoryIcon>
            <CategoryTitle>Кузов</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🛑</CategoryIcon>
            <CategoryTitle>Тормозная система</CategoryTitle>
          </CategoryCard>
        </CategoriesGrid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button style={{ background: '#007bff', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '50px', cursor: 'pointer' }}>Смотреть все</button>
        </div>
      </CategoriesSection>

      <BookingSection>
        <BookingContent>
          <BookingTitle>Запись на ремонт</BookingTitle>
          <BookingForm>
            <BookingInput type="text" placeholder="Ваше имя" />
            <BookingInput type="tel" placeholder="Телефон" />
            <BookingInput type="email" placeholder="Email" />
            <BookingInput type="text" placeholder="Марка автомобиля" />
            <BookingInput type="date" placeholder="Дата" />
            <BookingInput type="time" placeholder="Время" />
            <BookingButton type="submit">Записаться</BookingButton>
          </BookingForm>
        </BookingContent>
      </BookingSection>

      <AdvantagesSection>
        <SectionTitle>Почему выбирают нас</SectionTitle>
        <AdvantagesGrid>
          <AdvantageCard>
            <AdvantageIcon><Clock /></AdvantageIcon>
            <AdvantageTitle>Работаем 24/7</AdvantageTitle>
            <AdvantageDescription>Круглосуточное обслуживание и поддержка</AdvantageDescription>
          </AdvantageCard>
          <AdvantageCard>
            <AdvantageIcon><Shield /></AdvantageIcon>
            <AdvantageTitle>Гарантия на ремонт</AdvantageTitle>
            <AdvantageDescription>Гарантийные обязательства на все виды работ</AdvantageDescription>
          </AdvantageCard>
          <AdvantageCard>
            <AdvantageIcon><Award /></AdvantageIcon>
            <AdvantageTitle>Оригинальные запчасти</AdvantageTitle>
            <AdvantageDescription>Используем только качественные оригинальные детали</AdvantageDescription>
          </AdvantageCard>
          <AdvantageCard>
            <AdvantageIcon><Star /></AdvantageIcon>
            <AdvantageTitle>Быстрая диагностика</AdvantageTitle>
            <AdvantageDescription>Компьютерная диагностика за 30 минут</AdvantageDescription>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <ReviewsSection>
        <SectionTitle>Отзывы клиентов</SectionTitle>
        <ReviewsCarousel>
          <ReviewCard>
            <ReviewHeader>
              <ReviewAvatar />
              <ReviewName>Кирилл Иванов</ReviewName>
            </ReviewHeader>
            <ReviewRating>★★</ReviewRating>
            <ReviewText>Скам-сервис: по телефону комплект трубок стоил 4500, в наличии. Прихожу ,а цена  6000 — «видимо, я неправильно понял». Купил за 4200 в другом магазине..</ReviewText>
          </ReviewCard>
          <ReviewCard>
            <ReviewHeader>
              <ReviewAvatar />
              <ReviewName>Мария Петрова</ReviewName>
            </ReviewHeader>
            <ReviewRating>★★★★★</ReviewRating>
            <ReviewText>Добрый день. Очень полезный магазин. Всегда сразу беру все что мне нужно и по наличию. Спасибо за хорошую работу ребята!</ReviewText>
          </ReviewCard>
          <ReviewCard>
            <ReviewHeader>
              <ReviewAvatar />
              <ReviewName>Илья Сидоров</ReviewName>
            </ReviewHeader>
            <ReviewRating>★★★★★</ReviewRating>
            <ReviewText>Профессиональная команда, современное оборудование. Все работы выполнены в срок.</ReviewText>
          </ReviewCard>
        </ReviewsCarousel>
      </ReviewsSection>
    </HomeContainer>
  );
};

export default Home;
