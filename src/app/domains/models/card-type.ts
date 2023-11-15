export type CardType = {
  card_name: {
    name: string;
    name_ruby: string;
  };
  card_properties: {
    attribute: string;
    card_type: string[];
    incantation_type: string;
    level: number;
    monster_type: string;
  };
  card_release: {
    release: string;
    season: number;
    zero_four: true;
  };
  card_url: {
    ocg_url: string;
    wiki_url: string;
  };
  cid: number;
  image_url: string;
  status: {
    atk: number;
    def: number;
  };
  text: string;
  useful?: boolean;
};
