import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBannerMain extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banner_main';
  info: {
    displayName: 'Banner Main';
  };
  attributes: {
    background: Schema.Attribute.Media;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    subtitle: Schema.Attribute.String;
    theme: Schema.Attribute.Component<'shared.theme-options', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_banner';
  info: {
    displayName: 'CTA Banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_block';
  info: {
    displayName: 'FAQ Block';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
  };
}

export interface BlocksFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_grid';
  info: {
    displayName: 'Feature Grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface BlocksNewsBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_news_block';
  info: {
    displayName: 'News Block';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
  };
}

export interface BlocksProductHighlight extends Struct.ComponentSchema {
  collectionName: 'components_blocks_product_highlight';
  info: {
    displayName: 'Product Highlight';
  };
  attributes: {
    products: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_text';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksSlider extends Struct.ComponentSchema {
  collectionName: 'components_blocks_slider';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedAnalyticsTracking extends Struct.ComponentSchema {
  collectionName: 'components_shared_analytics';
  info: {
    displayName: 'Analytics Tracking';
  };
  attributes: {
    eventName: Schema.Attribute.String;
    payload: Schema.Attribute.JSON;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_button';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'link']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_link';
  info: {
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetadata extends Struct.ComponentSchema {
  collectionName: 'components_shared_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedThemeOptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_theme_options';
  info: {
    displayName: 'Theme Options';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'gray', 'primary', 'secondary']
    >;
    layout: Schema.Attribute.Enumeration<['full', 'boxed']> &
      Schema.Attribute.DefaultTo<'full'>;
    padding: Schema.Attribute.Enumeration<['none', 'small', 'medium', 'large']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.banner-main': BlocksBannerMain;
      'blocks.cta-banner': BlocksCtaBanner;
      'blocks.faq-block': BlocksFaqBlock;
      'blocks.feature-grid': BlocksFeatureGrid;
      'blocks.news-block': BlocksNewsBlock;
      'blocks.product-highlight': BlocksProductHighlight;
      'blocks.rich-text': BlocksRichText;
      'blocks.slider': BlocksSlider;
      'shared.analytics-tracking': SharedAnalyticsTracking;
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.metadata': SharedMetadata;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.theme-options': SharedThemeOptions;
    }
  }
}
