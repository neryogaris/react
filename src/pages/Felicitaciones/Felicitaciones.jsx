import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/dic3yjxjd/image/upload/v1662184800/ok_hand_accept_thumb_index_icon_178856_kgy2ta.png'
          alt=''
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
      <PatternStyled
        src='https://res.cloudinary.com/dic3yjxjd/image/upload/v1662187760/Sin_t%C3%ADtulo-2_tg2dhd.png'
        alt=''
        className='pattern'
      />
    </div>
  );
};

export default Felicitaciones;