import { Heart, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Heart className="h-4 w-4" fill="currentColor" />
              </div>
              <span className="font-semibold">Monroe Health Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting Monroe, Louisiana residents with essential health resources and information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/clinics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Clinics & Services
                </a>
              </li>
              <li>
                <a href="/emergency" className="text-muted-foreground hover:text-foreground transition-colors">
                  Emergency Help
                </a>
              </li>
              <li>
                <a href="/wellness" className="text-muted-foreground hover:text-foreground transition-colors">
                  Wellness Tips
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Emergency Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-destructive" />
                <span className="text-destructive font-semibold">911 - Emergency</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">988 - Crisis Hotline</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Monroe, Louisiana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Monroe Health Hub. Created for CSCI 3030 Final Project.</p>
          <p className="mt-2">For educational purposes. Always call 911 in a life-threatening emergency.</p>
        </div>
      </div>
    </footer>
  )
}
