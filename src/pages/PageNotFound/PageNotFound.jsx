import Link from '../../components/UI/Link/Link';

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>Perdon Pero Esta Página No existe o fue removida</FoundSubtitleStyled>
          <Link />
        </FoundTextStyled>
        <img
          src='https://res.cloudinary.com/dic3yjxjd/image/upload/v1662226072/error_sdlgzk_fouejx.png'
          alt=''
          className='imgNotFound'
        />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
