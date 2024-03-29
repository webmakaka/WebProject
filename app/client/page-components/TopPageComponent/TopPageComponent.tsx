import { Advantages, HhData, Htag, Sort, Tag } from 'components';
import { Product } from 'components/Product/Product';
import { ESort } from 'components/Sort/Sort.props';
import { useReducedMotion } from 'framer-motion';
import { ETopLevelCategory } from 'interfaces/page.interface';
import { sortReducer } from 'page-components/TopPageComponent/sort.reducer';
import { ITopPageComponentProps } from 'page-components/TopPageComponent/TopPageComponent.props';
import { useEffect, useReducer } from 'react';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: ITopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: ESort.Rating,
    }
  );

  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: ESort) => {
    // @ts-ignore
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    // @ts-ignore
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m" aria-label={products.length + 'элементов'}>
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div role="list">
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product
              role="listitem"
              layout={shouldReduceMotion ? false : true}
              key={p._id}
              product={p}
            />
          ))}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {sortedProducts && (
          <Tag color="red" size="m">
            hh.ru
          </Tag>
        )}
      </div>
      {firstCategory == ETopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages?.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};
