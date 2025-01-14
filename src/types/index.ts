// export type ArticleType = {
//   id: number;
//   href: string;
//   published_at: string;
//   title: string;
//   description: string;
//   body: string;
//   author: {
//     id: string;
//     name: string;
//   };
//   image: string;
//   categories: Array<{
//     id: string;
//     name: string;
//     score: number;
//     taxonomy: string;
//     links: {
//       self: string;
//     };
//   }>;
//   industries: Array<{
//     id: number;
//     name: string;
//     links: {
//       self: string;
//     };
//   }>;
//   entities: any;
//   topics: any;
//   language: string;
//   source: {
//     id: number;
//     domain: string;
//     home_page_url: string;
//     type: string;
//     rankings: {
//       opr: number;
//     };
//     location: {
//       country_name: string;
//       country_code: string;
//     };
//     favicon: string;
//   };
//   sentiment: {
//     overall: {
//       score: number;
//       polarity: string;
//     };
//     title: {
//       score: number;
//       polarity: string;
//     };
//     body: {
//       score: number;
//       polarity: string;
//     };
//   };
//   summary: Array<{
//     sentence: string;
//     sentiment: {
//       score: number;
//       polarity: string;
//     };
//   }>;
//   keywords: string[];
//   links: Array<{
//     url: string;
//     type: string;
//     format: string;
//   }>;
//   media: any;
//   story: {
//     id: number;
//     uri: string;
//   };
//   is_duplicate: boolean;
//   is_paywall: boolean;
//   sentences_count: number;
//   paragraphs_count: number;
//   words_count: number;
//   characters_count: number;
// };

export type ArticleType = {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string | null;
  language: string;
  category: string[];
  published: string;
};

export type GitHubUserType = {
  id: string;
  nodeId: string;
  displayName: string;
  username: string;
  profileUrl: string;
  photos: { value: string }[];
  provider: string;
  _raw: string;
  _json: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    name: string;
    company: string | null;
    blog: string;
    location: string;
    email: string | null;
    hireable: boolean | null;
    bio: string;
    twitter_username: string | null;
    notification_email: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  };
};

export type FiltersType = {
  category?: string;
  source?: string;
  title?: string;
  date?: string;
};
