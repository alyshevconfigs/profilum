import styled from 'styled-components';
import { Grid, List } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// Мок-данные товаров
const productsData = [
  {id:1, name:"Масляный фильтр Bosch", brand:"Bosch", category:"Двигатель", compatibility:"Toyota Camry 2015-2020", price:2450, availability:"in_stock", type:"original", marka:"Toyota", model:"Camry", year:2018, motor:"2.5"},
  {id:2, name:"Свеча NGK", brand:"NGK", category:"Электрика", compatibility:"Kia Rio 2018-2023", price:790, availability:"order", type:"analog", marka:"Kia", model:"Rio", year:2020, motor:"1.6"},
  {id:3, name:"Ремень ГРМ Valeo", brand:"Valeo", category:"Двигатель", compatibility:"Hyundai Solaris 2016-2021", price:1600, availability:"in_stock", type:"original", marka:"Hyundai", model:"Solaris", year:2019, motor:"1.6"},
  {id:4, name:"Амортизатор Denso", brand:"Denso", category:"Подвеска", compatibility:"Toyota Corolla 2015-2020", price:3400, availability:"in_stock", type:"analog", marka:"Toyota", model:"Corolla", year:2017, motor:"1.8"},
  {id:5, name:"Тормозные колодки Bosch", brand:"Bosch", category:"Тормоза", compatibility:"Volkswagen Golf 2016-2021", price:3200, availability:"in_stock", type:"original", marka:"Volkswagen", model:"Golf", year:2018, motor:"1.4"},
  {id:6, name:"Аккумулятор Varta", brand:"Varta", category:"Электрика", compatibility:"Ford Focus 2015-2020", price:5500, availability:"order", type:"original", marka:"Ford", model:"Focus", year:2017, motor:"1.6"},
  {id:7, name:"Топливный насос Denso", brand:"Denso", category:"Двигатель", compatibility:"Honda Civic 2016-2021", price:4300, availability:"in_stock", type:"original", marka:"Honda", model:"Civic", year:2019, motor:"2.0"},
  {id:8, name:"Фильтр салона Valeo", brand:"Valeo", category:"Кузов", compatibility:"Toyota RAV4 2015-2020", price:900, availability:"in_stock", type:"analog", marka:"Toyota", model:"RAV4", year:2018, motor:"2.0"},
  {id:9, name:"Подшипник ступицы SKF", brand:"SKF", category:"Подвеска", compatibility:"Mazda 6 2016-2021", price:2100, availability:"in_stock", type:"original", marka:"Mazda", model:"6", year:2019, motor:"2.5"},
  {id:10, name:"Радиатор охлаждения Valeo", brand:"Valeo", category:"Двигатель", compatibility:"Nissan Qashqai 2017-2022", price:7400, availability:"order", type:"original", marka:"Nissan", model:"Qashqai", year:2020, motor:"1.6"},
  {id:11, name:"Ремень кондиционера Gates", brand:"Gates", category:"Двигатель", compatibility:"Hyundai Tucson 2015-2021", price:1300, availability:"in_stock", type:"analog", marka:"Hyundai", model:"Tucson", year:2018, motor:"2.0"},
  {id:12, name:"Стартер Bosch", brand:"Bosch", category:"Электрика", compatibility:"Ford Fiesta 2016-2020", price:6700, availability:"in_stock", type:"original", marka:"Ford", model:"Fiesta", year:2017, motor:"1.4"},
  {id:13, name:"Колодки тормозные Akebono", brand:"Akebono", category:"Тормоза", compatibility:"Honda Accord 2015-2020", price:2800, availability:"order", type:"analog", marka:"Honda", model:"Accord", year:2018, motor:"2.4"},
  {id:14, name:"Амортизатор Kayaba", brand:"Kayaba", category:"Подвеска", compatibility:"Toyota Camry 2015-2020", price:3600, availability:"in_stock", type:"original", marka:"Toyota", model:"Camry", year:2019, motor:"2.5"},
  {id:15, name:"Фара левая Valeo", brand:"Valeo", category:"Кузов", compatibility:"Renault Megane 2016-2021", price:8900, availability:"in_stock", type:"original", marka:"Renault", model:"Megane", year:2018, motor:"1.5"},
  {id:16, name:"Трос сцепления Sachs", brand:"Sachs", category:"Трансмиссия", compatibility:"Volkswagen Polo 2015-2020", price:1500, availability:"order", type:"analog", marka:"Volkswagen", model:"Polo", year:2017, motor:"1.6"},
  {id:17, name:"Масляный фильтр Mann", brand:"Mann", category:"Двигатель", compatibility:"BMW 3 Series 2016-2021", price:2100, availability:"in_stock", type:"original", marka:"BMW", model:"3 Series", year:2018, motor:"2.0"},
  {id:18, name:"Блок предохранителей VAG", brand:"VAG", category:"Электрика", compatibility:"Audi A4 2015-2020", price:4700, availability:"order", type:"original", marka:"Audi", model:"A4", year:2017, motor:"2.0"},
  {id:19, name:"Рулевая рейка TRW", brand:"TRW", category:"Подвеска", compatibility:"Mercedes C-Class 2015-2020", price:10500, availability:"in_stock", type:"original", marka:"Mercedes", model:"C-Class", year:2018, motor:"2.0"},
  {id:20, name:"Бампер передний Valeo", brand:"Valeo", category:"Кузов", compatibility:"Opel Astra 2016-2021", price:9500, availability:"order", type:"analog", marka:"Opel", model:"Astra", year:2019, motor:"1.4"},
];


