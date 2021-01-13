import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Slicemaster({ data: { person } }) {
  return (
    <div className="center">
      <Img fluid={person.image.asset.fluid} />
      <h2>
        <span className="mark">{person.name}</span>
      </h2>
      <p>{person.description}</p>
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      description
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 640) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
