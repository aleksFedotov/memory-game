import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const ModalContentWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.type === 'menu' ? '1.6rem' : '4rem')};

  ${media.phone} {
    gap: 2.4rem;
  }
`;

export const ResultHeading = styled.p`
  font-size: var(--font-size-heading-l);
  color: var(----color-big-stone);
  text-align: center;
  margin-bottom: 1.6rem;

  ${media.phone} {
    font-size: 2.4rem;
  }
`;

export const ResultText = styled.p`
  font-size: var(--font-size-body);
  color: var(--color-gothic);
  text-align: center;

  ${media.phone} {
    font-size: 1.4rem;
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export const ResultListItem = styled.li`
  width: 100%;
  padding: 1.6rem 3.2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.isWinner ? 'var(--color-big-stone)' : '#DFE7EC'};

  h2 {
    color: ${(props) =>
      props.isWinner
        ? 'var(--color-alabaster)'
        : 'var(--color-pickled-bluewood)'};
  }
    
  }

  p {
    font-size: var(--font-size-body);
    color: ${(props) =>
      props.isWinner ? 'var(--color-alabaster)' : 'var(--color-gothic)'};
  }
  
  ${media.phone} {
    padding: 1.2rem 1.6rem;
    h2 {
    font-size: 2rem; 
    }

    p {
   font-size: 1.3rem;
    }
  
`;

export const ResultBtnWrapper = styled.div`
  display: flex;
  gap: 1.4rem;

  ${media.phone} {
    flex-direction: column;
    gap: 1.6rem;
  }
`;