// -------------------- STYLED COMPONENTS --------------------
const SearchPartsContainer = styled.div`padding:2rem 1rem; max-width:1200px; margin:0 auto;`;
const SearchHeader = styled.div`margin-bottom:2rem;`;
const SearchTitle = styled.h1`color:${props => props.theme.text}; margin-bottom:1rem;`;
const SearchForm = styled.form`
  display:grid; grid-template-columns:2fr 1fr 1fr 1fr 1fr auto; gap:1rem; margin-bottom:2rem;
  @media(max-width:768px){ grid-template-columns:1fr; }
`;
const SearchInput = styled.input`
  padding:0.75rem; border:1px solid ${props => props.theme.border}; border-radius:8px;
  background:${props => props.theme.background}; color:${props => props.theme.text}; font-size:1rem;
  &::placeholder{ color:${props => props.theme.textSecondary}; }
`;
const SearchButton = styled.button`
  padding:0.75rem 1.5rem; background:${props => props.theme.primary};
  color:white; border:none; border-radius:8px; cursor:pointer; font-weight:500;
  &:hover{ background:${props => props.theme.primary}dd; }
`;
const FiltersSection = styled.div`display:grid; grid-template-columns:300px 1fr; gap:2rem; @media(max-width:768px){grid-template-columns:1fr;}`;
const FiltersSidebar = styled.div`background:${props => props.theme.surface}; padding:1.5rem; border-radius:12px; box-shadow:0 4px 20px ${props => props.theme.shadow};`;
const FilterGroup = styled.div`margin-bottom:2rem;`;
const FilterTitle = styled.h3`color:${props => props.theme.text}; margin-bottom:1rem; font-size:1.1rem;`;
const FilterOptions = styled.div`display:flex; flex-direction:column; gap:0.5rem;`;
const FilterCheckbox = styled.label`display:flex; align-items:center; gap:0.5rem; color:${props => props.theme.textSecondary}; cursor:pointer; &:hover{ color:${props => props.theme.text}; }`;
const PriceRange = styled.div`display:flex; gap:0.5rem; align-items:center;`;
const PriceInput = styled.input`padding:0.5rem; border:1px solid ${props => props.theme.border}; border-radius:4px; background:${props => props.theme.background}; color:${props => props.theme.text}; width:80px;`;
const ProductsSection = styled.div`background:${props => props.theme.surface}; padding:1.5rem; border-radius:12px; box-shadow:0 4px 20px ${props => props.theme.shadow};`;
const ProductsHeader = styled.div`display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;`;
const ResultsCount = styled.span`color:${props => props.theme.textSecondary};`;
const ViewToggle = styled.div`display:flex; gap:0.5rem;`;
const ViewButton = styled.button`
  padding:0.5rem; border:1px solid ${props => props.theme.border};
  background:${props => props.active ? props.theme.primary : props.theme.background};
  color:${props => props.active ? 'white' : props.theme.text}; border-radius:4px; cursor:pointer;
`;
const SortSelect = styled.select`
  padding:0.5rem; border:1px solid ${props => props.theme.border}; border-radius:4px;
  background:${props => props.theme.background}; color:${props => props.theme.text};
`;
const ProductsGrid = styled.div`
  display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.5rem;
`;
const ProductCard = styled.div`
  background:${props => props.theme.background}; border-radius:8px; overflow:hidden;
  box-shadow:0 2px 10px ${props => props.theme.shadow}; transition: transform 0.3s ease;
  &:hover{ transform:translateY(-5px); }
`;
const ProductImage = styled.div`height:200px; background:${props => props.theme.surface}; display:flex; align-items:center; justify-content:center; font-size:3rem; color:${props => props.theme.primary};`;
const ProductInfo = styled.div`padding:1rem;`;
const ProductName = styled.h3`color:${props => props.theme.text}; margin-bottom:0.5rem; font-size:1.1rem;`;
const ProductBrand = styled.p`color:${props => props.theme.textSecondary}; margin-bottom:0.5rem; font-size:0.9rem;`;
const ProductCompatibility = styled.p`color:${props => props.theme.accent}; margin-bottom:1rem; font-size:0.9rem;`;
const ProductPrice = styled.div`display:flex; justify-content:space-between; align-items:center;`;
const Price = styled.span`font-size:1.2rem; font-weight:bold; color:${props => props.theme.primary};`;
const AddToCartButton = styled.button`
  padding:0.5rem 1rem; background:${props => props.theme.accent};
  color:white; border:none; border-radius:4px; cursor:pointer; font-weight:500;
  &:hover{ background:${props => props.theme.accent}dd; }
`;

