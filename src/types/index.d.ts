export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
    teamMembers:TeamMember[]
  };
  content: string;
  slug?: string;
};

export type TeamMember={
  name:string;
  designation:string;
  speciality:string;
  image:string;
  instaLink:string;
  twitterLink:string;
  linkedinLink:string;
}

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    author: string;
    tags: string[];
    date?: string;
    is_featured:boolean;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    social: [
      {
        name: string;
        icon: string;
        link: string;
      },
    ];
  };
  content?: string;
  slug?: string;
};

export type Service = {
  heading: string;
  description: string;
  serviceImg: string;
  serviceLink: string;
  altText: string;
}
export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
  id:string;
};

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
  review:string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
