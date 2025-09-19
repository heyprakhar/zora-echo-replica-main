/**
 * Performance monitoring - disabled due to web-vitals API changes
 * TODO: Update when web-vitals API stabilizes
 */
export const initPerformanceMonitoring = () => {
  console.debug('Performance monitoring disabled');
};

// Send metrics to Google Analytics
const sendToAnalytics = (metricName: string, value: number | any) => {
  try {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', metricName, {
        value: typeof value === 'number' ? Math.round(value) : value,
        metric_id: `${metricName}-${Date.now()}`,
        custom_parameter: 'core_web_vital'
      });
    }
  } catch (error) {
    console.debug('Analytics not available:', error);
  }
};

// Send metrics to Sentry
const sendToSentry = (category: string, data: any) => {
  try {
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.addBreadcrumb({
        category,
        message: `${data.metric}: ${data.value}`,
        level: 'info',
        data
      });
    }
  } catch (error) {
    console.debug('Sentry not available:', error);
  }
};

// Network Information API monitoring
export const monitorNetworkConditions = () => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;

    const logNetworkInfo = () => {
      console.log('Network Info:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      });

      sendToAnalytics('network_info', {
        effective_type: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      });
    };

    connection.addEventListener('change', logNetworkInfo);
    logNetworkInfo(); // Initial log
  }
};

// Resource timing monitoring
export const monitorResourceTiming = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      // Monitor large resources
      const resources = performance.getEntriesByType('resource');

      resources.forEach((resource: any) => {
        if (resource.transferSize > 100000) { // > 100KB
          console.log('Large resource:', {
            name: resource.name,
            size: resource.transferSize,
            duration: resource.duration
          });

          sendToAnalytics('large_resource', {
            name: resource.name,
            size: resource.transferSize,
            duration: resource.duration
          });
        }
      });
    });
  }
};
