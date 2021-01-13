import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';
import SEO from '../components/SEO';

export default function PizzasPage({ data, pageContext }) {
  return (
    <>
      <SEO title={pageContext.toppingName || 'All pizzas'} />
      <ToppingsFilter />
      <PizzaList pizzas={data.pizzas.nodes} />;
    </>
  );
}

export const query = graphql`
  query PizzaQuery($toppingId: String) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { id: { eq: $toppingId } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
