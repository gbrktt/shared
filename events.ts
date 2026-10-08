export interface AppEvent {
  id: string;
  title: string;
  genre: string | null;
  price_from: number | null;
  venue_name: string | null;
  lat: number | null;
  lng: number | null;
  starts_at: string;
  ends_at: string | null;
  live_now: boolean;
  description?: string | null;
  address?: string | null;
  city?: string | null;
  noise_level?: string | null;
  is_favorite?: boolean;
  favorite_id?: string | null;
  distance_km?: number | null;
  images?: string[] | null;
  external_url?: string | null;
  /**
   * Confianza multi-fuente (aditivo, Fase 2 · diferenciación):
   *   · `sources_count` — nº de fuentes independientes que confirman el evento
   *     (1 = una sola fuente; ≥2 = verificado en varias).
   *   · `last_verified_at` — ISO de la última confirmación por una fuente.
   * Ambos opcionales para no romper clientes antiguos ni los tests de contrato.
   */
  sources_count?: number | null;
  last_verified_at?: string | null;
}

export type TimeRange = 'now' | 'tonight';

export type Genre = '' | 'jazz' | 'rock' | 'indie' | 'electronic' | 'pop';

export interface FetchEventsParams {
  lat: number;
  lng: number;
  radiusKm: number;
  timeRange: TimeRange;
  genre?: Genre | null;
}

export interface AddFavoriteBody {
  eventinstanceid: string;
}

export interface AddFavoriteResponse {
  id: string;
}