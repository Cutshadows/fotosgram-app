export interface ResponsePosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

export interface Post {
  img?: string[];
  _id?: string;
  message?: string;
  coords?: string;
  user?: User;
  created?: string;
}

export interface User {
  avatar?: string;
  _id?: string;
  name?: string;
  email?: string;
}