export type Menu = {
  title: string;
  url: string;
  submenus: Submenu[];
};

export type Submenu = {
  title: string;
  url: string;
};

export type Content = {
  title: string;
  cover: string;
  description: string;
  tags: string[];
  goodreads?: string;
  amazon?: string;
  itch?: string;
  more?: string;
  slug?: string;
};

export type ExpandedContent = {
  title: string;
  slug: string;
  itch: string;
  description: string[];
  devblog: string;
  gallery: string[];
};

export type Project = {
  title: string;
  description: string;
  url: string;
};
