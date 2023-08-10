export declare type ExtraTags = {
  [k: string]: string;
};

export declare type NameDetails = {
  [k: string]: string | undefined;
  name: string;
  ref?: string;
};

/**
 * Address details return a list of names together with a designation label.
 *
 * They roughly correspond to the classification of the OpenStreetMap data according to either the place tag or the main key of the object.
 *
 * @remarks
 * It is highly unlikely that a single AddressDetails object could contain all listed keys
 */
export declare interface AddressDetails {
  continent?: string;
  country?: string;
  country_code?: string;
  region?: string;
  state?: string;
  state_district?: string;
  county?: string;
  municipality?: string;
  city?: string;
  town?: string;
  village?: string;
  city_district?: string;
  borough?: string;
  suburb?: string;
  subdivision?: string;
  hamlet?: string;
  croft?: string;
  isolated_dwelling?: string;
  neighbourhood?: string;
  allotments?: string;
  quarter?: string;
  city_block?: string;
  residential?: string;
  farm?: string;
  farmyard?: string;
  industrial?: string;
  commercial?: string;
  retail?: string;
  road?: string;
  house_number?: string;
  house_name?: string;
  emergency?: string;
  historic?: string;
  military?: string;
  natural?: string;
  landuse?: string;
  place?: string;
  railway?: string;
  man_made?: string;
  aerialway?: string;
  boundary?: string;
  amenity?: string;
  aeroway?: string;
  club?: string;
  craft?: string;
  leisure?: string;
  office?: string;
  mountain_pass?: string;
  shop?: string;
  tourism?: string;
  bridge?: string;
  tunnel?: string;
  waterway?: string;
  postcode?: string;
}

/**
 * Primary address type of the object
 * @see
 * {@link AddressDetails}
 */
export declare type AddressType = keyof AddressDetails;
