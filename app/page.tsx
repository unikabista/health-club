import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Phone, Building2, Activity, ArrowRight, Shield, Users, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
              <Heart className="h-8 w-8 text-primary" fill="currentColor" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Community Health Resource Hub
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Connecting Monroe, Louisiana residents with accessible, comprehensive health resources and emergency
              information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/clinics">
                  Find Local Clinics
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/emergency">
                  Emergency Contacts
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-2xl">The Community Need</CardTitle>
                <CardDescription className="text-base">Why this resource matters for Monroe</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Many Monroe residents face challenges accessing timely health information and services. Information
                  about local clinics, mental health resources, and emergency contacts is often scattered across
                  multiple websites and platforms, making it difficult to find help when needed most.
                </p>
                <p>
                  This health resource hub centralizes essential health information in one accessible location, helping
                  community members quickly find local healthcare providers, emergency contacts, mental health services,
                  and wellness resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Help</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quick access to the health resources you need, when you need them
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Local Clinics</CardTitle>
                  <CardDescription>Searchable directory of healthcare providers in Monroe</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/clinics">
                      Browse Clinics
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>Emergency Help</CardTitle>
                  <CardDescription>Critical hotlines and emergency contact information</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/emergency">
                      Get Emergency Info
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>Wellness Resources</CardTitle>
                  <CardDescription>Tips for mental health, nutrition, and healthy living</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/wellness">
                      Explore Wellness
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Reliable Information</CardTitle>
                  <CardDescription>Verified and up-to-date health resources</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>24/7 Access</CardTitle>
                  <CardDescription>Find help anytime, from any device</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Community Focused</CardTitle>
                  <CardDescription>Resources tailored to Monroe residents</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our comprehensive health resources and find the support you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default">
                <Link href="/clinics">Find a Clinic</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/wellness">Wellness Tips</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
