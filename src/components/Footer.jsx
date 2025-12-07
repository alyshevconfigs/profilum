import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.surface};
  padding: 2rem 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.primary};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

const ContactInfo = styled.div`
  p {
    margin: 0.5rem 0;
    color: ${props => props.theme.textSecondary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Меню</h3>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/search-parts">Запчасти</a></li>
            <li><a href="/diagnostics">Диагностика</a></li>
            <li><a href="/booking">Запись на ремонт</a></li>
            <li><a href="/services">Услуги</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Компания</h3>
          <ul>
            <li><a href="/about">О нас</a></li>
            <li><a href="/contacts">Контакты</a></li>
            {/* <li><a href="/blog">Блог</a></li> */}
            <li><a href="#">FAQ</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Контакты</h3>
          <ContactInfo>
            <p>Телефон: +7 (909) 999-66-66</p> 
            <p>Email: admin@avtohaus.ru</p>
            <p>Адрес: Тюмень, ул. Индустриальная, 5.</p>
          </ContactInfo>
          <SocialLinks>
            <SocialLink href="#">📘</SocialLink>
            <SocialLink href="#">📷</SocialLink>
            <SocialLink href="#">🚘</SocialLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <h3>Карта сервисов</h3>
          <p>Найдите ближайший сервисный центр</p>
          <br></br>
          <div style={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src="https://yandex.com/map-widget/v1/-/CLg9q2OS"
                width="100%"
                height="150"
              ></iframe>
            </div>
        </FooterSection>
      </FooterContent>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
        © 2025 AVTOHAUS FORT. Все права защищены.
      </div>
    </FooterContainer>
  );
};

export default Footer;
