import axios from 'axios';
import { API } from 'helpers/api';
import { firstLevelMenu } from 'helpers/helpers';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { TopPageComponent } from 'page-components';
import { ParsedUrlQuery } from 'querystring';
import { IMenuItem } from '../../interfaces/menu.interface';
import {
  ETopLevelCategory,
  ITopPageModel,
} from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layout/Layout';

function TopPage({
  firstCategory,
  page,
  products,
}: ITopPageProps): JSX.Element {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: m.id,
    });
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    });

    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<ITopPageModel>(
      API.topPage.byAlias + params.alias
    );

    const { data: products } = await axios.post<IProductModel[]>(
      API.product.find,
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

interface ITopPageProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: ETopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}
