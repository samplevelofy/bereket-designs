export interface Design {
  id: number;
  created_at: string;
  title: string;
  project_type: string | null;
  client: string | null;
  summary: string | null;
  creative_brief: string | null;
  cover_image: string | null;
  gallery_images: string[] | null;
  tools_used: string[] | null;
}