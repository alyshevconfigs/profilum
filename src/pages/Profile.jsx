import styled from 'styled-components';
import { User, Car, Calendar, Settings, LogOut, Star, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import car1 from '../images/bmw.jpg';
import car2 from '../images/audi.jpg';

const ProfileContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
  margin-bottom: 2rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const ProfileEmail = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
`;

const ProfileStats = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
`;

const StatLabel = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background: ${props => props.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const MenuItem = styled.div`
  margin-bottom: 0.5rem;
`;

const MenuLink = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: none;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
  &:hover {
    background: ${props => props.active ? props.theme.primary : props.theme.surface};
  }
`;

const MainContent = styled.div`
  background: ${props => props.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

const CarsGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const CarCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px ${props => props.theme.shadow};
`;

const CarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CarName = styled.h3`
  color: ${props => props.theme.text};
`;

const CarStatus = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${props => props.theme.accent};
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const CarDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const CarDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const CarImage = styled.div`
  width: 80px;
  height: 60px;
  background: ${props => props.theme.surface};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const OrdersSection = styled.div`
  margin-top: 2rem;
`;

const OrderCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px ${props => props.theme.shadow};
  margin-bottom: 1rem;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const OrderNumber = styled.h4`
  color: ${props => props.theme.text};
`;

const OrderStatus = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${props => props.theme.primary};
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const OrderDetails = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const Profile = () => {
  const [activeTab, setActiveTab] = useState('cars');

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileInfo>
          <ProfileAvatar>
            <User size={40} />
          </ProfileAvatar>
          <ProfileDetails>
            <ProfileName>Иван Ященко</ProfileName>
            <ProfileEmail>ivan.yashenko@ya.ru</ProfileEmail>
            <ProfileStats>
              <StatItem>
                <StatNumber>3</StatNumber>
                <StatLabel>Автомобиля</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>12</StatNumber>
                <StatLabel>Заказов</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>4.8</StatNumber>
                <StatLabel>Рейтинг</StatLabel>
              </StatItem>
            </ProfileStats>
          </ProfileDetails>
        </ProfileInfo>
      </ProfileHeader>

      <ProfileContent>
        <Sidebar>
          <MenuItem>
            <MenuLink active={activeTab === 'cars'} onClick={() => setActiveTab('cars')}>
              <Car size={18} style={{ marginRight: '0.5rem' }} />
              Мои автомобили
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink active={activeTab === 'orders'} onClick={() => setActiveTab('orders')}>
              <Calendar size={18} style={{ marginRight: '0.5rem' }} />
              Заказы
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink active={activeTab === 'bookings'} onClick={() => setActiveTab('bookings')}>
              <Settings size={18} style={{ marginRight: '0.5rem' }} />
              Записи на ремонт
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
              <Settings size={18} style={{ marginRight: '0.5rem' }} />
              Настройки
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>
              <LogOut size={18} style={{ marginRight: '0.5rem' }} />
              Выйти
            </MenuLink>
          </MenuItem>
        </Sidebar>

        <MainContent>
          {activeTab === 'cars' && (
            <>
              <SectionTitle>Мои автомобили</SectionTitle>
              <CarsGrid>
                <CarCard>
                  <CarHeader>
                    <CarName>BMW SERIES 3 -  2018</CarName>
                    <CarStatus>Активный</CarStatus>
                  </CarHeader>
                  <CarDetails>
                    <CarDetail>
                      <CarImage>
                      <img 
                        src={car1} 
                        alt="hero" 
                      />
                      </CarImage>
                    </CarDetail>
                    <CarDetail>
                      <span>Пробег: 75 900 км</span>
                    </CarDetail>
                    <CarDetail>
                      <span>Двигатель: 2.0L 184 HP</span>
                    </CarDetail>
                    <CarDetail>
                      <span>ТО: 01.12.2023</span>
                    </CarDetail>
                  </CarDetails>
                </CarCard>

                <CarCard>
                  <CarHeader>
                    <CarName>Audi RS5 2013</CarName>
                    <CarStatus>Неактивный</CarStatus>
                  </CarHeader>
                  <CarDetails>
                    <CarDetail>
                      <CarImage> <img 
                        src={car2} 
                        alt="hero" 
                      /></CarImage>
                    </CarDetail>
                    <CarDetail>
                      <span>Пробег: 203 000 км</span>
                    </CarDetail>
                    <CarDetail>
                      <span>Двигатель: 4.2L 450 HP</span>
                    </CarDetail>
                    <CarDetail>
                      <span>ТО: 15.01.2024</span>
                    </CarDetail>
                  </CarDetails>
                </CarCard>
              </CarsGrid>
            </>
          )}

          {activeTab === 'orders' && (
            <>
              <SectionTitle>Мои заказы</SectionTitle>
              <OrdersSection>
                <OrderCard>
                  <OrderHeader>
                    <OrderNumber>Заказ #12345</OrderNumber>
                    <OrderStatus>Выполнен</OrderStatus>
                  </OrderHeader>
                  <OrderDetails>
                    Масляный фильтр Bosch + Замена масла<br />
                    15.11.2023 - 3 450 ₽
                  </OrderDetails>
                </OrderCard>

                <OrderCard>
                  <OrderHeader>
                    <OrderNumber>Заказ #12346</OrderNumber>
                    <OrderStatus>В обработке</OrderStatus>
                  </OrderHeader>
                  <OrderDetails>
                    Тормозные колодки + Замена<br />
                    20.11.2023 - 5 200 ₽
                  </OrderDetails>
                </OrderCard>
              </OrdersSection>
            </>
          )}

          {activeTab === 'bookings' && (
            <>
              <SectionTitle>Записи на ремонт</SectionTitle>
              <OrdersSection>
                <OrderCard>
                  <OrderHeader>
                    <OrderNumber>Запись #78901</OrderNumber>
                    <OrderStatus>Подтверждена</OrderStatus>
                  </OrderHeader>
                  <OrderDetails>
                    Диагностика автомобиля<br />
                    25.11.2023 в 14:00 - Сервис на ул. Бульварная, 7
                  </OrderDetails>
                </OrderCard>
              </OrdersSection>
            </>
          )}

          {activeTab === 'settings' && (
            <>
              <SectionTitle>Настройки профиля</SectionTitle>
              <div>Скоро...</div>
            </>
          )}
        </MainContent>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
