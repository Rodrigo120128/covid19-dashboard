import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
  padding: 1rem 0;
  margin-bottom: 2rem;

  background: ${props => props.theme.current.colors.card};
  color: white;

  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.49);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.49);
`

export const Name = styled.span`
  font-size: 1.8rem;
  text-align: center;
  color: ${props => props.theme.current.colors.text.primary};
`

export const Data = styled.div`
  margin-top: 1rem;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 0.9rem;
`

export const SectionTitle = styled.span`
  color: ${props => props.theme.current.colors.text.primary};
  margin-bottom: 0.3rem;
`

export const Amount = styled.span`
  font-size: 1.7rem;
  color: ${props => props.color};
`
