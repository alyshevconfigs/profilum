import styled from 'styled-components';
import { ShoppingCart, Heart, Star, Truck, Shield } from 'lucide-react';
import { useState } from 'react';

const ProductContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const GallerySection = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.theme.surface};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  border: 2px solid transparent;
  &.active {
    border-color: ${props => props.theme.primary};
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 400px;
  background: ${props => props.theme.surface};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductTitle = styled.h1`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const ProductManufacturer = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 1.1rem;
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.accent};
`;

const ProductActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const BuyButton = styled.button`
  background: ${props => props.theme.accent};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  &:hover {
    background: ${props => props.theme.accent}dd;
  }
`;

const AddToCartButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const FavoriteButton = styled.button`
  background: ${props => props.theme.surface};
  border: 2px solid ${props => props.theme.border};
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.theme.text};
  &:hover {
    background: ${props => props.theme.border};
  }
`;

const CompatibilitySection = styled.div`
  background: ${props => props.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const CompatibilityList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const CompatibilityItem = styled.div`
  background: ${props => props.theme.background};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
`;

const TabsSection = styled.div`
  margin-top: 3rem;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.border};
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  color: ${props => props.active ? props.theme.primary : props.theme.textSecondary};
  border-bottom: 2px solid ${props => props.active ? props.theme.primary : 'transparent'};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const TabContent = styled.div`
  padding: 2rem 0;
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  line-height: 1.6;
`;

const Specifications = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SpecGroup = styled.div`
  h3 {
    color: ${props => props.theme.primary};
    margin-bottom: 1rem;
  }
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const SpecLabel = styled.span`
  color: ${props => props.theme.textSecondary};
`;

const SpecValue = styled.span`
  color: ${props => props.theme.text};
  font-weight: bold;
`;

const ReviewsSection = styled.div`
  margin-top: 2rem;
`;

const ReviewItem = styled.div`
  background: ${props => props.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ReviewAuthor = styled.div`
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const ReviewRating = styled.div`
  color: ${props => props.theme.accent};
`;

const ReviewText = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

const AnalogsSection = styled.div`
  margin-top: 2rem;
`;

const AnalogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const AnalogCard = styled.div`
  background: ${props => props.theme.surface};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnalogInfo = styled.div`
  flex: 1;
`;

const AnalogTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const AnalogPrice = styled.p`
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

const AnalogButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const Product = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);

  const images = ['🛢️', '🔧', '⚙️', '🔌'];

  const specifications = {
    'Основные характеристики': {
      'Производитель': 'Bosch',
      'Артикул': 'F026402001',
      'Тип': 'Масляный фильтр',
      'Совместимость': 'Бензиновые и дизельные двигатели'
    },
    'Технические параметры': {
      'Высота, мм': '95',
      'Диаметр, мм': '76',
      'Резьба': 'M20x1.5',
      'Материал': 'Бумага, металл'
    }
  };

  const reviews = [
    {
      author: 'Алексей Иванов',
      rating: 5,
      text: 'Отличный фильтр, соответствует оригиналу. Установил на свой автомобиль, работает идеально.'
    },
    {
      author: 'Мария Петрова',
      rating: 4,
      text: 'Хорошее качество, доставили быстро. Рекомендую.'
    }
  ];

  const analogs = [
    { title: 'Mann W719/2', price: '1 150 ₽' },
    { title: 'Mahle OC 355', price: '1 300 ₽' },
    { title: 'Filtron OP 570', price: '950 ₽' }
  ];

  return (
    <ProductContainer>
      <ProductGrid>
        <GallerySection>
          <Thumbnails>
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                className={activeImage === index ? 'active' : ''}
                onClick={() => setActiveImage(index)}
              >
                {image}
              </Thumbnail>
            ))}
          </Thumbnails>
          <MainImage>{images[activeImage]}</MainImage>
        </GallerySection>

        <ProductInfo>
          <div>
            <ProductTitle>Масляный фильтр Bosch F026402001</ProductTitle>
            <ProductManufacturer>Bosch</ProductManufacturer>
            <ProductPrice>1 250 ₽</ProductPrice>
          </div>

          <ProductActions>
            <BuyButton>Купить</BuyButton>
            <AddToCartButton>
              <ShoppingCart size={20} />
              В корзину
            </AddToCartButton>
            <FavoriteButton>
              <Heart size={20} />
            </FavoriteButton>
          </ProductActions>

          <CompatibilitySection>
            <SectionTitle>Совместимые модели авто</SectionTitle>
            <CompatibilityList>
              <CompatibilityItem>Toyota Camry 2015-2020</CompatibilityItem>
              <CompatibilityItem>Honda Accord 2016-2021</CompatibilityItem>
              <CompatibilityItem>Nissan Altima 2017-2022</CompatibilityItem>
              <CompatibilityItem>Mazda 6 2018-2023</CompatibilityItem>
            </CompatibilityList>
          </CompatibilitySection>
        </ProductInfo>
      </ProductGrid>

      <TabsSection>
        <Tabs>
          <Tab active={activeTab === 'description'} onClick={() => setActiveTab('description')}>
            Описание
          </Tab>
          <Tab active={activeTab === 'specifications'} onClick={() => setActiveTab('specifications')}>
            Характеристики
          </Tab>
          <Tab active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>
            Отзывы (2)
          </Tab>
          <Tab active={activeTab === 'analogs'} onClick={() => setActiveTab('analogs')}>
            Аналоги
          </Tab>
        </Tabs>

        <TabContent>
          {activeTab === 'description' && (
            <Description>
              <p>Масляный фильтр Bosch F026402001 предназначен для эффективной очистки моторного масла от механических примесей и продуктов износа. Фильтр обеспечивает надежную защиту двигателя от загрязнений, продлевая срок его службы.</p>
              <p>Особенности:</p>
              <ul>
                <li>Высокая степень фильтрации</li>
                <li>Устойчивость к высоким температурам</li>
                <li>Легкая замена</li>
                <li>Соответствует стандартам OEM</li>
              </ul>
            </Description>
          )}

          {activeTab === 'specifications' && (
            <Specifications>
              {Object.entries(specifications).map(([group, specs]) => (
                <SpecGroup key={group}>
                  <h3>{group}</h3>
                  {Object.entries(specs).map(([label, value]) => (
                    <SpecItem key={label}>
                      <SpecLabel>{label}</SpecLabel>
                      <SpecValue>{value}</SpecValue>
                    </SpecItem>
                  ))}
                </SpecGroup>
              ))}
            </Specifications>
          )}

          {activeTab === 'reviews' && (
            <ReviewsSection>
              {reviews.map((review, index) => (
                <ReviewItem key={index}>
                  <ReviewHeader>
                    <ReviewAuthor>{review.author}</ReviewAuthor>
                    <ReviewRating>{'★'.repeat(review.rating)}</ReviewRating>
                  </ReviewHeader>
                  <ReviewText>{review.text}</ReviewText>
                </ReviewItem>
              ))}
            </ReviewsSection>
          )}

          {activeTab === 'analogs' && (
            <AnalogsSection>
              <AnalogsGrid>
                {analogs.map((analog, index) => (
                  <AnalogCard key={index}>
                    <AnalogInfo>
                      <AnalogTitle>{analog.title}</AnalogTitle>
                      <AnalogPrice>{analog.price}</AnalogPrice>
                    </AnalogInfo>
                    <AnalogButton>Выбрать</AnalogButton>
                  </AnalogCard>
                ))}
              </AnalogsGrid>
            </AnalogsSection>
          )}
        </TabContent>
      </TabsSection>
    </ProductContainer>
  );
};

export default Product;
