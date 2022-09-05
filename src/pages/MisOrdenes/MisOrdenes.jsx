import React from 'react';
import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';
import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from './MisOrdenesStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as ordersActions from '../../Redux/orders/order-actions'

const MisOrdenes = () => {

  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ordersActions.getFullOrders(currentUser?.id))
  }, [dispatch, currentUser?.Id])

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button
            onClick={() => navigate('/') } 
          >
            Volver a comprar
            </Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
      <MisOrdenesPatternStyled
        src='https://res.cloudinary.com/dic3yjxjd/image/upload/v1662187760/Sin_t%C3%ADtulo-2_tg2dhd.png'
        alt=''
      />
    </>
  );
};

export default MisOrdenes;
