type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type VolumeInfo = {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  imageLinks: ImageLinks;
};

type Book = {
  id: string;
  etag: string;
  volumeInfo: VolumeInfo;
};

export { ImageLinks, VolumeInfo, Book };
