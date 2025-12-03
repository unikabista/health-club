import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, AlertCircle, Heart, Shield, MessageCircle, Ambulance } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const emergencyContacts = [
  {
    id: 1,
    name: "911 - Emergency Services",
    icon: Ambulance,
    phone: "911",
    description: "For immediate life-threatening emergencies",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    id: 2,
    name: "988 - Suicide & Crisis Lifeline",
    icon: MessageCircle,
    phone: "988",
    description: "24/7 free and confidential support for people in distress",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 3,
    name: "Poison Control",
    icon: AlertCircle,
    phone: "1-800-222-1222",
    description: "24/7 poison emergency hotline",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 4,
    name: "Domestic Violence Hotline",
    icon: Shield,
    phone: "1-800-799-7233",
    description: "National domestic violence hotline, available 24/7",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 5,
    name: "Crisis Text Line",
    icon: MessageCircle,
    phone: "Text HOME to 741741",
    description: "Text-based crisis support available 24/7",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 6,
    name: "Substance Abuse Hotline",
    icon: Phone,
    phone: "1-800-662-4357",
    description: "SAMHSA National Helpline for substance abuse",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

const localEmergency = [
  {
    name: "St. Francis Medical Center ER",
    phone: "(318) 966-4000",
    address: "309 Jackson St, Monroe, LA 71201",
    hours: "24/7 Emergency Room",
  },
  {
    name: "LSU Health Monroe Emergency",
    phone: "(318) 330-7000",
    address: "4864 Jackson St, Monroe, LA 71202",
    hours: "24/7 Emergency Room",
  },
  {
    name: "Monroe Police Department",
    phone: "(318) 329-2600",
    address: "2604 Renwick St, Monroe, LA 71201",
    hours: "Non-emergency line",
  },
]

export default function EmergencyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-destructive/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-10 w-10 text-destructive" />
              <h1 className="text-4xl font-bold">Emergency Help</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Critical hotlines and emergency contact information for immediate assistance
            </p>
          </div>
        </section>

        {/* Alert */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Alert variant="destructive">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle className="text-lg font-semibold">Life-Threatening Emergency?</AlertTitle>
              <AlertDescription className="text-base">
                If you or someone else is in immediate danger, call 911 right away. Do not wait.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* National Hotlines */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6">National Hotlines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact) => {
                const Icon = contact.icon
                return (
                  <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${contact.bgColor} flex-shrink-0`}
                        >
                          <Icon className={`h-6 w-6 ${contact.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg mb-1">{contact.name}</CardTitle>
                          <CardDescription className="text-sm">{contact.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        className="w-full"
                        size="lg"
                        variant={contact.id === 1 ? "destructive" : "default"}
                      >
                        <a href={contact.phone.startsWith("1-") ? `tel:${contact.phone}` : undefined}>
                          <Phone className="mr-2 h-5 w-5" />
                          {contact.phone}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Local Emergency Services */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6">Local Emergency Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localEmergency.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription>{service.hours}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${service.phone}`} className="text-primary hover:underline">
                        {service.phone}
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.address}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* When to Call 911 */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">When to Call 911</CardTitle>
                <CardDescription>Call immediately if you observe any of these situations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Chest pain, difficulty breathing, or heart attack symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Severe bleeding or injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Signs of stroke (face drooping, arm weakness, speech difficulty)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Sudden loss of consciousness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Severe allergic reaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Someone threatening to harm themselves or others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Fire, carbon monoxide alarm, or hazardous material exposure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
