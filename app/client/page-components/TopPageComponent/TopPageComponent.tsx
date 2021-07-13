import { Advantages, HhData, Htag, Sort, Tag } from 'components';
import { Product } from 'components/Product/Product';
import { ESort } from 'components/Sort/Sort.props';
import { useScrollY } from 'hooks/useScrollY';
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
  const Y = useScrollY();

  const setSort = (sort: ESort) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      {Y}
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}
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
