import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Core Web Vitals monitoring
export const initPerformanceMonitoring = () => {
  // Core Web Vitals
  getCLS((metric) => {
    console.log('CLS:', metric);
    sendToAnalytics('CLS', metric.value);
    sendToSentry('performance', { metric: 'CLS', value: metric.value });
  });

  getFID((metric) => {
    console.log('FID:', metric);
    sendToAnalytics('FID', metric.value);
    sendToSentry('performance', { metric: 'FID', value: metric.value });
  });

  getFCP((metric) => {
    console.log('FCP:', metric);
    sendToAnalytics('FCP', metric.value);
    sendToSentry('performance', { metric: 'FCP', value: metric.value });
  });

  getLCP((metric) => {
    console.log('LCP:', metric);
    sendToAnalytics('LCP', metric.value);
    sendToSentry('performance', { metric: 'LCP', value: metric.value });
  });

  getTTFB((metric) => {
    console.log('TTFB:', metric);
    sendToAnalytics('TTFB', metric.value);
    sendToSentry('performance', { metric: 'TTFB', value: metric.value });
  });
};

// Send metrics to Google Analytics
const sendToAnalytics = (metricName: string, value: number | any) => {
  try {
    if (typeof gtag !== 'undefined') {
      gtag('event', metricName, {
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
    if (typeof window !== 'undefined' && window.Sentry) {
      window.Sentry.addBreadcrumb({
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