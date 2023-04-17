export interface Issue {
  html_url: string;
  repository_url: string;
  id: number;
  title: string;
  body: string;
  state: string;
  user: {
    url: string;
    avatar_url: string;
    html_url: string; // github page of contr.
  };
}
