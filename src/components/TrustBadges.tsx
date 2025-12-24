import { Shield, Lock, Headphones, RefreshCw } from 'lucide-react';

interface TrustBadgesProps {
  primaryColor?: string;
  variant?: 'horizontal' | 'grid' | 'compact';
  guaranteeDays?: number;
}

interface TrustBadge {
  icon: typeof Shield;
  title: string;
  description?: string;
}

export default function TrustBadges({
  primaryColor = '#3b82f6',
  variant = 'horizontal',
  guaranteeDays = 30,
}: TrustBadgesProps) {
  const badges: TrustBadge[] = [
    {
      icon: Shield,
      title: `${guaranteeDays}-Day Money Back`,
      description: 'Full refund, no questions asked',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'SSL encrypted transactions',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here to help',
    },
    {
      icon: RefreshCw,
      title: 'Instant Activation',
      description: 'Start watching immediately',
    },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 py-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-muted-foreground">
            <badge.icon className="w-4 h-4" style={{ color: primaryColor }} />
            <span className="text-sm font-medium">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <badge.icon className="w-7 h-7" style={{ color: primaryColor }} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
                {badge.description && (
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <badge.icon className="w-6 h-6" style={{ color: primaryColor }} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                {badge.description && (
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
