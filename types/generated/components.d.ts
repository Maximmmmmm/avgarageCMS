import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFeedback extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feedbacks';
  info: {
    displayName: 'feedback';
  };
  attributes: {
    message: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface BlocksSlide extends Struct.ComponentSchema {
  collectionName: 'components_blocks_slides';
  info: {
    displayName: 'slide';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiComponentsCards extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'blocks.card', true> &
      Schema.Attribute.Required;
  };
}

export interface UiComponentsFeedback extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_feedbacks';
  info: {
    displayName: 'Feedback';
  };
  attributes: {
    feedback: Schema.Attribute.Component<'blocks.feedback', true> &
      Schema.Attribute.Required;
  };
}

export interface UiComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Officina \u00B7 Gommista \u00B7 Meccatronico'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Il tuo meccanico di fiducia'>;
  };
}

export interface UiComponentsSlider extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    slides: Schema.Attribute.Component<'blocks.slide', true> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card': BlocksCard;
      'blocks.feedback': BlocksFeedback;
      'blocks.slide': BlocksSlide;
      'ui-components.cards': UiComponentsCards;
      'ui-components.feedback': UiComponentsFeedback;
      'ui-components.hero': UiComponentsHero;
      'ui-components.slider': UiComponentsSlider;
    }
  }
}
