import * as Sentry from "@sentry/react";

export const initSentry = () => {
  // Only initialize Sentry if a valid DSN is provided
  const sentryDsn = process.env.VITE_SENTRY_DSN;

  if (!sentryDsn || sentryDsn === "YOUR_SENTRY_DSN_HERE") {
    console.log("Sentry not initialized: No valid DSN provided");
    return;
  }

  try {
    Sentry.init({
      dsn: sentryDsn,
      environment: process.env.NODE_ENV || "development",
      tracesSampleRate: 1.0,

      // Performance Monitoring
      profilesSampleRate: 1.0,

      // Session Replay
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,

      beforeSend(event) {
        // Filter out development errors in production
        if (process.env.NODE_ENV === "development") {
          console.error("Sentry Error:", event);
        }
        return event;
      },

      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
    });
    console.log("Sentry initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Sentry:", error);
  }
};

export const captureError = (error: Error, context?: any) => {
  Sentry.captureException(error, { extra: context });
};

export const captureMessage = (message: string, level: Sentry.SeverityLevel = "info") => {
  Sentry.captureMessage(message, level);
};

export default Sentry;