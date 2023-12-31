export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Cities: {
        Row: {
          city_id: number
          city_name: string | null
          country_id: number
        }
        Insert: {
          city_id?: number
          city_name?: string | null
          country_id: number
        }
        Update: {
          city_id?: number
          city_name?: string | null
          country_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Cities_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "Countries"
            referencedColumns: ["country_id"]
          }
        ]
      }
      Countries: {
        Row: {
          country_code: string | null
          country_id: number
          country_name: string | null
        }
        Insert: {
          country_code?: string | null
          country_id?: number
          country_name?: string | null
        }
        Update: {
          country_code?: string | null
          country_id?: number
          country_name?: string | null
        }
        Relationships: []
      }
      Experience: {
        Row: {
          city_id: number
          experience_description: string | null
          experience_id: number
          experience_name: string | null
          experience_rating: number | null
          image_url: string | null
        }
        Insert: {
          city_id: number
          experience_description?: string | null
          experience_id?: number
          experience_name?: string | null
          experience_rating?: number | null
          image_url?: string | null

        }
        Update: {
          city_id?: number
          experience_description?: string | null
          experience_id?: number
          experience_name?: string | null
          experience_rating?: number | null
          image_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Experience_city_id_fkey"
            columns: ["city_id"]
            referencedRelation: "Cities"
            referencedColumns: ["city_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
