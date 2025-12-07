import styled from 'styled-components';
import { Zap, Gauge, Thermometer, Battery, Car, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { useState } from 'react';
import carImg from '../images/camryred.png';



const DiagnosticsContainer = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`;

const DiagnosticsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const DiagnosticsTitle = styled.h1`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const DiagnosticsSubtitle = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const DiagnosticTypeSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DiagnosticTypeCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${props => props.selected ? props.theme.primary : props.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  &:hover {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 8px 25px ${props => props.theme.shadow};
  }
`;

const DiagnosticTypeIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const DiagnosticTypeTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const DiagnosticTypeDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const SymptomSelector = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`;

const SymptomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SymptomCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid ${props => props.selected ? props.theme.primary : props.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    border-color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}05;
  }
`;

const SymptomCheckbox = styled.input`
  accent-color: ${props => props.theme.primary};
`;

const SymptomIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
`;

const SymptomInfo = styled.div`
  flex: 1;
`;

const SymptomName = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 0.25rem;
`;

const SymptomDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.8rem;
`;

const CarVisualizer = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`;

const CarImage = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: ${props => props.theme.background};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 6rem;
  position: relative;
`;

const CarZones = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const CarZone = styled.button`
  background: ${props => props.selected ? props.theme.primary : props.theme.background};
  color: ${props => props.selected ? 'white' : props.theme.text};
  border: 2px solid ${props => props.selected ? props.theme.primary : props.theme.border};
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    border-color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}05;
  }
`;

const ZoneIcon = styled.div`
  font-size: 1.5rem;
`;

const ZoneName = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;

const DiagnoseButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
  &:disabled {
    background: ${props => props.theme.textSecondary};
    cursor: not-allowed;
  }
`;

const ResultsSection = styled.div`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`;

const ResultsTitle = styled.h2`
  color: ${props => props.theme.text};
  text-align: center;
  margin-bottom: 2rem;
`;

const ResultCard = styled.div`
  background: ${props => props.theme.background};
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 4px solid ${props => {
    switch (props.severity) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return props.theme.primary;
    }
  }};
`;

const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
`;

const ResultTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const SeverityIndicator = styled.div`
  color: ${props => {
    switch (props.severity) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return props.theme.primary;
    }
  }};
  font-weight: bold;
  font-size: 0.9rem;
`;

const ResultDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const RecommendedParts = styled.div`
  margin-bottom: 1.5rem;
`;

const PartsTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const PartsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const PartItem = styled.div`
  background: ${props => props.theme.surface};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PartName = styled.span`
  color: ${props => props.theme.text};
`;

const PartPrice = styled.span`
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

const RecommendedServices = styled.div`
  margin-bottom: 1.5rem;
`;

const ServicesTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ServiceItem = styled.div`
  background: ${props => props.theme.surface};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceName = styled.span`
  color: ${props => props.theme.text};
`;

const ServicePrice = styled.span`
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

const ActionButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const Diagnostics = () => {
  const [diagnosticType, setDiagnosticType] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedZones, setSelectedZones] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const diagnosticTypes = [
    {
      id: 'symptoms',
      icon: <AlertTriangle />,
      title: 'По симптомам',
      description: 'Выберите симптомы неисправности'
    },
    {
      id: 'zones',
      icon: <Car />,
      title: 'По зонам автомобиля',
      description: 'Укажите проблемную зону'
    },
    {
      id: 'error_code',
      icon: <Zap />,
      title: 'По коду ошибки',
      description: 'Введите код ошибки OBD-II'
    }
  ];

  const symptoms = [
    { id: 'engine_noise', name: 'Стук в двигателе', description: 'Необычные звуки при работе двигателя', icon: '🔧' },
    { id: 'vibration', name: 'Вибрация', description: 'Вибрация кузова или руля', icon: '📳' },
    { id: 'power_loss', name: 'Потеря мощности', description: 'Двигатель не тянет, медленный разгон', icon: '⚡' },
    { id: 'brake_noise', name: 'Скрип тормозов', description: 'Шум при торможении', icon: '🛑' },
    { id: 'warning_lights', name: 'Горят чек', description: 'Загорелись индикаторы на панели', icon: '🚨' },
    { id: 'overheating', name: 'Перегрев', description: 'Двигатель перегревается', icon: '🌡️' },
    { id: 'battery_weak', name: 'Слабый аккумулятор', description: 'Трудный запуск, тусклые фары', icon: '🔋' },
    { id: 'transmission_issues', name: 'Проблемы с коробкой', description: 'Рывки при переключении передач', icon: '🔄' }
  ];

  const carZones = [
    { id: 'engine', name: 'Двигатель', icon: '⚙️' },
    { id: 'transmission', name: 'Трансмиссия', icon: '🔧' },
    { id: 'brakes', name: 'Тормоза', icon: '🛑' },
    { id: 'suspension', name: 'Подвеска', icon: '🧷' },
    { id: 'electrical', name: 'Электрика', icon: '🔌' },
    { id: 'cooling', name: 'Охлаждение', icon: '❄️' }
  ];

  const mockResults = [
    {
      id: 1,
      title: 'Изношенные тормозные колодки',
      severity: 'high',
      description: 'Тормозные колодки изношены более чем на 70%. Рекомендуется немедленная замена для обеспечения безопасности.',
      parts: [
        { name: 'Тормозные колодки передние', price: '2 450 ₽' },
        { name: 'Тормозные колодки задние', price: '1 850 ₽' }
      ],
      services: [
        { name: 'Замена тормозных колодок', price: 'от 3 000 ₽' },
        { name: 'Диагностика тормозной системы', price: '1 500 ₽' }
      ]
    },
    {
      id: 2,
      title: 'Низкий уровень масла',
      severity: 'medium',
      description: 'Уровень моторного масла ниже нормы. Возможна утечка или повышенный расход.',
      parts: [
        { name: 'Моторное масло 5W-30', price: '1 200 ₽' },
        { name: 'Масляный фильтр', price: '450 ₽' }
      ],
      services: [
        { name: 'Замена масла и фильтра', price: '1 800 ₽' },
        { name: 'Диагностика системы смазки', price: '800 ₽' }
      ]
    }
  ];

  const toggleSymptom = (symptomId) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const toggleZone = (zoneId) => {
    setSelectedZones(prev =>
      prev.includes(zoneId)
        ? prev.filter(id => id !== zoneId)
        : [...prev, zoneId]
    );
  };

  const handleDiagnose = () => {
    setShowResults(true);
  };

  return (
    <DiagnosticsContainer>
      <DiagnosticsHeader>
        <DiagnosticsTitle>Онлайн-диагностика автомобиля</DiagnosticsTitle>
        <DiagnosticsSubtitle>
          Определите возможные причины неисправности вашего автомобиля
        </DiagnosticsSubtitle>
      </DiagnosticsHeader>

      <DiagnosticTypeSelector>
        {diagnosticTypes.map(type => (
          <DiagnosticTypeCard
            key={type.id}
            selected={diagnosticType === type.id}
            onClick={() => setDiagnosticType(type.id)}
          >
            <DiagnosticTypeIcon>{type.icon}</DiagnosticTypeIcon>
            <DiagnosticTypeTitle>{type.title}</DiagnosticTypeTitle>
            <DiagnosticTypeDescription>{type.description}</DiagnosticTypeDescription>
          </DiagnosticTypeCard>
        ))}
      </DiagnosticTypeSelector>

      {diagnosticType === 'symptoms' && (
        <SymptomSelector>
          <h2>Выберите симптомы</h2>
          <SymptomGrid>
            {symptoms.map(symptom => (
              <SymptomCard
                key={symptom.id}
                selected={selectedSymptoms.includes(symptom.id)}
                onClick={() => toggleSymptom(symptom.id)}
              >
                <SymptomCheckbox
                  type="checkbox"
                  checked={selectedSymptoms.includes(symptom.id)}
                  onChange={() => toggleSymptom(symptom.id)}
                />
                <SymptomIcon>{symptom.icon}</SymptomIcon>
                <SymptomInfo>
                  <SymptomName>{symptom.name}</SymptomName>
                  <SymptomDescription>{symptom.description}</SymptomDescription>
                </SymptomInfo>
              </SymptomCard>
            ))}
          </SymptomGrid>
        </SymptomSelector>
      )}

      {diagnosticType === 'zones' && (
        <CarVisualizer>
          <h2>Выберите зоны автомобиля</h2>
          <CarImage>
            <img 
              src={carImg} 
              alt="camry_red"/>
          </CarImage>
          <CarZones>
            {carZones.map(zone => (
              <CarZone
                key={zone.id}
                selected={selectedZones.includes(zone.id)}
                onClick={() => toggleZone(zone.id)}
              >
                <ZoneIcon>{zone.icon}</ZoneIcon>
                <ZoneName>{zone.name}</ZoneName>
              </CarZone>
            ))}
          </CarZones>
        </CarVisualizer>
      )}

      {diagnosticType && (
        <DiagnoseButton
          onClick={handleDiagnose}
          disabled={
            (diagnosticType === 'symptoms' && selectedSymptoms.length === 0) ||
            (diagnosticType === 'zones' && selectedZones.length === 0)
          }
        >
          Провести диагностику
        </DiagnoseButton>
      )}

      {showResults && (
        <ResultsSection>
          <ResultsTitle>Результаты диагностики</ResultsTitle>
          {mockResults.map(result => (
            <ResultCard key={result.id} severity={result.severity}>
              <ResultHeader>
                <ResultTitle>{result.title}</ResultTitle>
                <SeverityIndicator severity={result.severity}>
                  {result.severity === 'high' ? 'Критично' :
                   result.severity === 'medium' ? 'Средне' : 'Низко'}
                </SeverityIndicator>
              </ResultHeader>
              <ResultDescription>{result.description}</ResultDescription>

              <RecommendedParts>
                <PartsTitle>Рекомендуемые запчасти:</PartsTitle>
                <PartsList>
                  {result.parts.map((part, index) => (
                    <PartItem key={index}>
                      <PartName>{part.name}</PartName>
                      <PartPrice>{part.price}</PartPrice>
                    </PartItem>
                  ))}
                </PartsList>
              </RecommendedParts>

              <RecommendedServices>
                <ServicesTitle>Рекомендуемые услуги:</ServicesTitle>
                <ServicesList>
                  {result.services.map((service, index) => (
                    <ServiceItem key={index}>
                      <ServiceName>{service.name}</ServiceName>
                      <ServicePrice>{service.price}</ServicePrice>
                    </ServiceItem>
                  ))}
                </ServicesList>
              </RecommendedServices>

              <ActionButton>Записаться на ремонт</ActionButton>
            </ResultCard>
          ))}
        </ResultsSection>
      )}
    </DiagnosticsContainer>
  );
};

export default Diagnostics;
