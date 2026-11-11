export interface UnlockScheduleEntry {
  city: string;
  region: string;
  timezone: string;
  unlockTime: string;
  notes: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export interface ReleaseInfo {
  gameTitle: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  releaseDateHuman: string;
  preloadDate: string;
  preloadDateHuman: string;
  platforms: string[];
  downloadSizePS5: string;
  downloadSizeXbox: string;
  engine: string;
  setting: string;
  targetFramerates: {
    ps5: string;
    ps5Pro: string;
    xboxSeriesX: string;
    xboxSeriesS: string;
  };
  unlockSchedule: UnlockScheduleEntry[];
  faq: FAQEntry[];
}

export interface FrameAnalysisEntry {
  timestamp: string;
  label: string;
  description: string;
}

export interface SoundtrackInfo {
  title: string;
  artist: string;
  notes: string;
}

export interface Trailer {
  id: string;
  slug: string;
  number: number;
  title: string;
  publishDate: string;
  publishDateHuman: string;
  duration: string;
  durationSeconds: number;
  youtubeId: string;
  soundtrack: SoundtrackInfo;
  summary: string;
  frameAnalysis: FrameAnalysisEntry[];
  vehiclesSpotted: string[];
  weaponsSpotted: string[];
  transcript: string;
}

export interface SubLocation {
  name: string;
  type: string;
  description: string;
}

export interface Faction {
  name: string;
  description: string;
  threatLevel: 'Bassa' | 'Media' | 'Alta' | 'Estrema';
}

export interface CollectibleItem {
  id: string;
  name: string;
  type: string;
  reward: string;
}

export interface LocationRegion {
  id: string;
  slug: string;
  name: string;
  category: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  atmosphere: string;
  subLocations: SubLocation[];
  factions: Faction[];
  vehiclesPresent: string[];
  wildlife: string[];
  collectibles: CollectibleItem[];
}

export interface Protagonist {
  id: string;
  name: string;
  alias: string;
  role: string;
  background: string;
  specialAbilities: string[];
  signatureWeapons: string[];
  signatureVehicles: string[];
  status: string;
}

export interface HardwareDeal {
  id: string;
  title: string;
  category: 'SSD PS5' | 'Storage Xbox' | 'Console' | 'Ricarica Store' | 'Cuffie';
  targetConsole: string;
  badge: string;
  price: string;
  originalPrice?: string;
  affiliateUrl: string;
  rating: string;
  reviewsCount: string;
  features: string[];
  storageCapacityGb: number;
}

export interface GTA6Database {
  releaseInfo: ReleaseInfo;
  trailers: Trailer[];
  locations: LocationRegion[];
  protagonists: Protagonist[];
  hardwareDeals: HardwareDeal[];
}
