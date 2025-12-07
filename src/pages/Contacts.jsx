import styled from 'styled-components';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactsContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactsTitle = styled.h1`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const ContactsSubtitle = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
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

const ContactInfo = styled.div`
  h2 {
    color: ${props => props.theme.text};
    margin-bottom: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactIcon = styled.div`
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  color: ${props => props.theme.text};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  color: ${props => props.theme.textSecondary};
  line-height: 1.5;
`;

const ServiceCenters = styled.div`
  margin-bottom: 2rem;
`;

const CenterCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.border};
  margin-bottom: 1rem;
`;

const CenterName = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const CenterDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CenterDetail = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const MapSection = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 4rem;
`;

const MapTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: ${props => props.theme.background};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textSecondary};
  font-size: 1.2rem;
  border: 2px dashed ${props => props.theme.border};
`;

const ContactForm = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
`;

const FormTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  font-size: 1rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  font-size: 1rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const FormButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const Contacts = () => {
  const contactInfo = [
    {
      icon: <MapPin />,
      label: 'Главный офис',
      value: 'Тюмень, ул. Индустриальная, 5'
    },
    {
      icon: <Phone />,
      label: 'Телефон',
      value: '+7 (909) 999-66-66\n+7 (495) 123-45-68 (запчасти)'
    },
    {
      icon: <Mail />,
      label: 'Email',
      value: 'admin@avtohaus.ru\nparts@avtohaus.ru (запчасти)'
    },
    {
      icon: <Clock />,
      label: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 20:00\nСб-Вс: 10:00 - 18:00\nБез выходных'
    }
  ];

  const serviceCenters = [
    {
      name: 'Автосервис "ТехноМотор"',
      address: 'ул. Индустриальная, 5',
      phone: '+7 (495) 123-45-67',
      hours: '9:00 - 20:00'
    },
    {
      name: 'СТО "АвтоПрофи"',
      address: 'ул. Бульварная улица, 7',
      phone: '+7 (495) 987-65-43',
      hours: '8:00 - 21:00'
    },
    {
      name: 'Сервис "Двигатель"',
      address: 'ул. Герцена, 80',
      phone: '+7 (495) 555-12-34',
      hours: '9:00 - 19:00'
    }
  ];

  return (
    <ContactsContainer>
      <ContactsHeader>
        <ContactsTitle>Контакты</ContactsTitle>
        <ContactsSubtitle>
          Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь с ремонтом вашего автомобиля.
        </ContactsSubtitle>
      </ContactsHeader>

      <ContentGrid>
        <ContactInfo>
          <h2>Свяжитесь с нами</h2>
          {contactInfo.map((item, index) => (
            <ContactItem key={index}>
              <ContactIcon>{item.icon}</ContactIcon>
              <ContactDetails>
                <ContactLabel>{item.label}</ContactLabel>
                <ContactValue style={{ whiteSpace: 'pre-line' }}>{item.value}</ContactValue>
              </ContactDetails>
            </ContactItem>
          ))}

          <ServiceCenters>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>Сервисные центры</h3>
            {serviceCenters.map((center, index) => (
              <CenterCard key={index}>
                <CenterName>{center.name}</CenterName>
                <CenterDetails>
                  <CenterDetail>📍 {center.address}</CenterDetail>
                  <CenterDetail>📞 {center.phone}</CenterDetail>
                  <CenterDetail>🕐 {center.hours}</CenterDetail>
                </CenterDetails>
              </CenterCard>
            ))}
          </ServiceCenters>
        </ContactInfo>

        <ContactForm>
          <FormTitle>Напишите нам</FormTitle>
          <FormGrid>
            <FormGroup>
              <FormLabel>Имя</FormLabel>
              <FormInput type="text" placeholder="Ваше имя" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Телефон</FormLabel>
              <FormInput type="tel" placeholder="+7 (___) ___-__-__" />
            </FormGroup>
          </FormGrid>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" placeholder="your@email.com" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Тема</FormLabel>
            <FormInput type="text" placeholder="Тема сообщения" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Сообщение</FormLabel>
            <FormTextarea placeholder="Опишите ваш вопрос или проблему" />
          </FormGroup>
          <FormButton>
            <Send size={20} />
            Отправить сообщение
          </FormButton>
        </ContactForm>
      </ContentGrid>

      <MapSection>
    <MapTitle>Наши сервисные центры на карте</MapTitle>
    <MapPlaceholder>
      <iframe
        src="https://yandex.com/map-widget/v1/-/CLg9q2OS"
        style={{ width: '100%', height: '100%', border: '0' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </MapPlaceholder>
      </MapSection>
    </ContactsContainer>
  );
};

export default Contacts;
