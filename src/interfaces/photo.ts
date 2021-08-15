/** @format */

export interface AlbumModel {
  userId: number;
  id: number;
  title: string;
}

export interface PhotoModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
