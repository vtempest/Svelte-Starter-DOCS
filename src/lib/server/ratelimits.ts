import { RetryAfterRateLimiter } from "sveltekit-rate-limiter/server";

/**
 * Verifies the rate limiter for a given request event.
 *
 * @see Rate-Limiter [Rate Limiter Docs](https://github.com/ciscoheat/sveltekit-rate-limiter#how-to-use)
 * @param {RequestEvent} event - The request event to be checked.
 * @param {RetryAfterRateLimiter} limiter - The rate limiter to be used for checking the event.
 * @returns {string} - A string representation of the retry after time in minutes if the event is limited, otherwise undefined.
 */
export async function verifyRateLimiter(event, limiter) {
  const status = await limiter.check(event);
  let retryAfter = "";

  if (status.limited) {
    const retryAfterInMinutes = Math.round(status.retryAfter / 60);
    retryAfter = retryAfterInMinutes.toString();
  }

  return retryAfter;
}

export const loginLimiter = new RetryAfterRateLimiter({
  IP: [5, "s"],
  IPUA: [5, "s"],
});

export const registerLimiter = new RetryAfterRateLimiter({
  IP: [5, "h"],
  IPUA: [5, "h"],
});

export const accountSettingsLimiter = new RetryAfterRateLimiter({
  IP: [3, "h"],
  IPUA: [3, "h"],
});

export const notificationsSettingsLimiter = new RetryAfterRateLimiter({
  IP: [3, "h"],
  IPUA: [3, "h"],
});

export const profileSettingsLimiter = new RetryAfterRateLimiter({
  IP: [3, "h"],
  IPUA: [3, "h"],
});
