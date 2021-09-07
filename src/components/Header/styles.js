import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 6rem;
`

export const ThemeButton = styled.div`
  width: max-content;
  margin: 1rem auto 0;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.5rem;
  color: ${props => props.theme.current.colors.text.primary};
`

export const Text = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`
export const Strong = styled.h1`
  font-size: 2.6rem;
  font-weight: 500;
`

export const Data = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 9rem;
  color: ${props => props.color};

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`

export const SectionTitle = styled.span`
  font-size: 1.3rem;
`

export const Amount = styled.span`
  font-size: 2rem;
`
