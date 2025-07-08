import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// Singleton pattern para evitar múltiplas instâncias
let supabaseInstance: ReturnType<typeof createClientComponentClient> | null = null

export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClientComponentClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      options: {
        auth: {
          persistSession: false,
        },
      },
    })
  }
  return supabaseInstance
})()

// Types for our database
export interface Profile {
  id: string
  username?: string
  full_name?: string
  bio?: string
  avatar_url?: string
  website?: string
  instagram?: string
  twitter?: string
  timezone: string
  language: string
  notification_preferences: any
  gamification_score: number
  total_events_created: number
  total_events_attended: number
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  creator_id: string
  title: string
  description?: string
  location?: string
  start_time: string
  end_time: string
  timezone: string
  is_all_day: boolean
  is_recurring: boolean
  recurrence_rule?: any
  color: string
  is_public: boolean
  max_attendees?: number
  tags?: string[]
  attachments?: any[]
  share_token: string
  view_count: number
  share_count: number
  created_at: string
  updated_at: string
}

export interface Invitation {
  id: string
  event_id: string
  inviter_id: string
  invitee_email?: string
  invitee_id?: string
  status: "pending" | "accepted" | "declined"
  invitation_token: string
  message?: string
  invited_at: string
  responded_at?: string
}

export interface Badge {
  id: string
  name: string
  description?: string
  icon?: string
  color: string
  criteria: any
  points: number
  is_active: boolean
  created_at: string
}
