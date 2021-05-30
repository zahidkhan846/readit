export interface Post {
  identifier: string;
  title: string;
  body?: string;
  createdAt: string;
  updatedAt?: string;
  slug: string;
  subName: string;
  url: string;
  username: string;
  voteScore?: number;
  commentCount?: number;
  userVote?: number;
}

export interface User {
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sub {
  createdAt: string;
  updatedAt: string;
  username: string;
  name: string;
  title: string;
  description: string;
  imageUrn: string;
  bannerUrn: string;
  imageUrl: string;
  bannerUrl: string;
  posts?: Post[];
}
