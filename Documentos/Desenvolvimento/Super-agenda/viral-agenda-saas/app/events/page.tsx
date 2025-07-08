"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { EventCard } from "@/components/events/event-card"
import { AdManager } from "@/components/ads/ad-manager"
import { Calendar, Search, Filter, Plus, MapPin } from "lucide-react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { useSession } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([])
  const [filteredEvents, setFilteredEvents] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/auth")
    } else {
      fetchEvents()
    }
  }, [session, router])

  useEffect(() => {
    filterEvents()
  }, [events, searchTerm, selectedCategory, selectedLocation])

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select(
          `
          *,
          profiles!events_creator_id_fkey(full_name, avatar_url),
          event_attendees(count)
        `,
        )
        .eq("is_public", true)
        .gte("start_time", new Date().toISOString())
        .order("start_time", { ascending: true })

      if (error) throw error

      setEvents(data || [])
    } catch (error) {
      console.error("Error fetching events:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterEvents = () => {
    let filtered = events

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((event) => event.category === selectedCategory)
    }

    // Filter by location (city)
    if (selectedLocation !== "all") {
      filtered = filtered.filter((event) => event.location?.toLowerCase().includes(selectedLocation.toLowerCase()))
    }

    setFilteredEvents(filtered)
  }

  const getUniqueLocations = () => {
    const locations = events
      .map((event) => event.location)
      .filter(Boolean)
      .map((location) => location.split(",").pop()?.trim())
      .filter(Boolean)

    return [...new Set(locations)].slice(0, 10) // Top 10 locations
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Descobrir Eventos</h1>
          <p className="text-muted-foreground mt-1">Encontre eventos incríveis acontecendo perto de você</p>
        </div>
        <Button asChild size="lg">
          <Link href="/events/create">
            <Plus className="h-4 w-4 mr-2" />
            Criar Evento
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filtros</span>
          </CardTitle>
          <CardDescription>Encontre exatamente o que você procura</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Categoria</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Localização</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as localizações" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as localizações</SelectItem>
                  {getUniqueLocations().map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== "all" || selectedLocation !== "all") && (
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <Search className="h-3 w-3" />
                  <span>"{searchTerm}"</span>
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <Filter className="h-3 w-3" />
                  <span>{selectedCategory}</span>
                </Badge>
              )}
              {selectedLocation !== "all" && (
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{selectedLocation}</span>
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Ad Banner */}
      <AdManager
        location="header"
        className="max-w-4xl mx-auto"
        fallbackContent={
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Promova seu Evento</h3>
            <p className="text-sm opacity-90 mb-4">Alcance mais pessoas com nossos planos premium</p>
            <Button variant="secondary" size="sm">
              Saiba Mais
            </Button>
          </Card>
        }
      />

      {/* Events Grid */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            {filteredEvents.length} evento{filteredEvents.length !== 1 ? "s" : ""} encontrado
            {filteredEvents.length !== 1 ? "s" : ""}
          </h2>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div key={event.id}>
                <EventCard
                  event={{
                    ...event,
                    creator: { full_name: event.profiles?.full_name || "Usuário" },
                    attendee_count: event.event_attendees?.length || 0,
                  }}
                />
                {/* Insert ad after every 3 events */}
                {(index + 1) % 3 === 0 && index < filteredEvents.length - 1 && (
                  <div className="mt-6">
                    <AdManager
                      location="between_events"
                      fallbackContent={
                        <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-center p-4">
                          <h4 className="font-semibold mb-2">Crie seu Evento</h4>
                          <p className="text-sm opacity-90">É grátis e fácil!</p>
                        </Card>
                      }
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <CardTitle className="mb-2">Nenhum evento encontrado</CardTitle>
              <CardDescription className="mb-4">Tente ajustar os filtros ou criar um novo evento</CardDescription>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                    setSelectedLocation("all")
                  }}
                >
                  Limpar Filtros
                </Button>
                <Button asChild>
                  <Link href="/events/create">Criar Evento</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Sidebar Ad */}
      <AdManager
        location="sidebar"
        className="max-w-md mx-auto"
        fallbackContent={
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center p-4">
            <h4 className="font-semibold mb-2">Analytics Pro</h4>
            <p className="text-sm opacity-90">Acompanhe o desempenho dos seus eventos</p>
          </Card>
        }
      />
    </div>
  )
}
