import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Activity, Brain, Heart, Apple, Users, Sun, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/Button';

const wellnessCategories = [
  {
    id: 1,
    title: 'Mental Health & Stress Management',
    icon: Brain,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    tips: [
      'Practice deep breathing: Inhale for 4 counts, hold for 4, exhale for 4',
      'Take regular breaks during work or study sessions',
      'Connect with friends and family regularly',
      'Try mindfulness meditation for 5-10 minutes daily',
      'Maintain a consistent sleep schedule',
      'Limit caffeine and screen time before bed',
      'Keep a gratitude journal to focus on positive aspects',
      'Seek professional help when feeling overwhelmed',
    ],
  },
  {
    id: 2,
    title: 'Nutrition & Healthy Eating',
    icon: Apple,
    color: 'text-success',
    bgColor: 'bg-success/10',
    tips: [
      'Eat a variety of colorful fruits and vegetables',
      'Choose whole grains over refined grains',
      'Stay hydrated - aim for 8 glasses of water daily',
      'Limit processed foods and added sugars',
      'Include lean proteins in your meals',
      'Practice portion control',
      'Plan meals ahead to make healthier choices',
      'Read nutrition labels to make informed decisions',
    ],
  },
  {
    id: 3,
    title: 'Physical Activity & Exercise',
    icon: Activity,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    tips: [
      'Aim for 150 minutes of moderate activity per week',
      'Take short walks during breaks',
      'Try activities you enjoy to stay motivated',
      'Stretch before and after exercise',
      'Start small and gradually increase intensity',
      'Find a workout buddy for accountability',
      'Mix cardio with strength training',
      'Use stairs instead of elevators when possible',
    ],
  },
  {
    id: 4,
    title: 'Sleep & Rest',
    icon: Sun,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    tips: [
      'Aim for 7-9 hours of sleep per night',
      'Create a relaxing bedtime routine',
      'Keep your bedroom cool, dark, and quiet',
      'Avoid screens 1 hour before bed',
      'Limit caffeine after 2 PM',
      'Exercise regularly but not close to bedtime',
      'Address sleep problems with a healthcare provider',
      'Take short power naps if needed (20-30 minutes)',
    ],
  },
];

const localResources = [
  {
    name: 'Monroe Recreation Department',
    description: 'Free fitness classes and community wellness programs',
    contact: '(318) 329-2190',
  },
  {
    name: 'Ouachita Parish Library',
    description: 'Health and wellness workshops, free resources',
    contact: '(318) 327-1490',
  },
  {
    name: 'Monroe Farmers Market',
    description: 'Fresh local produce, Saturdays 8 AM - 12 PM',
    contact: 'Downtown Monroe',
  },
  {
    name: 'Community Fitness Centers',
    description: 'Affordable gym memberships and group classes',
    contact: 'Various locations',
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setIsOpen(!isOpen)}>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-lg">{question}</CardTitle>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          )}
        </div>
      </CardHeader>
      {isOpen && (
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </CardContent>
      )}
    </Card>
  );
}

export default function WellnessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-10 w-10 text-accent" />
              <h1 className="text-4xl font-bold">Wellness Tips</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Practical advice for maintaining mental and physical health in your daily life
            </p>
          </div>
        </section>

        {/* Wellness Categories */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl space-y-8">
            {wellnessCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="overflow-hidden">
                  <CardHeader className={`${category.bgColor}`}>
                    <div className="flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${category.color}`} />
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">Local Wellness Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {localResources.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{resource.contact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem
                question="How much exercise do I need each week?"
                answer="Adults should aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, plus muscle-strengthening activities on 2 or more days. Start where you are and gradually increase."
              />
              <FAQItem
                question="What can I do to reduce stress?"
                answer="Effective stress management includes regular exercise, adequate sleep, healthy eating, social connections, mindfulness practices, and taking breaks. If stress becomes overwhelming, consider speaking with a mental health professional."
              />
              <FAQItem
                question="How can I improve my sleep quality?"
                answer="Maintain a consistent sleep schedule, create a relaxing bedtime routine, keep your bedroom cool and dark, limit screen time before bed, avoid caffeine late in the day, and address any underlying sleep disorders with your healthcare provider."
              />
              <FAQItem
                question="What are signs I should seek professional help?"
                answer="Seek help if you experience persistent sadness or anxiety, changes in sleep or appetite, difficulty functioning in daily activities, thoughts of self-harm, or if you feel overwhelmed. Early intervention is important."
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-3xl text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" fill="currentColor" />
            <h2 className="text-2xl font-bold mb-4">Need More Support?</h2>
            <p className="text-muted-foreground mb-6">
              If you need professional healthcare or mental health support, visit our resources pages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/clinics">Find a Healthcare Provider</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/emergency">Emergency Contacts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
