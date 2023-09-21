import type { Schema, Attribute } from '@strapi/strapi';

export interface Test1Test extends Schema.Component {
  collectionName: 'components_test1_tests';
  info: {
    displayName: 'test';
  };
  attributes: {
    Descript: Attribute.RichText;
    Title: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'test1.test': Test1Test;
    }
  }
}
