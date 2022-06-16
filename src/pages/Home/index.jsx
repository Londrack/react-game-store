import AsideProductDetail from '../../components/AsideProductDetail';
import AsideShoppingCart from '../../components/AsideShoppingCart';
import ListPlatformIcons from '../../components/ListPlatformIcons';
import LoadingProductList from '../../components/LoadingProductList';
import ProductCard from '../../components/ProductCard';
import { useGetProducts } from '../../hooks/useGetProducts';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setPage } from '../../actions';

export default function Home() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.productPage);
  const isLoading = useSelector(state => state.isLoading);
  const {productsList} = useGetProducts();

  const onNextPage = () => {
    if (window.scrollY) window.scroll(0, 0);
    dispatch(setIsLoading(true));
    const nextPage = page+1;
    dispatch(setPage(nextPage));
  }

  const onPrevPage = () => {
    if (window.scrollY) window.scroll(0, 0);
    dispatch(setIsLoading(true));
    const prevPage = page-1;
    dispatch(setPage(prevPage));
  }

  return (
    <>
      <AsideProductDetail />
      <AsideShoppingCart />
      <section className="grid-center pt-10 mt-10 pb-5 z-index-0">
        <div className="cards-container gap-5">
            {isLoading
              ? [...Array(8).keys()].map(e =>
                  <LoadingProductList key={`${e}-loading`} /> )
              : productsList.map(g =>
                  <ProductCard
                    key={`${g.id}-product-card`}
                    game={g}
                  >
                    <ListPlatformIcons gameId={g.id} platforms={g.parent_platforms} metascore={g.metacritic} />
                  </ProductCard>
              )
            }
        </div>
        <div className='flex-center gap-8 mt-7'>
          {page !== 1
            ? <div className='cursor-pointer' onClick={onPrevPage}><span className='font-lg'>&#xab;</span> Prev Page</div>
            : <div className='opacity-1_5'><span className='font-lg'>&#xab;</span> Prev Page</div>
          }
          <div className='cursor-pointer' onClick={onNextPage}>Next Page <span className='font-lg'>&#xbb;</span></div>
        </div>
      </section>
    </>
  );
}
