import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import {Categories, PizzaBlock, SortPopup} from '../components';

import { setCategory } from "../redux/actions/filters";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые'];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup items={[
            {name:'популярности', type: 'popular'},
            {name:'цене', type: 'price'},
            {name:'алфавиту', type: 'alphabet'},
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
