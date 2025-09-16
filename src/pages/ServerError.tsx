import { Button } from "@/components/ui/button";

const ServerError = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-luxury-gold mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-luxury-text mb-4">
            Internal Server Error
          </h2>
          <p className="text-luxury-text-muted mb-8">
            We're experiencing some technical difficulties. Our team has been notified and is working to resolve the issue.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-luxury-gold hover:bg-luxury-gold-dark"
          >
            Try Again
          </Button>

          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="w-full"
          >
            Return Home
          </Button>
        </div>

        <div className="mt-8 text-sm text-luxury-text-muted">
          <p>If the problem persists, please contact us at:</p>
          <a
            href="mailto:support@theoperahouse.com"
            className="text-luxury-gold hover:underline"
          >
            support@theoperahouse.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServerError;