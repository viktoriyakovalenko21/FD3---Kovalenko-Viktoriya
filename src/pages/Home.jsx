import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VinylCard from '../components/VinylCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { fetchItems } from '../redux/slices/itemsSlice';
import * as S from './Home.styles';

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.items);

  const [searchValue, setSearchValue] = React.useState('');
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  React.useEffect(() => {
    if (items.length === 0) { 
      dispatch(fetchItems());
    }
  }, [dispatch, items.length]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, searchValue]);

  const scrollToCatalog = () => {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  };

  const categories = ['Все', 'Rock', 'Pop', 'Indie', 'Electronic', 'Hip-Hop', 'Grunge'];

  const filteredItems = items.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(searchValue.toLowerCase());
    const categoryMatch = categoryId === 0 ? true : item.category === categories[categoryId];
    return titleMatch && categoryMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <S.HeroSection>
        <S.HeroTitle>
          <span className="filled">Почувствуй</span>
          <span className="outline">Энергию</span>
        </S.HeroTitle>
        <S.HeroSubtitle>
          Лучшие альбомы, которые изменили историю музыки. <br/>
          Оригинальный винил. Чистый звук.
        </S.HeroSubtitle>
        <S.CtaButton onClick={scrollToCatalog}>Перейти в каталог</S.CtaButton>
      </S.HeroSection>

      <S.CatalogSection id="shop">
        <S.SectionTitle>Актуальное в <span>Каталоге</span></S.SectionTitle>
        
        <FilterBar 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />

        {status === 'error' ? (
           <S.ErrorMsg>Не удалось загрузить товары</S.ErrorMsg>
        ) : (
          <S.Grid>
            {status === 'loading' ? (
              [...new Array(8)].map((_, index) => <S.SkeletonCard key={index} />)
            ) : (
              currentItems.length > 0 ? (
                currentItems.map((obj) => (
                  <VinylCard key={obj.id} {...obj} />
                ))
              ) : (
                <S.NotFoundMsg>По вашему запросу ничего не найдено </S.NotFoundMsg>
              )
            )}
          </S.Grid>
        )}
        
        {status === 'success' && filteredItems.length > 0 && (
          <Pagination 
            currentPage={currentPage}
            onChangePage={(number) => setCurrentPage(number)}
            totalItems={filteredItems.length}
            itemsPerPage={itemsPerPage}
          />
        )}
      </S.CatalogSection>
    </div>
  );
};

export default Home;