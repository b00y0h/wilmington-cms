/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  items: {
    type?: 'link' | 'subMenu';
    label: string;
    link: {
      type?: 'reference' | 'custom';
      url: string;
      reference?:
        | {
            value: string | Post;
            relationTo: 'posts';
          }
        | {
            value: string | Page;
            relationTo: 'pages';
          };
    };
    subMenu: {
      label: string;
      type?: 'reference' | 'custom';
      url: string;
      reference?:
        | {
            value: string | Post;
            relationTo: 'posts';
          }
        | {
            value: string | Page;
            relationTo: 'pages';
          };
      id?: string;
    }[];
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  author?: string | User;
  publishedDate?: string;
  title: string;
  excerpt?: string;
  category?: string | Category;
  tags?: string[] | Tag[];
  hero: {
    type?: 'basic' | 'fullscreen';
    content: {
      [k: string]: unknown;
    }[];
    background: string | Media;
  };
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  title: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  excerpt?: string;
  category?: string | Category;
  tags?: string[] | Tag[];
  hero: {
    type?: 'basic' | 'fullscreen';
    content: {
      [k: string]: unknown;
    }[];
    background: string | Media;
  };
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "programs".
 */
export interface Program {
  id: string;
  title: string;
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faculty".
 */
export interface Faculty {
  id: string;
  firstName: string;
  lastName: string;
  profilePhoto?: string | Media;
  relationshipToProgram?: string | Program;
  bio?: {
    [k: string]: unknown;
  }[];
  contactInfo: {
    phone?: string;
    position?: string;
    location?: 'wilmington' | 'cincinnati' | 'virtual';
    curriculumVitae?: string | Media;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    twitter?: string;
  };
  createdAt: string;
  updatedAt: string;
}
