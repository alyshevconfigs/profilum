import styled from 'styled-components';
import { Calendar, Clock, User, Phone, Mail, Car, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const BookingContainer = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${props => props.active ? props.theme.primary : props.theme.surface};
  color: ${props => props.active ? 'white' : props.theme.text};
  font-weight: bold;
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.completed ? props.theme.accent : 'transparent'};
  border: 2px solid ${props => props.active ? 'white' : props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.active ? 'white' : props.theme.primary};
  font-weight: bold;
`;

const BookingForm = styled.form`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid ${props => props.selected ? props.theme.primary : props.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}05;
  }
`;

const ServiceName = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const ServicePrice = styled.p`
  color: ${props => props.theme.accent};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const ServiceCenterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ServiceCenterCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid ${props => props.selected ? props.theme.primary : props.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}05;
  }
`;

const ServiceCenterName = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const ServiceCenterAddress = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 0.5rem;
`;

const ServiceCenterPhone = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const DateTimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
  &:disabled {
    background: ${props => props.theme.textSecondary};
    cursor: not-allowed;
  }
`;

const ConfirmationSection = styled.div`
  text-align: center;
  background: ${props => props.theme.surface};
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const ConfirmationIcon = styled.div`
  font-size: 4rem;
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
`;

const ConfirmationTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const ConfirmationText = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 2rem;
`;

const BookingDetails = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: left;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.border};
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  color: ${props => props.theme.textSecondary};
`;

