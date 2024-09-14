export interface Post {
  id: string;
  attributes: {
    diary_hour: string;
    diary_description: string;
    date_diary: string;
    embeds: {
      data: [];
    },
    country: Country;
  };
}

export interface Embed {
  id: string;
  attributes: {
    embed_name: string;
    embed_iframe: string;
  };
}

export interface Country {
  data: {
    id: string;
    attributes: {
      name: string;
      image: {
        data: {
          id: string;
          attributes: {
            name: string;
            url: string;
          }
        }
      };
    };
  };
}