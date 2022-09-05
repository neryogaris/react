import React, {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../UI/Button/Button';
import * as categoriesActions from '../../Redux/categories/categories-actions'
import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';
import {useSelector, useDispatch} from 'react-redux'

const Hero = ({elementRef}) => {

const [value, setValue]= useState('')

const dispatch = useDispatch();

const listOfCategories = useSelector(state => state.categories.categories).map(category => category.category)

const handlerSubmit = (e, value) => {
  e.preventDefault();

  const newCategory = value.trim().toLowerCase().split(' ').join('');

  const selectedCategory = listOfCategories.find( category => category.toLowerCase() === newCategory);

  if(selectedCategory){
    dispatch(categoriesActions.selectCategory(selectedCategory));
    window.scrollTo(
      elementRef.getBoundingClientRect().x,
      elementRef.getBoundingClientRect().y,
    )
  } else {
    return alert('Categoría no encontrada')
  }

}

  return (
    <HeroContainerStyled>
      <div>
        <h1 className='title'>Maquinarias para la industria</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
          value={value}
          onChange={e => setValue(e.target.value)}
          type='text' placeholder='Productos' />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button onClick={e => handlerSubmit(e, value)} radius='10'>Buscar</Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/dic3yjxjd/image/upload/v1662222336/logo_dalmassoHnos_ckrg51.png'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