const DetailValue = styled.span`
  color: ${props => props.theme.text};
  font-weight: bold;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  background: ${props => props.primary ? props.theme.primary : props.theme.surface};
  color: ${props => props.primary ? 'white' : props.theme.text};
  border: ${props => props.primary ? 'none' : `1px solid ${props.theme.border}`};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  &:hover {
    background: ${props => props.primary ? props.theme.primary : props.theme.primary}dd;
    color: ${props => props.primary ? 'white' : 'white'};
  }
`;

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    carModel: '',
    vin: '',
    comment: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const services = [
    {
      id: 'diagnostic',
      name: 'Диагностика',
      price: 'от 1 500 ₽',
      description: 'Компьютерная диагностика всех систем автомобиля'
    },
    {
      id: 'maintenance',
      name: 'ТО',
      price: 'от 3 000 ₽',
      description: 'Техническое обслуживание по регламенту'
    },
    {
      id: 'brake_repair',
      name: 'Ремонт тормозов',
      price: 'от 2 500 ₽',
      description: 'Замена колодок, дисков, ремонт тормозной системы'
    },
    {
      id: 'engine_repair',
      name: 'Ремонт двигателя',
      price: 'от 5 000 ₽',
      description: 'Капитальный ремонт двигателя'
    },
    {
      id: 'suspension_repair',
      name: 'Ремонт подвески',
      price: 'от 4 000 ₽',
      description: 'Замена амортизаторов, рычагов, пружин'
    },
    {
      id: 'electrical_repair',
      name: 'Ремонт электрики',
      price: 'от 2 000 ₽',
      description: 'Диагностика и ремонт электрооборудования'
    }
  ];

  const serviceCenters = [
    {
      id: 'center1',
      name: 'Автосервис "ТехноМотор"',
      address: 'ул. Индустриальная, 5',
      phone: '+7 (495) 123-45-67'
    },
    {
      id: 'center2',
      name: 'СТО "АвтоПрофи"',
      address: 'ул. Бульварная улица, 7',
      phone: '+7 (495) 987-65-43'
    },
    {
      id: 'center3',
      name: 'Сервис "Двигатель"',
      address: 'ул. Герцена, 80',
      phone: '+7 (495) 555-12-34'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setBookingConfirmed(true);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (bookingConfirmed) {
    return (
      <BookingContainer>
        <ConfirmationSection>
          <ConfirmationIcon>
            <CheckCircle />
          </ConfirmationIcon>
          <ConfirmationTitle>Запись подтверждена!</ConfirmationTitle>
          <ConfirmationText>
            Ваш номер заявки: <strong>#A202312345</strong><br />
            Мы свяжемся с вами в ближайшее время для подтверждения деталей.
          </ConfirmationText>

          <BookingDetails>
            <DetailRow>
              <DetailLabel>Услуга:</DetailLabel>
              <DetailValue>{services.find(s => s.id === selectedService)?.name}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Сервисный центр:</DetailLabel>
              <DetailValue>{serviceCenters.find(c => c.id === selectedCenter)?.name}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Дата и время:</DetailLabel>
              <DetailValue>{formData.date} в {formData.time}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Контактное лицо:</DetailLabel>
              <DetailValue>{formData.name}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Телефон:</DetailLabel>
              <DetailValue>{formData.phone}</DetailValue>
            </DetailRow>
          </BookingDetails>

          <ActionButtons>
            <ActionButton primary>Добавить в календарь</ActionButton>
            <ActionButton>Вернуться на главную</ActionButton>
          </ActionButtons>
        </ConfirmationSection>
      </BookingContainer>
    );
  }

  return (
    <BookingContainer>
      <StepIndicator>
        <Step active={currentStep >= 1} completed={currentStep > 1}>
          <StepNumber active={currentStep >= 1} completed={currentStep > 1}>1</StepNumber>
          Выбор услуги
        </Step>
        <Step active={currentStep >= 2} completed={currentStep > 2}>
          <StepNumber active={currentStep >= 2} completed={currentStep > 2}>2</StepNumber>
          Дата и время
        </Step>
        <Step active={currentStep >= 3}>
          <StepNumber active={currentStep >= 3}>3</StepNumber>
          Контакты
        </Step>
      </StepIndicator>

      <BookingForm onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <FormSection>
            <SectionTitle>
              <Car />
              Выберите услугу
            </SectionTitle>
            <ServiceGrid>
              {services.map(service => (
                <ServiceCard
                  key={service.id}
                  selected={selectedService === service.id}
                  onClick={() => setSelectedService(service.id)}
                >
                  <ServiceName>{service.name}</ServiceName>
                  <ServicePrice>{service.price}</ServicePrice>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServiceGrid>
          </FormSection>
        )}

        {currentStep === 2 && (
          <FormSection>
            <SectionTitle>
              <Calendar />
              Выберите сервисный центр и время
            </SectionTitle>
            <ServiceCenterGrid>
              {serviceCenters.map(center => (
                <ServiceCenterCard
                  key={center.id}
                  selected={selectedCenter === center.id}
                  onClick={() => setSelectedCenter(center.id)}
                >
                  <ServiceCenterName>{center.name}</ServiceCenterName>
                  <ServiceCenterAddress>{center.address}</ServiceCenterAddress>
                  <ServiceCenterPhone>{center.phone}</ServiceCenterPhone>
                </ServiceCenterCard>
              ))}
            </ServiceCenterGrid>

            <DateTimeGrid>
              <FormGroup>
                <FormLabel>Дата</FormLabel>
                <FormInput
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Время</FormLabel>
                <FormInput
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </DateTimeGrid>
          </FormSection>
        )}

        {currentStep === 3 && (
          <FormSection>
            <SectionTitle>
              <User />
              Ваши контактные данные
            </SectionTitle>
            <FormGroup>
              <FormLabel>ФИО</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Иванов Иван Иванович"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Телефон</FormLabel>
              <FormInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Марка и модель автомобиля</FormLabel>
              <FormInput
                type="text"
                name="carModel"
                value={formData.carModel}
                onChange={handleInputChange}
                placeholder="Toyota Camry"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>VIN-код (опционально)</FormLabel>
              <FormInput
                type="text"
                name="vin"
                value={formData.vin}
                onChange={handleInputChange}
                placeholder="17-значный VIN-код"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Комментарий</FormLabel>
              <FormTextarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Опишите проблему или дополнительные пожелания"
              />
            </FormGroup>
          </FormSection>
        )}

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          {currentStep > 1 && (
            <SubmitButton
              type="button"
              onClick={goToPreviousStep}
              style={{ background: '#6c757d' }}
            >
              Назад
            </SubmitButton>
          )}
          <SubmitButton
            type="submit"
            disabled={
              (currentStep === 1 && !selectedService) ||
              (currentStep === 2 && (!selectedCenter || !formData.date || !formData.time))
            }
          >
            {currentStep === 3 ? 'Подтвердить запись' : 'Далее'}
          </SubmitButton>
        </div>
      </BookingForm>
    </BookingContainer>
  );
};

export default Booking;
