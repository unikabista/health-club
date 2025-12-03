"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Building2, Phone, MapPin, Clock, Search } from "lucide-react"

const clinics = [
  {
    id: 1,
    name: "Monroe Family Health Center",
    type: "Family Medicine",
    address: "1500 N 18th St, Monroe, LA 71201",
    phone: "(318) 387-2323",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Primary Care", "Pediatrics", "Vaccinations"],
  },
  {
    id: 2,
    name: "Community Care Clinic",
    type: "Urgent Care",
    address: "2200 Louisville Ave, Monroe, LA 71201",
    phone: "(318) 361-2000",
    hours: "Mon-Sat: 9AM-7PM",
    services: ["Urgent Care", "X-Rays", "Lab Services"],
  },
  {
    id: 3,
    name: "Monroe Mental Health Center",
    type: "Mental Health",
    address: "4800 S Grand St, Monroe, LA 71202",
    phone: "(318) 362-3270",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Counseling", "Psychiatry", "Crisis Support"],
  },
  {
    id: 4,
    name: "St. Francis Medical Center",
    type: "Hospital",
    address: "309 Jackson St, Monroe, LA 71201",
    phone: "(318) 966-4000",
    hours: "24/7 Emergency",
    services: ["Emergency Care", "Surgery", "Specialty Care"],
  },
  {
    id: 5,
    name: "Monroe Dental Care",
    type: "Dental",
    address: "3100 Kilpatrick Blvd, Monroe, LA 71201",
    phone: "(318) 325-8581",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["General Dentistry", "Cleanings", "Emergency Dental"],
  },
  {
    id: 6,
    name: "Ouachita Valley Health Center",
    type: "Community Health",
    address: "1200 Oliver Rd, Monroe, LA 71201",
    phone: "(318) 387-1115",
    hours: "Mon-Fri: 7:30AM-5:30PM",
    services: ["Primary Care", "Dental", "Pharmacy"],
  },
  {
    id: 7,
    name: "Express Care Urgent Care",
    type: "Urgent Care",
    address: "2704 Sterlington Rd, Monroe, LA 71203",
    phone: "(318) 807-4300",
    hours: "Daily: 8AM-8PM",
    services: ["Walk-in Care", "Minor Injuries", "Illness Treatment"],
  },
  {
    id: 8,
    name: "Northeast Louisiana Behavioral Health",
    type: "Mental Health",
    address: "1607 N 18th St, Monroe, LA 71201",
    phone: "(318) 362-3270",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Therapy", "Substance Abuse", "Group Support"],
  },
]

export default function ClinicsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClinics = clinics.filter(
    (clinic) =>
      clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.services.some((service) => service.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold">Clinics & Services</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Find local healthcare providers, urgent care facilities, mental health centers, and dental services in
              Monroe, LA
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by clinic name, type, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {filteredClinics.length} {filteredClinics.length === 1 ? "clinic" : "clinics"} found
            </p>
          </div>
        </section>

        {/* Clinics Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredClinics.map((clinic) => (
                <Card key={clinic.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{clinic.name}</CardTitle>
                        <Badge variant="secondary">{clinic.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{clinic.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <a href={`tel:${clinic.phone}`} className="text-primary hover:underline">
                        {clinic.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{clinic.hours}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium mb-2">Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {clinic.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredClinics.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <CardTitle className="mb-2">No clinics found</CardTitle>
                  <CardDescription>Try adjusting your search terms or browse all available clinics</CardDescription>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