// -------------------- COMPONENT --------------------
const SearchParts = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchParams, setSearchParams] = useSearchParams();

  // -------------------- FILTER STATE --------------------
  const [filters, setFilters] = useState({
    text: searchParams.get("text") || "",
    marka: searchParams.get("marka") || "",
    model: searchParams.get("model") || "",
    year: searchParams.get("year") || "",
    motor: searchParams.get("motor") || "",
    categories: searchParams.get("categories") ? searchParams.get("categories").split(",") : [],
    brands: searchParams.get("brands") ? searchParams.get("brands").split(",") : [],
    availability: searchParams.get("availability") ? searchParams.get("availability").split(",") : [],
    types: searchParams.get("types") ? searchParams.get("types").split(",") : [],
    priceMin: searchParams.get("priceMin") || "",
    priceMax: searchParams.get("priceMax") || "",
    sort: searchParams.get("sort") || ""
  });

  // -------------------- UPDATE FILTERS --------------------
  const updateFilter = (field, value) => setFilters(prev => ({ ...prev, [field]: value }));
  const updateCheckbox = (field, value) => {
    setFilters(prev => {
      const arr = prev[field];
      if (arr.includes(value)) return { ...prev, [field]: arr.filter(i => i !== value) };
      return { ...prev, [field]: [...arr, value] };
    });
  };

  // -------------------- UPDATE URL --------------------
  useEffect(() => {
    const params = {};
    Object.keys(filters).forEach(key => {
      if (Array.isArray(filters[key]) && filters[key].length > 0) params[key] = filters[key].join(",");
      else if (filters[key]) params[key] = filters[key];
    });
    setSearchParams(params);
  }, [filters]);

  // -------------------- FILTERING --------------------
  const filteredProducts = [...productsData].filter(product => {
    const { text, marka, model, year, motor, categories, brands, availability, types, priceMin, priceMax } = filters;
    if (text && !product.name.toLowerCase().includes(text.toLowerCase())) return false;
    if (marka && !product.marka.toLowerCase().includes(marka.toLowerCase())) return false;
    if (model && !product.model.toLowerCase().includes(model.toLowerCase())) return false;
    if (year && product.year !== Number(year)) return false;
    if (motor && !product.motor.includes(motor)) return false;
    if (categories.length > 0 && !categories.includes(product.category)) return false;
    if (brands.length > 0 && !brands.includes(product.brand)) return false;
    if (availability.length > 0 && !availability.includes(product.availability)) return false;
    if (types.length > 0 && !types.includes(product.type)) return false;
    if (priceMin && product.price < Number(priceMin)) return false;
    if (priceMax && product.price > Number(priceMax)) return false;
    return true;
  });

  // -------------------- SORTING --------------------
  const sortedProducts = [...filteredProducts].sort((a,b) => {
    if(filters.sort === "price_asc") return a.price - b.price;
    if(filters.sort === "price_desc") return b.price - a.price;
    if(filters.sort === "brand") return a.brand.localeCompare(b.brand);
    if(filters.sort === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <SearchPartsContainer>
      <SearchHeader>
        <SearchTitle>Поиск запчастей</SearchTitle>
        <SearchForm onSubmit={e => e.preventDefault()}>
          <SearchInput placeholder="Название детали" value={filters.text} onChange={e=>updateFilter("text", e.target.value)} />
          <SearchInput placeholder="Марка" value={filters.marka} onChange={e=>updateFilter("marka", e.target.value)} />
          <SearchInput placeholder="Модель" value={filters.model} onChange={e=>updateFilter("model", e.target.value)} />
          <SearchInput placeholder="Год" value={filters.year} onChange={e=>updateFilter("year", e.target.value)} />
          <SearchInput placeholder="Мотор" value={filters.motor} onChange={e=>updateFilter("motor", e.target.value)} />
          <SearchButton>Найти</SearchButton>
        </SearchForm>
      </SearchHeader>

      <FiltersSection>
        <FiltersSidebar>
          <FilterGroup>
            <FilterTitle>Категории</FilterTitle>
            <FilterOptions>
              {["Двигатель","Трансмиссия","Подвеска","Электрика","Кузов","Тормозная система"].map(cat=>(
                <FilterCheckbox key={cat}>
                  <input type="checkbox" checked={filters.categories.includes(cat)} onChange={()=>updateCheckbox("categories",cat)} /> {cat}
                </FilterCheckbox>
              ))}
            </FilterOptions>
          </FilterGroup>

          <FilterGroup>
            <FilterTitle>Бренд</FilterTitle>
            <FilterOptions>
              {["Bosch","Valeo","Denso","NGK"].map(brand=>(
                <FilterCheckbox key={brand}>
                  <input type="checkbox" checked={filters.brands.includes(brand)} onChange={()=>updateCheckbox("brands",brand)} /> {brand}
                </FilterCheckbox>
              ))}
            </FilterOptions>
          </FilterGroup>

          <FilterGroup>
            <FilterTitle>Цена</FilterTitle>
            <PriceRange>
              <PriceInput placeholder="от" value={filters.priceMin} onChange={(e)=>updateFilter("priceMin",e.target.value)} />
              <span>—</span>
              <PriceInput placeholder="до" value={filters.priceMax} onChange={(e)=>updateFilter("priceMax",e.target.value)} />
            </PriceRange>
          </FilterGroup>

          <FilterGroup>
            <FilterTitle>Наличие</FilterTitle>
            <FilterOptions>
              <FilterCheckbox>
                <input type="checkbox" checked={filters.availability.includes("in_stock")} onChange={()=>updateCheckbox("availability","in_stock")} /> В наличии
              </FilterCheckbox>
              <FilterCheckbox>
                <input type="checkbox" checked={filters.availability.includes("order")} onChange={()=>updateCheckbox("availability","order")} /> Под заказ
              </FilterCheckbox>
            </FilterOptions>
          </FilterGroup>

          <FilterGroup>
            <FilterTitle>Тип</FilterTitle>
            <FilterOptions>
              <FilterCheckbox>
                <input type="checkbox" checked={filters.types.includes("original")} onChange={()=>updateCheckbox("types","original")} /> Оригинал
              </FilterCheckbox>
              <FilterCheckbox>
                <input type="checkbox" checked={filters.types.includes("analog")} onChange={()=>updateCheckbox("types","analog")} /> Аналог
              </FilterCheckbox>
            </FilterOptions>
          </FilterGroup>
        </FiltersSidebar>

        <ProductsSection>
          <ProductsHeader>
            <ResultsCount>Найдено {sortedProducts.length} товара</ResultsCount>
            <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
              <ViewToggle>
                <ViewButton active={viewMode==='grid'} onClick={()=>setViewMode('grid')}><Grid size={16}/></ViewButton>
                <ViewButton active={viewMode==='list'} onClick={()=>setViewMode('list')}><List size={16}/></ViewButton>
              </ViewToggle>
              <SortSelect value={filters.sort} onChange={(e)=>updateFilter("sort",e.target.value)}>
                <option value="">Сортировать</option>
                <option value="price_asc">Цена ↑</option>
                <option value="price_desc">Цена ↓</option>
                <option value="brand">Бренд</option>
                <option value="category">Категория</option>
              </SortSelect>
            </div>
          </ProductsHeader>

          <ProductsGrid style={{gridTemplateColumns:viewMode==='grid'?'repeat(auto-fill,minmax(280px,1fr))':'1fr'}}>
            {sortedProducts.map(product=>(
              <ProductCard key={product.id}>
                <ProductImage>🔧</ProductImage>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductBrand>{product.brand}</ProductBrand>
                  <ProductCompatibility>{product.compatibility}</ProductCompatibility>
                  <ProductPrice>
                    <Price>{product.price} ₽</Price>
                    <AddToCartButton>В корзину</AddToCartButton>
                  </ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductsGrid>
        </ProductsSection>
      </FiltersSection>
    </SearchPartsContainer>
  );
};

export default SearchParts;
