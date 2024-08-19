export interface MovieInfo {
  movie_image: string;
  tmdb_id: string;
  backdrop: string;
  youtube_trailer: string;
  genre: string;
  plot: string;
  cast: string;
  rating: string;
  director: string;
  releasedate: string;
  backdrop_path: string[];
  duration_secs: number;
  duration: string;
  video: VideoInfo;
  audio: AudioInfo;
  bitrate: number;
}

interface VideoInfo {
  index: number;
  codec_name: string;
  codec_long_name: string;
  profile: string;
  codec_type: string;
  codec_time_base: string;
  codec_tag_string: string;
  codec_tag: string;
  width: number;
  height: number;
  coded_width: number;
  coded_height: number;
  has_b_frames: number;
  sample_aspect_ratio: string;
  display_aspect_ratio: string;
  pix_fmt: string;
  level: number;
  color_range: string;
  color_space: string;
  color_transfer: string;
  color_primaries: string;
  chroma_location: string;
  field_order: string;
  refs: number;
  is_avc: string;
  nal_length_size: string;
  r_frame_rate: string;
  avg_frame_rate: string;
  time_base: string;
  start_pts: number;
  start_time: string;
  bits_per_raw_sample: string;
  disposition: Disposition;
}

interface AudioInfo {
  index: number;
  codec_name: string;
  codec_long_name: string;
  profile: string;
  codec_type: string;
  codec_time_base: string;
  codec_tag_string: string;
  codec_tag: string;
  sample_fmt: string;
  sample_rate: string;
  channels: number;
  channel_layout: string;
  bits_per_sample: number;
  r_frame_rate: string;
  avg_frame_rate: string;
  time_base: string;
  start_pts: number;
  start_time: string;
  disposition: Disposition;
}

interface Disposition {
  default: number;
  dub: number;
  original: number;
  comment: number;
  lyrics: number;
  karaoke: number;
  forced: number;
  hearing_impaired: number;
  visual_impaired: number;
  clean_effects: number;
  attached_pic: number;
  timed_thumbnails: number;
}

export interface MovieData {
  stream_id: number;
  name: string;
  added: string;
  category_id: string;
  container_extension: string;
  custom_sid: string;
  direct_source: string;
}

export interface tmdb{
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string | null; name: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

}

export interface MovieDatails {
   info: MovieInfo;
  movie_data: MovieData;
  tmdb:tmdb | undefined;
}
export class MovieDatailsDeclear {
  private _item: MovieDatails | undefined;

  // Getter for item
  public get item(): MovieDatails | undefined {
    return this._item;
  }

  // Setter for item
  public  setItem(value: MovieDatails):void {
    this._item = value;
  }
}

